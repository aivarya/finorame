import puppeteer from 'puppeteer';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, 'finora_front_redesign.html');
const pdfPath = path.join(__dirname, 'finora_business_card_front_redesigned.pdf');
const pngPath = path.join(__dirname, 'finora_business_card_front_redesigned_preview.png');

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({
  width: 1157,
  height: 760,
  deviceScaleFactor: 2,
});
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle0' });

await page.pdf({
  path: pdfPath,
  printBackground: true,
  width: '4.01575in',
  height: '2.63780in',
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  preferCSSPageSize: true,
  pageRanges: '1',
});

const card = await page.$('.card');
await card.screenshot({ path: pngPath });

await browser.close();

console.log(`PDF: ${pdfPath}`);
console.log(`Preview: ${pngPath}`);
