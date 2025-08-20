import { chromium } from 'playwright';
import { patternHook } from './pattern-hook';
async function main() {
  const pattern = patternHook();
  let encode = Buffer.from(pattern).toString('base64');
  encode = encode.replace(/=+$/, ''); 

  const browser = await chromium.launch({
    headless: false
  })
  const page = await browser.newPage(); 

  // Your automation code here
    await page.goto(`http://localhost:4321/#${encode}%3D%3D`);
    await page.getByRole('button', { name: 'play' }).click();
    await page.waitForTimeout(15000)

}
main()