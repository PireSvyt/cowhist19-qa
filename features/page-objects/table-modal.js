const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class TableModal {
  async navigateToTableModal() {
    await global.page.click("data-testid=component-mytables-button-newtable");
    await this.assertModalIsVisible()
  }

  async fillIn(inputs) {
    if (inputs.name !== undefined) {
      await global.page
        .locator("data-testid=modal-table-input-name >> input")
        .fill(inputs.name);
    }
    if (inputs.guests !== undefined) {
      await global.page
        .locator("data-testid=modal-table-input-guests >> input")
        .fill(inputs.guests);
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
