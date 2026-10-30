const { chromium } = require('playwright');
const path = require('path');

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();
  await page.goto('http://localhost:3000/quiz', { waitUntil: 'networkidle' });

  // Step 1 -> Select Dry & click Next Step
  await page.locator('h3:has-text("Dry & Dehydrated")').click();
  await page.waitForTimeout(200);
  await page.locator('button:has-text("Next Step")').click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(__dirname, '..', 'demo', 'images', '41_interactive_routine_quiz_step2.png') });
  console.log('Captured 41_interactive_routine_quiz_step2.png');

  // Step 2 -> Select Radiance & click Next Step
  await page.locator('h3:has-text("Luminous Glow & Radiance")').click();
  await page.waitForTimeout(200);
  await page.locator('button:has-text("Next Step")').click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(__dirname, '..', 'demo', 'images', '42_interactive_routine_quiz_step3.png') });
  console.log('Captured 42_interactive_routine_quiz_step3.png');

  // Step 3 -> Select Sun-Drenched Citrus & click Reveal
  await page.locator('h3:has-text("Sun-Drenched Citrus")').click();
  await page.waitForTimeout(200);
  await page.locator('button:has-text("Reveal My Bespoke Ritual")').click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(__dirname, '..', 'demo', 'images', '43_interactive_routine_quiz_personalized_results.png') });
  console.log('Captured 43_interactive_routine_quiz_personalized_results.png');

  await context.close();
  await browser.close();
}

run().catch(console.error);
