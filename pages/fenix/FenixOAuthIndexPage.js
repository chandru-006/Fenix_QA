class FenixOAuthIndexPage {
  constructor(page) {
    this.page = page;
    this.connectBtn = page.locator('#connectBtn');
  }

  async open() {
    await this.page.goto('https://fenix-wmconnector.sigmainfo.net/oauth/index');
  }

  async clickConnect() {
    await this.connectBtn.click();
  }
}

module.exports = { FenixOAuthIndexPage };
