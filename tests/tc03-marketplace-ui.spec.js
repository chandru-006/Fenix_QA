const { test, expect } = require('@playwright/test');
const { FenixOAuthIndexPage } = require('../pages/fenix/FenixOAuthIndexPage');
const { WalmartMarketplaceLoginPage } = require('../pages/walmart/WalmartMarketplaceLoginPage');
test('TC-03: Marketplace login UI is correct', async ({ page }) => {
  const index = new FenixOAuthIndexPage(page);
  const marketplace = new WalmartMarketplaceLoginPage(page);

  await index.open();
  await index.clickConnect();

  await expect(marketplace.username).toBeVisible();
  await expect(marketplace.password).toBeVisible();
  await expect(marketplace.forgotPassword).toBeVisible();
  await expect(marketplace.signInBtn).toBeVisible();
});
