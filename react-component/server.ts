import express from 'express';
import path from 'node:path';
import fs from 'fs';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5173;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  // app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

  const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8').toString();

  const parts = html.split('<!--ssr-outlet-->');

  const { render } = await vite.ssrLoadModule('/src/server/ServerApp.tsx');

  app.use((req, res) => {
    res.write(parts[0]);
    const stream = render(req.url, {
      onShellReady() {
        stream.pipe(res);
      },
      onShellError() {
        // do error handling
      },
      onAllReady() {
        res.write(parts[1]);
        res.end();
      },
      onError(err: Error) {
        console.error(err);
      },
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

createServer();
