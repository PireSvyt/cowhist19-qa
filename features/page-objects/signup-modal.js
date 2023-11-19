const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class SignupModal {
  async navigateToSignupModal() {
    await global.page.click("data-testid=landing-signup-button");
    await this.assertModalIsVisible()
  }

  async fillIn(inputs) {
    if (inputs.pseudo !== undefined) {
      await global.page
        .locator("data-testid=modal-signup-input-pseudo >> input")
        .fill(inputs.pseudo);
    }
    if (inputs.login !== undefined) {
      await global.page
        .locator("data-testid=modal-signup-input-pseudo >> input")
        .fill(inputs.login);
    }
    if (inputs.password !== undefined) {
      await global.page
        .locator("data-testid=modal-signup-input-password >> input")
        .fill(inputs.password);
    }
    if (inputs.passwordrepeat !== undefined) {
      await global.page
        .locator("data-testid=modal-signup-input-passwordrepeat >> input")
        .fill(inputs.passwordrepeat);
    }
  }
  async clickCancel() {
    await global.page.click("data-testid=modal-signup-button-close");
  }
  async clickSignUp() {
    await global.page.click("data-testid=modal-signup-button-proceed");
  }

  async assertModalIsVisible() {
    const element = global.page.locator("data-testid=modal-signup");
    await expect(element).toBeVisible();
  }
  async assertModalIsClosed() {
    const element = global.page.locator("data-testid=modal-signup");
    await expect(element).toBeHidden();
  }
  async assertFieldPseudoIsError() {
    const element = global.page.locator(
      "data-testid=modal-signup-input-pseudo >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldPseudoIsNotError() {
    const element = global.page.locator(
      "data-testid=modal-signup-input-pseudo >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
  async assertFieldLoginIsError() {
    const element = global.page.locator(
      "data-testid=modal-signup-input-login >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldLoginIsNotError() {
    const element = global.page.locator(
      "data-testid=modal-signup-input-login >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
  async assertFieldPasswordIsError() {
    const element = global.page.locator(
      "data-testid=modal-signup-input-password >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldPasswordIsNotError() {
    const element = global.page.locator(
      "data-testid=modal-signup-input-password >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
  async assertFieldPasswordRepeatIsError() {
    const element = global.page.locator(
      "data-testid=modal-signup-input-passwordrepeat >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "true");
  }
  async assertFieldPasswordRepeatIsNotError() {
    const element = global.page.locator(
      "data-testid=modal-signup-input-passwordrepeat >> input",
    );
    await expect(element).toHaveAttribute("aria-invalid", "false");
  }
}

module.exports = { SignupModal };
