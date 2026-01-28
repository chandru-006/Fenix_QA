const { test, expect } = require('@playwright/test');
const { FenixOAuthIndexPage } = require('../pages/fenix/FenixOAuthIndexPage');
const { WalmartMarketplaceLoginPage } = require('../pages/walmart/WalmartMarketplaceLoginPage');
const { WalmartSSOLoginPage } = require('../pages/walmart/WalmartSSOLoginPage');

const {
  WM_MARKETPLACE_USER,
  WM_MARKETPLACE_PASS
} = require('../config/env');

test('TC-04: Marketplace login advances to Walmart SSO', async ({ page }) => {
  const index = new FenixOAuthIndexPage(page);
  const marketplace = new WalmartMarketplaceLoginPage(page);
  const sso = new WalmartSSOLoginPage(page);

  await index.open();
  await index.clickConnect();

  await marketplace.login(WM_MARKETPLACE_USER, WM_MARKETPLACE_PASS);

  await expect(page).toHaveURL(/login\.account\.wal-mart\.com\/authorize/);
});
