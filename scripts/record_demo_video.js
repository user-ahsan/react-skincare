/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @script record_demo_video.js
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @description Master automated Playwright demo video recorder.
 * Produces a complete, fluent 3-4 minute human-like demonstration video
 * clicking buttons, interacting with mega menus, filters, quizzes, cart,
 * checkout, and all 15+ ready-to-ship luxury pages.
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const http = require('http');
const { execSync } = require('child_process');

const VIDEO_DIR = path.join(__dirname, '..', 'demo', 'video');
const BUILD_DIR = path.join(__dirname, '..', 'build');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const PORT = 4455;
const baseUrl = `http://localhost:${PORT}`;

function startServer(port = PORT) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURI(req.url.split('?')[0]);
      let filePath = path.join(BUILD_DIR, reqPath);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
        return;
      }
      const indexPath = path.join(BUILD_DIR, 'index.html');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(indexPath).pipe(res);
    });

    server.on('error', (err) => {
      reject(err);
    });

    server.listen(port, () => {
      console.log(`[Embedded Static Server] Running Aura Botanics on http://localhost:${port}`);
      resolve(server);
    });
  });
}

if (!fs.existsSync(VIDEO_DIR)) {
  fs.mkdirSync(VIDEO_DIR, { recursive: true });
}

// Clean old temporary recording files in VIDEO_DIR
const existingFiles = fs.readdirSync(VIDEO_DIR);
for (const f of existingFiles) {
  try {
    fs.unlinkSync(path.join(VIDEO_DIR, f));
  } catch (e) {}
}

async function smoothScroll(page, targetY, durationMs = 1200) {
  try {
    const startY = await page.evaluate(() => window.scrollY);
    const diff = targetY - startY;
    const steps = 25;
    const stepTime = Math.max(10, Math.floor(durationMs / steps));
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const currentY = startY + diff * ease;
      await page.evaluate((y) => window.scrollTo(0, y), currentY);
      await page.waitForTimeout(stepTime);
    }
  } catch (e) {}
}

async function humanHover(page, selector, waitMs = 700) {
  try {
    const el = page.locator(selector).first();
    if (await el.isVisible({ timeout: 2000 })) {
      const box = await el.boundingBox();
      if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 12 });
        await page.waitForTimeout(waitMs);
      }
    }
  } catch (e) {}
}

async function humanClick(page, selector, waitAfter = 600) {
  try {
    const el = page.locator(selector).first();
    if (await el.isVisible({ timeout: 2000 })) {
      const box = await el.boundingBox();
      if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 10 });
        await page.waitForTimeout(150);
        await el.click({ timeout: 3000 });
        await page.waitForTimeout(waitAfter);
      }
    }
  } catch (e) {}
}

async function humanType(page, selector, text, delayMs = 50) {
  try {
    const input = page.locator(selector).first();
    if (await input.isVisible({ timeout: 2000 })) {
      await input.click();
      await input.fill('');
      for (const char of text) {
        await page.keyboard.type(char, { delay: delayMs });
      }
      await page.waitForTimeout(300);
    }
  } catch (e) {}
}

async function run() {
  console.log('====================================================');
  console.log('Starting Playwright Master Demo Video Recording...');
  console.log('Target duration: ~3 to 4 minutes (fluent human-like navigation)');
  console.log('====================================================\n');

  const server = await startServer(PORT);

  const browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: VIDEO_DIR,
      size: { width: 1920, height: 1080 },
    },
  });

  const page = await context.newPage();

  // Verification step: Ensure we are recording Aura Botanics
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  const title = await page.title();
  console.log(`[Verified Storefront Title]: "${title}"`);
  if (!title.includes('Aura Botanics')) {
    throw new Error(`CRITICAL ERROR: Expected Aura Botanics in page title, got "${title}"!`);
  }

  // ----------------------------------------------------
  // ACT 1: HOMEPAGE ARRIVAL & LUXURY NAVIGATION (0:00 - 0:30)
  // ----------------------------------------------------
  console.log('Act 1: Loading Storefront & Mega-Menus...');
  await page.waitForTimeout(1000);

  // Smooth scroll past Hero Carousel to Press Marquee
  await smoothScroll(page, 750, 1500);
  await page.waitForTimeout(800);

  // Scroll to Best Sellers section
  await smoothScroll(page, 1550, 1500);
  await page.waitForTimeout(800);

  // Scroll to Ritual Quiz Banner & Apothecary pillars
  await smoothScroll(page, 2400, 1600);
  await page.waitForTimeout(800);

  await smoothScroll(page, 3400, 1600);
  await page.waitForTimeout(800);

  // Botanical ingredients spotlight
  await smoothScroll(page, 4300, 1600);
  await page.waitForTimeout(800);

  // Return to top to explore desktop Mega-Menus
  await smoothScroll(page, 0, 1800);
  await page.waitForTimeout(600);

  // Hover over "BEST SELLERS" Mega Menu
  console.log('Hovering Best Sellers Mega-Menu...');
  await humanHover(page, 'span:has-text("BEST SELLERS")', 1400);

  // Hover over "GIFT SETS" Mega Menu
  console.log('Hovering Gift Sets Mega-Menu...');
  await humanHover(page, 'span:has-text("GIFT SETS")', 1400);

  // Hover over "SHOP RANGE" Mega Menu
  console.log('Hovering Shop Range Mega-Menu...');
  await humanHover(page, 'span:has-text("SHOP RANGE")', 1400);

  // Hover over "EXPERIENCES" Mega Menu
  console.log('Hovering Experiences Mega-Menu...');
  await humanHover(page, 'span:has-text("EXPERIENCES")', 1600);

  // Move mouse away to dismiss
  await page.mouse.move(50, 50, { steps: 5 });
  await page.waitForTimeout(400);

  // Click Quick Search Icon and type query
  console.log('Demonstrating Quick Search...');
  await humanClick(page, 'button[aria-label="Search Catalog"]', 400);
  await humanType(page, 'input[placeholder="Search botanicals..."]', 'Botanical Rose', 60);
  await page.waitForTimeout(700);
  await humanClick(page, 'button:has-text("✕")', 400);

  // ----------------------------------------------------
  // ACT 2: CATALOG BROWSER & ADVANCED FILTERS (0:30 - 1:05)
  // ----------------------------------------------------
  console.log('Act 2: Exploring Catalog & Filters...');
  await page.goto(`${baseUrl}/shop`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // Scroll slightly down to showcase the filters
  await smoothScroll(page, 300, 1000);
  await page.waitForTimeout(500);

  // Switch category tabs
  console.log('Filtering: Skincare category...');
  await humanClick(page, 'button:has-text("Skincare")', 800);

  console.log('Filtering: Body Care category...');
  await humanClick(page, 'button:has-text("Body Care")', 800);

  console.log('Filtering: Haircare category...');
  await humanClick(page, 'button:has-text("Haircare")', 800);

  console.log('Filtering: Aromatherapy category...');
  await humanClick(page, 'button:has-text("Aromatherapy")', 800);

  console.log('Filtering: Gift Sets category...');
  await humanClick(page, 'button:has-text("Gift Sets")', 800);

  console.log('Resetting to All Products...');
  await humanClick(page, 'button:has-text("All")', 600);

  // Toggle sorting dropdown
  console.log('Changing sort order...');
  try {
    const sortSelect = page.locator('select').first();
    if (await sortSelect.isVisible({ timeout: 1500 })) {
      await sortSelect.selectOption({ value: 'price-low' });
      await page.waitForTimeout(800);
      await sortSelect.selectOption({ value: 'price-high' });
      await page.waitForTimeout(800);
      await sortSelect.selectOption({ value: 'featured' });
      await page.waitForTimeout(600);
    }
  } catch (e) {}

  // Wishlist an item
  console.log('Toggling Wishlist on catalog item...');
  try {
    const heartBtn = page.locator('button[aria-label="Save to Wishlist"]').first();
    if (await heartBtn.isVisible({ timeout: 1500 })) {
      await heartBtn.click();
      await page.waitForTimeout(1000);
    }
  } catch (e) {}

  // Smooth scroll through catalog products
  await smoothScroll(page, 1100, 1400);
  await page.waitForTimeout(700);

  // ----------------------------------------------------
  // ACT 3: CURATED COLLECTIONS (1:05 - 1:30)
  // ----------------------------------------------------
  console.log('Act 3: Visiting Collections...');
  await page.goto(`${baseUrl}/collections`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 600, 1200);
  await page.waitForTimeout(700);

  // Visit Skincare Collection
  await page.goto(`${baseUrl}/collections/skincare`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 700, 1200);
  await page.waitForTimeout(700);

  // Visit Body Sanctuary Collection
  await page.goto(`${baseUrl}/collections/body`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 700, 1200);
  await page.waitForTimeout(700);

  // Visit Curated Under $20
  console.log('Visiting Under $20 Essentials...');
  await page.goto(`${baseUrl}/under20`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 800, 1400);
  await page.waitForTimeout(800);

  // Visit Curated For Her
  console.log('Visiting For Her Curated Selection...');
  await page.goto(`${baseUrl}/forher`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 800, 1400);
  await page.waitForTimeout(800);

  // ----------------------------------------------------
  // ACT 4: SINGLE PRODUCT DETAIL & GALLERY (1:30 - 2:05)
  // ----------------------------------------------------
  console.log('Act 4: Single Product Detail Experience...');
  await page.goto(`${baseUrl}/1`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Click angle thumbnails to showcase gallery interaction
  console.log('Interacting with product image gallery...');
  await humanClick(page, 'button[type="button"]:has(img[alt*="view 2"])', 800);
  await humanClick(page, 'button[type="button"]:has(img[alt*="view 3"])', 800);
  await humanClick(page, 'button[type="button"]:has(img[alt*="view 1"])', 600);

  // Adjust quantity
  console.log('Incrementing quantity selector...');
  await humanClick(page, 'button:has-text("+")', 400);
  await humanClick(page, 'button:has-text("+")', 400);
  await page.waitForTimeout(400);

  // Click "ADD TO BAG"
  console.log('Adding product to bag...');
  await humanClick(page, 'button:has-text("ADD TO BAG")', 1200);

  // Toggle wishlist heart
  console.log('Saving to wishlist...');
  await humanClick(page, 'button[aria-label="Toggle Wishlist"]', 800);

  // Expand botanical accordions
  console.log('Expanding botanical accordions...');
  await humanClick(page, 'button:has-text("RITUAL APPLICATION")', 900);
  await humanClick(page, 'button:has-text("CERTIFIED INGREDIENTS")', 900);

  // Scroll to "You May Also Like"
  await smoothScroll(page, 1100, 1200);
  await page.waitForTimeout(800);

  // Scroll to Verified Customer Reflections & filter keyword
  await smoothScroll(page, 1900, 1400);
  await page.waitForTimeout(700);

  console.log('Filtering reviews by keyword "Glow"...');
  await humanClick(page, 'button:has-text("Glow")', 700);
  console.log('Filtering reviews by keyword "Hydration"...');
  await humanClick(page, 'button:has-text("Hydration")', 700);

  // ----------------------------------------------------
  // ACT 5: INTERACTIVE ROUTINE DIAGNOSTIC QUIZ (2:05 - 2:35)
  // ----------------------------------------------------
  console.log('Act 5: Interactive Routine Quiz Diagnostic...');
  await page.goto(`${baseUrl}/quiz`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);

  // Step 1: Select "Dry & Dehydrated"
  console.log('Quiz Step 1: Selecting Dry Skin...');
  await humanClick(page, 'h3:has-text("Dry & Dehydrated")', 500);
  await humanClick(page, 'button:has-text("Next Step")', 700);

  // Step 2: Select "Luminous Glow & Radiance"
  console.log('Quiz Step 2: Selecting Glow Target...');
  await humanClick(page, 'h3:has-text("Luminous Glow & Radiance")', 500);
  await humanClick(page, 'button:has-text("Next Step")', 700);

  // Step 3: Select "Sun-Drenched Citrus"
  console.log('Quiz Step 3: Selecting Citrus Aromatherapy...');
  await humanClick(page, 'h3:has-text("Sun-Drenched Citrus")', 500);
  await humanClick(page, 'button:has-text("Reveal My Bespoke Ritual")', 1200);

  // Review tailored 3-step recommendation and click "Add Complete Ritual to Bag"
  console.log('Viewing tailored recommendation & adding complete ritual to bag...');
  await smoothScroll(page, 400, 1000);
  await page.waitForTimeout(800);

  await humanClick(page, 'button:has-text("Add Complete Ritual to Bag")', 1200);

  // ----------------------------------------------------
  // ACT 6: SHOPPING CART & CHECKOUT (2:35 - 3:05)
  // ----------------------------------------------------
  console.log('Act 6: Shopping Cart & Checkout...');
  await page.goto(`${baseUrl}/cart`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Scroll through cart items
  await smoothScroll(page, 300, 1000);
  await page.waitForTimeout(600);

  // Enter promo code AHSAN20
  console.log('Applying VIP Promo Code AHSAN20...');
  try {
    const promoInput = page.locator('input[placeholder*="promo" i], input[placeholder*="coupon" i], input[placeholder*="code" i]').first();
    if (await promoInput.isVisible({ timeout: 1500 })) {
      await promoInput.fill('AHSAN20');
      await page.waitForTimeout(400);
      const applyBtn = page.locator('button:has-text("Apply")').first();
      if (await applyBtn.isVisible({ timeout: 1000 })) {
        await applyBtn.click();
        await page.waitForTimeout(1000);
      }
    }
  } catch (e) {}

  // Proceed to Checkout
  console.log('Navigating to Checkout...');
  await page.goto(`${baseUrl}/checkout`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Fill in sample checkout concierge details
  console.log('Demonstrating Checkout Form...');
  try {
    const firstNameInput = page.locator('input[name="firstName"], input[placeholder*="First Name" i]').first();
    if (await firstNameInput.isVisible({ timeout: 1500 })) {
      await firstNameInput.fill('Ahsan');
      await page.waitForTimeout(200);
    }

    const lastNameInput = page.locator('input[name="lastName"], input[placeholder*="Last Name" i]').first();
    if (await lastNameInput.isVisible({ timeout: 1000 })) {
      await lastNameInput.fill('Sheikh');
      await page.waitForTimeout(200);
    }

    const addressInput = page.locator('input[name="address"], input[placeholder*="Address" i]').first();
    if (await addressInput.isVisible({ timeout: 1000 })) {
      await addressInput.fill('742 Botanical Avenue, Suite 100');
      await page.waitForTimeout(200);
    }

    const cityInput = page.locator('input[name="city"], input[placeholder*="City" i]').first();
    if (await cityInput.isVisible({ timeout: 1000 })) {
      await cityInput.fill('New York');
      await page.waitForTimeout(200);
    }
  } catch (e) {}

  // Smooth scroll through order summary & payment methods
  await smoothScroll(page, 600, 1200);
  await page.waitForTimeout(1000);

  // Visit Wishlist
  console.log('Visiting Wishlist...');
  await page.goto(`${baseUrl}/wishlist`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);
  await smoothScroll(page, 400, 1000);
  await page.waitForTimeout(600);

  // ----------------------------------------------------
  // ACT 7: LUXURY BRAND EXPERIENCES (3:05 - 3:35)
  // ----------------------------------------------------
  console.log('Act 7: Luxury Brand Experiences...');
  // Digital Gift Cards
  console.log('Visiting Digital Gift Cards...');
  await page.goto(`${baseUrl}/gift-cards`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await humanClick(page, 'button:has-text("$100")', 500);
  await humanClick(page, 'button:has-text("$250")', 600);
  await smoothScroll(page, 500, 1000);
  await page.waitForTimeout(600);

  // VIP Rewards Circle
  console.log('Visiting VIP Rewards Circle...');
  await page.goto(`${baseUrl}/rewards`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 800, 1200);
  await page.waitForTimeout(700);

  // Global Boutique Ateliers
  console.log('Visiting Global Boutique Ateliers...');
  await page.goto(`${baseUrl}/locations`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 700, 1200);
  await page.waitForTimeout(700);

  // Botanical Glossary A-Z
  console.log('Visiting Botanical Glossary A-Z...');
  await page.goto(`${baseUrl}/ingredients`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 900, 1400);
  await page.waitForTimeout(700);

  // Our Story / Philosophy
  console.log('Visiting Brand Story & Philosophy...');
  await page.goto(`${baseUrl}/about`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 1000, 1400);
  await page.waitForTimeout(700);

  // Wellness Journal Editorial
  console.log('Visiting Wellness Journal Hub...');
  await page.goto(`${baseUrl}/journal`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 600, 1200);
  await page.waitForTimeout(700);

  // Single Editorial Story
  console.log('Reading Single Editorial Article...');
  await page.goto(`${baseUrl}/journal/art-of-slow-skincare`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 800, 1200);
  await page.waitForTimeout(700);

  // Sustainability Pledge
  console.log('Visiting Sustainability Pledge...');
  await page.goto(`${baseUrl}/sustainability`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 700, 1200);
  await page.waitForTimeout(600);

  // Press & Media Kit
  console.log('Visiting Press Mentions & Media Kit...');
  await page.goto(`${baseUrl}/press`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 600, 1200);
  await page.waitForTimeout(600);

  // ----------------------------------------------------
  // ACT 8: CLIENT CARE, TRACKING & GRAND FINALE (3:35 - 3:55)
  // ----------------------------------------------------
  console.log('Act 8: Client Care, FAQ & Live Tracking...');
  // FAQ Accordion
  await page.goto(`${baseUrl}/faq`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  console.log('Testing FAQ Accordion interaction...');
  await humanClick(page, 'button:has-text("Is shipping really free")', 700);
  await smoothScroll(page, 500, 1000);
  await page.waitForTimeout(600);

  // Live Order Tracker
  console.log('Visiting Live Order Tracker...');
  await page.goto(`${baseUrl}/track-order`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  try {
    const trackInput = page.locator('input[placeholder*="AB-" i]').first();
    if (await trackInput.isVisible({ timeout: 1500 })) {
      await trackInput.fill('AB-2026-8941');
      await page.waitForTimeout(300);
      const trackBtn = page.locator('button:has-text("Track")').first();
      if (await trackBtn.isVisible({ timeout: 1000 })) {
        await trackBtn.click();
        await page.waitForTimeout(900);
      }
    }
  } catch (e) {}

  // Concierge Contact Desk
  console.log('Visiting Concierge Contact...');
  await page.goto(`${baseUrl}/contact`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await smoothScroll(page, 500, 1000);
  await page.waitForTimeout(600);

  // Grand Finale: Return to Homepage and smooth panoramic scroll
  console.log('Grand Finale: Returning to Homefront for full panorama...');
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await smoothScroll(page, 1800, 1800);
  await page.waitForTimeout(800);
  await smoothScroll(page, 4500, 2000);
  await page.waitForTimeout(800);
  await smoothScroll(page, 6800, 1800);
  await page.waitForTimeout(1500);

  // Wrap up context and close browser to finalize video file
  console.log('Finalizing video recording stream...');
  const video = page.video();
  await page.close();
  await context.close();
  await browser.close();

  let finalVideoPath = null;
  if (video) {
    try {
      finalVideoPath = await video.path();
    } catch (e) {}
  }

  // Find the generated video in VIDEO_DIR if video.path() wasn't found
  if (!finalVideoPath || !fs.existsSync(finalVideoPath)) {
    const files = fs.readdirSync(VIDEO_DIR);
    const rawVideo = files.find(f => f.endsWith('.webm'));
    if (rawVideo) finalVideoPath = path.join(VIDEO_DIR, rawVideo);
  }

  if (finalVideoPath && fs.existsSync(finalVideoPath)) {
    const destWebm = path.join(VIDEO_DIR, 'aura_botanics_master_demo.webm');
    const destMp4 = path.join(VIDEO_DIR, 'aura_botanics_master_demo.mp4');

    if (finalVideoPath !== destWebm) {
      fs.copyFileSync(finalVideoPath, destWebm);
      try { fs.unlinkSync(finalVideoPath); } catch (e) {}
    }
    console.log(`[Master WebM Video Saved] ${destWebm}`);

    // Transcode to MP4 with ffmpeg for universal playback
    try {
      console.log('Transcoding to MP4 with FFmpeg for universal high-definition compatibility...');
      execSync(`ffmpeg -y -i "${destWebm}" -c:v libx264 -pix_fmt yuv420p -preset medium -crf 20 "${destMp4}"`, { stdio: 'inherit' });
      console.log(`[Master MP4 Video Converted] ${destMp4}`);
    } catch (e) {
      console.warn('FFmpeg transcoding skipped or failed:', e.message);
    }
  }

  if (server) {
    server.close();
    console.log('[Embedded Static Server] Stopped.');
  }

  console.log('\n====================================================');
  console.log('COMPLETE DEMO VIDEO RECORDED SUCCESSFULLY IN demo/video/');
  console.log('====================================================\n');
}

run().catch((err) => {
  console.error('Demo video recording failed:', err);
  process.exit(1);
});
