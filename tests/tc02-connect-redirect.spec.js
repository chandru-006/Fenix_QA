const { test, expect } = require('@playwright/test');
const { FenixOAuthIndexPage } = require('../pages/fenix/FenixOAuthIndexPage');
const { WalmartMarketplaceLoginPage } = require('../pages/walmart/WalmartMarketplaceLoginPage');
test('TC-02: Clicking Connect redirects to Marketplace login', async ({ page }) => {
  const index = new FenixOAuthIndexPage(page);
  const marketplace = new WalmartMarketplaceLoginPage(page);

  await index.open();
  await index.clickConnect();

  await expect(marketplace.logo).toBeVisible();
});
