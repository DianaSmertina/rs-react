import express from 'express';
import path from 'node:path';
import fs from 'fs';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';
import render from './dist/server/ServerApp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

  const html = fs
    .readFileSync(path.resolve(__dirname, './dist/client/index.html'), 'utf-8')
    .toString();

  const parts = html.split('<!--ssr-outlet-->');

  app.use((req, res) => {
    res.write(parts[0]);
    const stream = render(req.url, {
      onShellReady() {
        console.log(parts[0]);
        stream.pipe(res);
      },
      onShellError() {
        // do error handling
      },
      onAllReady() {
        console.log(parts[1]);
        res.write(parts[1]);
        res.end();
      },
      onError(err) {
        console.error(err);
      },
    });
  });

  app.listen(5173, () => {
    console.log('Server is running');
  });
}

createServer();
