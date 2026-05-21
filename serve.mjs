import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

function loadEnv() {
  try {
    const raw = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
    const env = {};
    for (const line of raw.split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const idx = t.indexOf('=');
      if (idx === -1) continue;
      env[t.slice(0, idx).trim()] = t.slice(idx + 1).trim();
    }
    return env;
  } catch (_) {
    return {};
  }
}

const env = loadEnv();

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

http.createServer((req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url.split('?')[0];

  if (urlPath === '/env-config.js') {
    const config = {
      airtableBaseId:    env.AIRTABLE_BASE_ID    || '',
      airtableTableName: env.AIRTABLE_TABLE_NAME  || 'Consultations',
      airtableToken:     env.AIRTABLE_API_TOKEN   || '',
      emailjsServiceId:  env.EMAILJS_SERVICE_ID   || '',
      emailjsTemplateId: env.EMAILJS_TEMPLATE_ID  || '',
      emailjsPublicKey:  env.EMAILJS_PUBLIC_KEY   || ''
    };
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end('window._FINORA = ' + JSON.stringify(config) + ';');
    return;
  }

  const filePath = path.join(__dirname, urlPath);
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Finora dev server → http://localhost:${PORT}`);
});
