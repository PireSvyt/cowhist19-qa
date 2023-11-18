const { expect } = require("@playwright/test");
var { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class SigninModal {
  async navigateToSigninModal() {
    await page.goto("http://localhost:3000/");
    await page.click("data-testid=landing-signin-button");
    const element = page.locator("data-testid=modal-signin");
    await expect(element).toBeVisible();
  }

  async typeLogin(login) {
    await page
      .locator("data-testid=modal-signin-input-login >> input")
      .fill(login);
  }
  async typePassword(password) {
    await page
      .locator("data-testid=modal-signin-input-password >> input")
      .fill(password);
  }
  async clickCancel() {
    await page.click("data-testid=modal-signin-button-close");
  }
  async clickSignIn() {
    await page.click("data-testid=modal-signin-button-proceed");
  }
  async clickResetPAssword() {
    await page.click("data-testid=modal-signin-button-resetpassword");
  }

  async assertModalIsVisible() {
    const element = await page.locator("data-testid=modal-signin");
    await expect(element).toBeVisible();
  }
  async assertModalIsClosed() {
    const element = await page.locator("data-testid=modal-signin");
    await expect(element).toBeHidden();
  }
  async assertFieldLoginIsError() {
    const element = await page.locator(
      "data-testid=modal-signin-input-login >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldLoginIsNotError() {
    const element = await page.locator(
      "data-testid=modal-signin-input-login >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
  async assertFieldPasswordIsError() {
    const element = await page.locator(
      "data-testid=modal-signin-input-password >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldPasswordIsNotError() {
    const element = await page.locator(
      "data-testid=modal-signin-input-password >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
}

module.exports = { SigninModal };
