const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class SigninModal {
  async navigateToSigninModal() {
    await global.page.click("data-testid=landing-signin-button");
    await this.assertModalIsVisible()
  }
  async signedin(inputs) {
    await global.page.click("data-testid=landing-signin-button");
    await this.fillIn(inputs)
    await global.page.click("data-testid=modal-signin-button-proceed");
    await this.assertIAmConnected()
  }

  async fillIn(inputs) {
    if (inputs.login !== undefined) {
      await global.page
        .locator("data-testid=modal-signin-input-login >> input")
        .fill(inputs.login);
    }
    if (inputs.password !== undefined) {
      await global.page
        .locator("data-testid=modal-signin-input-password >> input")
        .fill(inputs.password);
    }
  }
  async clickCancel() {
    await global.page.click("data-testid=modal-signin-button-close");
  }
  async clickSignIn() {
    await global.page.click("data-testid=modal-signin-button-proceed");
  }
  async clickResetPAssword() {
    await global.page.click("data-testid=modal-signin-button-resetpassword");
  }

  async assertModalIsVisible() {
    const element = await global.page.locator("data-testid=modal-signin");
    await expect(element).toBeVisible();
  }
  async assertModalIsClosed() {
    const element = await global.page.locator("data-testid=modal-signin");
    await expect(element).toBeHidden();
  }
  async assertFieldLoginIsError() {
    const element = await global.page.locator(
      "data-testid=modal-signin-input-login >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldLoginIsNotError() {
    const element = await global.page.locator(
      "data-testid=modal-signin-input-login >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
  async assertFieldPasswordIsError() {
    const element = await global.page.locator(
      "data-testid=modal-signin-input-password >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldPasswordIsNotError() {
    const element = await global.page.locator(
      "data-testid=modal-signin-input-password >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
  async assertButtonSignupIsVisible() {
    const element = await global.page.locator(
      "data-testid=modal-signin-button-gotosignup",
    );
    await expect(element).toBeVisible();
  }
  async assertButtonSendActivationIsVisible() {
    const element = await global.page.locator(
      "data-testid=modal-signin-button-sendactivation",
    );
    await expect(element).toBeVisible();
  }
  async assertIAmConnected() {
    const element = await global.page.locator(
      "data-testid=component-mytables",
    );
    await expect(element).toBeVisible();
  }
}

module.exports = { SigninModal };
