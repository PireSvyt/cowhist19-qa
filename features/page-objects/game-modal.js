const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class GameModal {
  async navigateToGameModal() {
  }

  async fillIn(inputs) {
    if (inputs.contract !== undefined) {
      await global.page
        .locator("data-testid=modal-game-input-contract >> input")
        .fill(inputs.contract);
    }
    if (inputs.outcome !== undefined) {
      await global.page
        .locator("data-testid=modal-game-input-outcome >> input")
        .fill(inputs.outcome);
    }
  }
  async clickCancel() {
    await global.page.click("data-testid=modal-game-button-close");
  }
  async clickSave() {
    await global.page.click("data-testid=modal-game-button-proceed");
  }

  async assertModalIsVisible() {
    const element = global.page.locator("data-testid=modal-game");
    await expect(element).toBeVisible();
  }
  async assertModalIsClosed() {
    const element = global.page.locator("data-testid=modal-game");
    await expect(element).toBeHidden();
  }
}

module.exports = { GameModal };
