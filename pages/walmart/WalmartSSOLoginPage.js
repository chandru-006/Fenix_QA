class WalmartSSOLoginPage {
  constructor(page) {
    this.page = page;
    this.ssoLogo = page.locator('.logo-container.sso');
    this.username = page.locator('[data-automation-id="uname"]');
    this.password = page.locator('[data-automation-id="pwd"]');
    this.loginBtn = page.locator('[data-automation-id="loginBtn"]');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = { WalmartSSOLoginPage };
