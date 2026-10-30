/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @script capture_screenshots.js
 * @description Comprehensive automated screenshot generator capturing desktop views
 * of each page, section, category, and interaction in numbered sequential order.
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, '..', 'demo', 'images');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  console.log('Starting Desktop Screenshot Capture...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5, // Crisp retina-quality rendering
  });
  const page = await context.newPage();

  const baseUrl = 'http://localhost:3000';

  const take = async (filename, opts = {}) => {
    const fullPath = path.join(OUTPUT_DIR, filename);
    await page.screenshot({ path: fullPath, fullPage: opts.fullPage || false });
    console.log(`[Captured] ${filename}`);
  };

  const wait = (ms) => new Promise((res) => setTimeout(res, ms));

  // ==========================================
  // PART 1: HOMEPAGE SECTIONS & MEGA MENUS
  // ==========================================
  console.log('--- Part 1: Homepage & Navigation ---');
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await wait(500);

  // 01: Hero View (Top)
  await take('01_home_hero_and_announcement.png');

  // 02: Press Marquee & 4 Eco-Luxe Pillars
  await page.evaluate(() => window.scrollTo({ top: 750, behavior: 'instant' }));
  await wait(400);
  await take('02_home_press_marquee_and_pillars.png');

  // 03: Best Sellers Product Showcase
  await page.evaluate(() => window.scrollTo({ top: 1550, behavior: 'instant' }));
  await wait(400);
  await take('03_home_bestsellers_grid.png');

  // 04: Ritual Quiz Banner CTA
  await page.evaluate(() => window.scrollTo({ top: 2300, behavior: 'instant' }));
  await wait(400);
  await take('04_home_ritual_quiz_banner.png');

  // 05: Apothecary Craftsmanship Pillars
  await page.evaluate(() => window.scrollTo({ top: 2950, behavior: 'instant' }));
  await wait(400);
  await take('05_home_apothecary_craftsmanship.png');

  // 06: Pure Botanical Ingredients
  await page.evaluate(() => window.scrollTo({ top: 3800, behavior: 'instant' }));
  await wait(400);
  await take('06_home_botanical_ingredients.png');

  // 07: Wellness Journal Preview
  await page.evaluate(() => window.scrollTo({ top: 4800, behavior: 'instant' }));
  await wait(400);
  await take('07_home_wellness_journal_preview.png');

  // 08: Instagram Community Marquee
  await page.evaluate(() => window.scrollTo({ top: 5700, behavior: 'instant' }));
  await wait(400);
  await take('08_home_instagram_marquee.png');

  // 09: Luxury E-Commerce Footer
  await page.evaluate(() => window.scrollTo({ top: 6800, behavior: 'instant' }));
  await wait(400);
  await take('09_home_luxury_footer.png');

  // Return to top for Navbar Mega-Menus
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await wait(300);

  // 10: Best Sellers Mega Dropdown
  const bestSellersNavItem = page.locator('span:has-text("BEST SELLERS")').first();
  await bestSellersNavItem.hover();
  await wait(350);
  await take('10_nav_bestsellers_megamenu.png');

  // 11: Gift Sets Mega Dropdown
  const giftSetsNavItem = page.locator('span:has-text("GIFT SETS")').first();
  await giftSetsNavItem.hover();
  await wait(350);
  await take('11_nav_giftsets_megamenu.png');

  // 12: Shop Range Mega Dropdown
  const shopRangeNavItem = page.locator('span:has-text("SHOP RANGE")').first();
  await shopRangeNavItem.hover();
  await wait(350);
  await take('12_nav_shoprange_megamenu.png');

  // 13: Experiences Mega Dropdown
  const expNavItem = page.locator('span:has-text("EXPERIENCES")').first();
  await expNavItem.hover();
  await wait(350);
  await take('13_nav_experiences_megamenu.png');

  // Click away to close dropdown
  await page.mouse.move(10, 10);
  await wait(200);

  // 14: Quick Search Overlay
  const searchBtn = page.locator('button[aria-label="Search Catalog"]').first();
  if (await searchBtn.isVisible()) {
    await searchBtn.click();
    await wait(200);
    const searchInput = page.locator('input[placeholder="Search botanicals..."]');
    await searchInput.fill('Organic Hydration Mist');
    await wait(250);
    await take('14_nav_quick_search_bar.png');
    // Clear search
    await page.locator('button:has-text("✕")').click();
    await wait(200);
  }

  // ==========================================
  // PART 2: CATALOG & CATEGORY EXPLORATION
  // ==========================================
  console.log('--- Part 2: Catalog & Categories ---');
  await page.goto(`${baseUrl}/shop`, { waitUntil: 'networkidle' });
  await wait(400);
  // 15: All Catalog Products
  await take('15_catalog_all_products.png');

  // 16: Category Filtering - Skincare
  const skincareTab = page.locator('button:has-text("Skincare")').first();
  await skincareTab.click();
  await wait(350);
  await take('16_catalog_category_skincare.png');

  // 17: Category Filtering - Body Care
  const bodyCareTab = page.locator('button:has-text("Body Care")').first();
  await bodyCareTab.click();
  await wait(350);
  await take('17_catalog_category_body_care.png');

  // 18: Category Filtering - Haircare
  const haircareTab = page.locator('button:has-text("Haircare")').first();
  await haircareTab.click();
  await wait(350);
  await take('18_catalog_category_haircare.png');

  // 19: Category Filtering - Aromatherapy
  const aromaTab = page.locator('button:has-text("Aromatherapy")').first();
  await aromaTab.click();
  await wait(350);
  await take('19_catalog_category_aromatherapy.png');

  // 20: Category Filtering - Tools
  const toolsTab = page.locator('button:has-text("Tools")').first();
  await toolsTab.click();
  await wait(350);
  await take('20_catalog_category_tools.png');

  // 21: Category Filtering - Bath & Body
  const bathTab = page.locator('button:has-text("Bath & Body")').first();
  await bathTab.click();
  await wait(350);
  await take('21_catalog_category_bath_body.png');

  // 22: Category Filtering - Grooming
  const groomingTab = page.locator('button:has-text("Grooming")').first();
  await groomingTab.click();
  await wait(350);
  await take('22_catalog_category_grooming.png');

  // 23: Category Filtering - Sun & Lip
  const sunLipTab = page.locator('button:has-text("Sun & Lip")').first();
  await sunLipTab.click();
  await wait(350);
  await take('23_catalog_category_sun_lip.png');

  // 24: Category Filtering - Gift Sets
  const giftSetsTab = page.locator('button:has-text("Gift Sets")').first();
  await giftSetsTab.click();
  await wait(350);
  await take('24_catalog_category_gift_sets.png');

  // ==========================================
  // PART 3: DEDICATED COLLECTIONS & CURATED PAGES
  // ==========================================
  console.log('--- Part 3: Collections Hub & Curated Pages ---');
  await page.goto(`${baseUrl}/collections`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('25_collections_overview_hub.png');

  await page.goto(`${baseUrl}/collections/skincare`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('26_collections_skincare.png');

  await page.goto(`${baseUrl}/collections/body`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('27_collections_body_sanctuary.png');

  await page.goto(`${baseUrl}/collections/haircare`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('28_collections_haircare.png');

  await page.goto(`${baseUrl}/collections/aromatherapy`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('29_collections_aromatherapy.png');

  await page.goto(`${baseUrl}/collections/gift-sets`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('30_collections_gift_boxes.png');

  await page.goto(`${baseUrl}/under20`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('31_curated_under20_essentials.png');

  await page.goto(`${baseUrl}/under40`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('32_curated_under40_bundles.png');

  await page.goto(`${baseUrl}/forher`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('33_curated_for_her.png');

  await page.goto(`${baseUrl}/forhim`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('34_curated_for_him.png');

  // ==========================================
  // PART 4: SINGLE PRODUCT DETAIL EXPERIENCE
  // ==========================================
  console.log('--- Part 4: Single Product Detail ---');
  await page.goto(`${baseUrl}/1`, { waitUntil: 'networkidle' });
  await wait(400);
  // 35: Product Showcase Overview
  await take('35_single_product_overview.png');

  // 36: Thumbnail Click Gallery Interaction
  const secondThumb = page.locator('button[type="button"]:has(img[alt*="view 2"])').first();
  if (await secondThumb.isVisible()) {
    await secondThumb.click();
    await wait(300);
    await take('36_single_product_gallery_interaction.png');
  }

  // 37: Botanical Ingredients Accordions
  await page.evaluate(() => window.scrollTo({ top: 600, behavior: 'instant' }));
  await wait(400);
  await take('37_single_product_botanical_accordions.png');

  // 38: "You May Also Like" Curated Slider
  await page.evaluate(() => window.scrollTo({ top: 1350, behavior: 'instant' }));
  await wait(400);
  await take('38_single_product_you_may_also_like.png');

  // 39: Reviews Breakdown & Search Box
  await page.evaluate(() => window.scrollTo({ top: 2150, behavior: 'instant' }));
  await wait(400);
  await take('39_single_product_reviews_and_keywords.png');

  // ==========================================
  // PART 5: INTERACTIVE ROUTINE QUIZ
  // ==========================================
  console.log('--- Part 5: Routine Quiz ---');
  await page.goto(`${baseUrl}/quiz`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('40_interactive_routine_quiz_step1.png');

  // Click "Dry / Dehydrated"
  const dryBtn = page.locator('button:has-text("Dry / Dehydrated")').first();
  if (await dryBtn.isVisible()) {
    await dryBtn.click();
    await wait(350);
    await take('41_interactive_routine_quiz_step2.png');

    // Click "Anti-Aging & Firming"
    const goalBtn = page.locator('button:has-text("Anti-Aging & Firming")').first();
    await goalBtn.click();
    await wait(350);
    await take('42_interactive_routine_quiz_step3.png');

    // Click "Citrus & Uplifting"
    const scentBtn = page.locator('button:has-text("Citrus & Uplifting")').first();
    await scentBtn.click();
    await wait(500);
    await take('43_interactive_routine_quiz_personalized_results.png');
  }

  // ==========================================
  // PART 6: CART, CHECKOUT & WISHLIST
  // ==========================================
  console.log('--- Part 6: Cart & Checkout ---');
  // Add item from single product page or quiz to cart
  await page.goto(`${baseUrl}/1`, { waitUntil: 'networkidle' });
  await wait(300);
  const addToCartBtn = page.locator('button:has-text("ADD TO BAG")').first();
  await addToCartBtn.click();
  await wait(500);

  // Navigate to Cart
  await page.goto(`${baseUrl}/cart`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('44_cart_view_with_items.png');

  // Navigate to Checkout
  await page.goto(`${baseUrl}/checkout`, { waitUntil: 'networkidle' });
  await wait(500);
  await take('45_checkout_order_review_and_payments.png');

  // Wishlist
  await page.goto(`${baseUrl}/wishlist`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('46_wishlist_page.png');

  // ==========================================
  // PART 7: LUXURY BRAND EXPERIENCES
  // ==========================================
  console.log('--- Part 7: Luxury Experiences & Editorial ---');
  await page.goto(`${baseUrl}/gift-cards`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('47_luxury_digital_gift_cards.png');

  await page.goto(`${baseUrl}/rewards`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('48_botanical_circle_vip_rewards.png');

  await page.goto(`${baseUrl}/locations`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('49_global_boutique_ateliers.png');

  await page.goto(`${baseUrl}/ingredients`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('50_botanical_glossary_a_to_z.png');

  await page.goto(`${baseUrl}/about`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('51_brand_story_our_philosophy.png');

  await page.goto(`${baseUrl}/journal`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('52_wellness_journal_hub.png');

  await page.goto(`${baseUrl}/journal/art-of-slow-skincare`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('53_single_journal_article.png');

  await page.goto(`${baseUrl}/sustainability`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('54_sustainability_pledge.png');

  await page.goto(`${baseUrl}/reviews`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('55_verified_customer_reviews.png');

  await page.goto(`${baseUrl}/press`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('56_press_and_media_mentions.png');

  await page.goto(`${baseUrl}/careers`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('57_atelier_careers.png');

  // ==========================================
  // PART 8: CLIENT CARE, TRACKING & POLICIES
  // ==========================================
  console.log('--- Part 8: Client Care & Policies ---');
  await page.goto(`${baseUrl}/faq`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('58_client_care_faq_accordion.png');

  await page.goto(`${baseUrl}/track-order`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('59_live_order_tracker.png');

  await page.goto(`${baseUrl}/contact`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('60_concierge_contact_desk.png');

  await page.goto(`${baseUrl}/shipping-policy`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('61_shipping_and_returns_policy.png');

  await page.goto(`${baseUrl}/privacy`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('62_privacy_and_data_security.png');

  await page.goto(`${baseUrl}/terms`, { waitUntil: 'networkidle' });
  await wait(400);
  await take('63_terms_of_service.png');

  await context.close();
  await browser.close();

  console.log('\n===========================================');
  console.log('All 63 Desktop Screenshots captured successfully in demo/images/');
  console.log('===========================================\n');
}

run().catch((err) => {
  console.error('Screenshot capture failed:', err);
  process.exit(1);
});
