const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class LandingPage {
  async navigateToLandingPage() {
    await global.page.goto(this.appUrl);
  }

  async clickSignUp() {
    await global.page.click("data-testid=landing-signup-button");
  }
  async clickSignIn() {
    await global.page.click("data-testid=landing-signin-button");
  }
  async clickNewTable() {
    await global.page.click("data-testid=component-mytables-button-new");
  }
  
}

module.exports = { LandingPage };
