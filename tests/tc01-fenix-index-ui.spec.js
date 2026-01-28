const { test, expect } = require('@playwright/test');
const { FenixOAuthIndexPage } = require('../pages/fenix/FenixOAuthIndexPage');

test('TC-01: Fenix OAuth index UI loads', async ({ page }) => {
  const index = new FenixOAuthIndexPage(page);

  await index.open();

  await expect(index.connectBtn).toBeVisible();
  await expect(index.connectBtn).toBeEnabled();
});
