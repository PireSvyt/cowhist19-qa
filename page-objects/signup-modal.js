const { expect } = require("@playwright/test");
var { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class SignupModal {
  async navigateToSignupModal() {
    await page.goto("http://localhost:3000/");
    await page.click("data-testid=landing-signup-button");
    const element = page.locator("data-testid=modal-signup");
    await expect(element).toBeVisible();
  }

  async typePseudo(peudo) {
    await page
      .locator("data-testid=modal-signup-input-peudo >> input")
      .fill(peudo);
  }
  async typeLogin(login) {
    await page
      .locator("data-testid=modal-signup-input-login >> input")
      .fill(login);
  }
  async typePassword(password) {
    await page
      .locator("data-testid=modal-signup-input-password >> input")
      .fill(password);
  }
  async typePasswordRepeat(passwordrepeat) {
    await page
      .locator("data-testid=modal-signup-input-passwordrepeat >> input")
      .fill(passwordrepeat);
  }
  async clickCancel() {
    await page.click("data-testid=modal-signup-button-close");
  }
  async clickSignUp() {
    await page.click("data-testid=modal-signup-button-proceed");
  }

  async assertModalIsVisible() {
    const element = page.locator("data-testid=modal-signup");
    await expect(element).toBeVisible();
  }
  async assertModalIsClosed() {
    const element = page.locator("data-testid=modal-signup");
    await expect(element).toBeHidden();
  }
  async assertFieldPseudoIsError() {
    const element = page.locator(
      "data-testid=modal-signup-input-pseudo >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldPseudoIsNotError() {
    const element = page.locator(
      "data-testid=modal-signup-input-pseudo >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
  async assertFieldLoginIsError() {
    const element = page.locator(
      "data-testid=modal-signup-input-login >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldLoginIsNotError() {
    const element = page.locator(
      "data-testid=modal-signup-input-login >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
  async assertFieldPasswordIsError() {
    const element = page.locator(
      "data-testid=modal-signup-input-password >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldPasswordIsNotError() {
    const element = page.locator(
      "data-testid=modal-signup-input-password >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
  async assertFieldPasswordRepeatIsError() {
    const element = page.locator(
      "data-testid=modal-signup-input-passwordrepeat >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldPasswordRepeatIsNotError() {
    const element = page.locator(
      "data-testid=modal-signup-input-passwordrepeat >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
}

module.exports = { SignupModal };
