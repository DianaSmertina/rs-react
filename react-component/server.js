import express from 'express';
import path from 'node:path';
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

  app.use((req, res) => {
    const stream = render(req.url, {
      onShellReady() {
        stream.pipe(res);
      },
      onShellError() {
        // do error handling
      },
      onAllReady() {
        // last thing to write
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
