const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class GameModal {

	// Modal visibility
	async assertModalIsVisible() {
		const element = await global.page.getByTestId("modal-game")
		await expect(element).toBeVisible()
	}
	async assertModalIsHidden() {
		const element = await global.page.getByTestId("modal-game")
		await expect(element).toBeHidden()
	}

	// Buttons
	async clickCancel() {
		await global.page.getByTestId("modal-game-button-cancel").click()
	}
	async clickSave() {
		await global.page.getByTestId("modal-game-button-save").click()
	}
}


module.exports = { GameModal }