const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' });

/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('creative-buttons');
  await expect(page).toHaveTitle(/Creative Buttons | Essential Addons for Elementor/);
  await expect(page.getByRole('heading', { name: 'Creative Buttons' })).toBeVisible();
});

test('Test First Button', async () => {
  const firstButton = page.locator("//div[@class='elementor-element elementor-element-5e1c3562 elementor-widget elementor-widget-eael-creative-button']//a[@class='eael-creative-button eael-creative-button--wayra']");
  // Check if the First Button is Visible or Not
  await expect(firstButton).toBeVisible();
  // Check if the First Button has class "eael-creative-button--wayra"
  await expect(firstButton).toHaveClass(/eael-creative-button--wayra/);
  
});
