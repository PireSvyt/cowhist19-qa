const { expect } = require("@playwright/test");
var { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class LandingPage {
  async navigateToLandingPage() {
    await page.goto("http://localhost:3000/");
  }

  async clickSignUp() {
    await page.click("data-testid=landing-signup-button");
  }
  async clickSignIn() {
    await page.click("data-testid=landing-signin-button");
  }

  async assertSignupModalIsVisible() {
    const element = page.locator("data-testid=modal-signup");
    await expect(element).toBeVisible();
  }
  async assertSigninModalIsVisible() {
    const element = page.locator("data-testid=modal-signin");
    await expect(element).toBeVisible();
  }
}

module.exports = { LandingPage };
