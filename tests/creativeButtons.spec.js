const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' });

/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  
});

test('Go To Page', async () => {
  await page.goto('creative-buttons');
  await expect(page).toHaveTitle(/Creative Buttons | Essential Addons for Elementor/);
});

test('has heading', async () => {
  await expect(page.getByRole('heading', { name: 'Creative Buttons' })).toBeVisible();
});
