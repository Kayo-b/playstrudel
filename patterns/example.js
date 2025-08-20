import { chromium } from 'playwright';
import { patternHook } from './pattern-hook.js';

async function main() {
  const pattern = patternHook();
  let encode = Buffer.from(pattern).toString('base64');
  encode = encode.replace(/=+$/, ''); 

  const browser = await chromium.launch({
    headless: false,
  })
  const page = await browser.newPage(); 

  await page.goto(`http://localhost:4321/#${encode}%3D`);
  await page.getByRole('button', { name: 'play' }).click();

}
main()