const { test, expect } = require('@playwright/test');
const exp = require('constants');

/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  
});

test('Data Table Style 01', async () => {
    await page.goto('advanced-data-table');
    await expect(page).toHaveTitle(/Advanced Data Table | Essential Addons for Elementor/);
    await expect(page.getByTestId('71abafbd')).toBeVisible();
    await page.getByTestId('71abafbd').scrollIntoViewIfNeeded();

    // Heading of Data Table Style 01
    await expect(page.getByText('Data Table Style 01')).toBeVisible();
    await expect(page.getByText('Insert Data straight from the Elementor Editor with real-time AJAX Live Search')).toBeVisible();
    
    // Search on Data Table Style 01
    await expect(page.getByPlaceholder('Search here . . .')).toBeVisible();
    await page.getByPlaceholder('Search here . . .').fill('Brittany');
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[2]/table/tbody/tr[22]/td[2]')).toHaveText("Brittany");
    await page.getByPlaceholder('Search here . . .').clear();

    // Table Header style check of Data Table Style 01
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[2]/table/thead')).toHaveCSS('background-color', 'rgb(44, 133, 254)');
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[2]/table/thead/tr/th[1]')).toHaveCSS('font-family', 'Poppins, sans-serif');
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[2]/table/thead/tr/th[1]')).toHaveCSS('color', 'rgb(0, 0, 0)');

    // Pagination
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[3]')).toBeVisible();
    await page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[3]/a[7]').click();
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[2]/table/tbody/tr[48]/td[2]')).toHaveText('Ryan');

});
