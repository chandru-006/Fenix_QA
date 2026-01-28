class WalmartMarketplaceLoginPage {
  constructor(page) {
    this.page = page;
    this.logo = page.locator('h1', { hasText: 'Walmart Marketplace' });
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.forgotPassword = page.locator('.forgot-link');
    this.signInBtn = page.locator('#submitBtn');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signInBtn.click();
  }
}

module.exports = { WalmartMarketplaceLoginPage };
