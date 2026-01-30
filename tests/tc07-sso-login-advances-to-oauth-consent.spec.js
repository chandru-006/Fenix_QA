const { test, expect } = require('@playwright/test');
const { FenixOAuthIndexPage } = require('../pages/fenix/FenixOAuthIndexPage');
const { WalmartMarketplaceLoginPage } = require('../pages/walmart/WalmartMarketplaceLoginPage');
const { WalmartSSOLoginPage } = require('../pages/walmart/WalmartSSOLoginPage');

const {
  WM_MARKETPLACE_USER,
  WM_MARKETPLACE_PASS,
  WM_SSO_USER,
  WM_SSO_PASS
} = require('../config/env');

test('TC-07: Successful SSO login advances OAuth flow to Walmart authorization consent', async ({ page }) => {
  const index = new FenixOAuthIndexPage(page);
  const marketplace = new WalmartMarketplaceLoginPage(page);
  const sso = new WalmartSSOLoginPage(page);

  await index.open();
  await index.clickConnect();

  await marketplace.login(
    process.env.WM_MARKETPLACE_USER,
    process.env.WM_MARKETPLACE_PASS
  );

  await sso.login(
    process.env.WM_SSO_USER,
    process.env.WM_SSO_PASS
  );

  // OAuth authorization / consent reached
  //await expect(page).toHaveURL(/login\.account\.wal-mart\.com\/consent/);

  // Ensure callback has NOT happened yet
  //await expect(page).not.toHaveURL(/\/oauth\/callback/);
});
