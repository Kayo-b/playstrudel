import { test, expect } from '@playwright/test';
import { patternHook } from './pattern-hook.ts';

const pattern = patternHook();
let encode = Buffer.from(pattern).toString('base64');
encode = encode.replace(/=+$/, ''); 

console.log(encode)

test('get started link', async ({ page }) => {
  await page.goto(`http://localhost:4321/#${encode}%3D%3D`);
  
  await page.getByRole('button', { name: 'play' }).click();
  await page.waitForTimeout(15000)
  page.pause();
});