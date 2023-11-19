const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class TableModal {
  async navigateToTableModal() {
    await global.page.click("data-testid=component-mytables-button-newtable");
    await this.assertModalIsVisible()
  }

  async fillIn(inputs) {
    if (inputs.pseudo !== undefined) {
      await global.page
        .locator("data-testid=modal-table-input-pseudo >> input")
        .fill(inputs.pseudo);
    }
    if (inputs.login !== undefined) {
      await global.page
        .locator("data-testid=modal-table-input-pseudo >> input")
        .fill(inputs.login);
    }
    if (inputs.password !== undefined) {
      await global.page
        .locator("data-testid=modal-table-input-password >> input")
        .fill(inputs.password);
    }
    if (inputs.passwordrepeat !== undefined) {
      await global.page
        .locator("data-testid=modal-table-input-passwordrepeat >> input")
        .fill(inputs.passwordrepeat);
    }
  }
  async clickCancel() {
    await global.page.click("data-testid=modal-table-button-close");
  }
  async clickSave() {
    await global.page.click("data-testid=modal-table-button-proceed");
  }
  async clickInvite() {
    await global.page.click("data-testid=modal-table-button-invite");
  }

  async assertModalIsVisible() {
    const element = global.page.locator("data-testid=modal-table");
    await expect(element).toBeVisible();
  }
  async assertModalIsClosed() {
    const element = global.page.locator("data-testid=modal-table");
    await expect(element).toBeHidden();
  }
}

module.exports = { TableModal };
