const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/shop',
  '/collections',
  '/collections/skincare',
  '/collections/body',
  '/collections/haircare',
  '/collections/aromatherapy',
  '/collections/gift-sets',
  '/collections/tools',
  '/collections/travel',
  '/under20',
  '/under40',
  '/forher',
  '/forhim',
  '/cart',
  '/checkout',
  '/wishlist',
  '/quiz',
  '/gift-cards',
  '/rewards',
  '/locations',
  '/ingredients',
  '/about',
  '/journal',
  '/journal/april',
  '/journal/art-of-slow-skincare',
  '/sustainability',
  '/reviews',
  '/press',
  '/careers',
  '/contact',
  '/faq',
  '/track-order',
  '/shipping-policy',
  '/privacy',
  '/terms',
  '/1',
  '/2'
];

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const report = [];

  for (const r of routes) {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', err => errors.push(err.message));

    try {
      const resp = await page.goto('http://localhost:3000' + r, { waitUntil: 'networkidle', timeout: 8000 });
      const status = resp ? resp.status() : 'no-resp';
      
      const pageInfo = await page.evaluate(() => {
        const bodyText = document.body.innerText.trim();
        const links = Array.from(document.querySelectorAll('a')).map(a => a.getAttribute('href')).filter(Boolean);
        const buttons = Array.from(document.querySelectorAll('button')).map(b => b.innerText.trim() || b.getAttribute('aria-label') || 'unlabeled');
        const scrollWidth = document.body.scrollWidth;
        const scrollHeight = document.body.scrollHeight;
        const hasHorizontalScroll = scrollWidth > window.innerWidth;
        
        return {
          textLength: bodyText.length,
          empty: bodyText.length === 0,
          scrollWidth,
          scrollHeight,
          hasHorizontalScroll,
          linksCount: links.length,
          buttonsCount: buttons.length,
        };
      });

      report.push({
        route: r,
        status,
        ...pageInfo,
        errors: errors.slice(0, 2)
      });
    } catch (err) {
      report.push({
        route: r,
        status: 'CRASH',
        error: err.message
      });
    }
  }

  await browser.close();
  console.log(JSON.stringify(report, null, 2));
}

run();
