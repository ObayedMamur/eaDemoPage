const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' });

/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  
});

test('Go To Page', async () => {
  await page.goto('flip-box');
  await expect(page).toHaveTitle(/Flip Box | Essential Addons for Elementor/);
});

test('has heading', async () => {
  await expect(page.getByRole('heading', { name: 'Flip Box' , exact: true })).toBeVisible();
});
