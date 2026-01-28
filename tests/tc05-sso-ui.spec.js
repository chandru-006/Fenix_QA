const { test, expect } = require('@playwright/test');
const { FenixOAuthIndexPage } = require('../pages/fenix/FenixOAuthIndexPage');
const { WalmartMarketplaceLoginPage } = require('../pages/walmart/WalmartMarketplaceLoginPage');
const { WalmartSSOLoginPage } = require('../pages/walmart/WalmartSSOLoginPage');

test('TC-05: Walmart OAuth authorize page is reached', async ({ page }) => {
  const index = new FenixOAuthIndexPage(page);
  const marketplace = new WalmartMarketplaceLoginPage(page);

  await index.open();
  await index.clickConnect();

  await marketplace.login(
    process.env.WM_MARKETPLACE_USER,
    process.env.WM_MARKETPLACE_PASS
  );

  await expect(page).toHaveURL(/authorize/);
});


