const { test, expect } = require('@playwright/test');

/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  
});

test('Test Data Table Style 01', async () => {
    await page.goto('advanced-data-table');
    await expect(page).toHaveTitle(/Advanced Data Table | Essential Addons for Elementor/);
    
});
