const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class ToComeModal {

	// Modal visibility
	async assertModalIsVisible() {
		const element = await global.page.getByTestId("modal-to come")
		await expect(element).toBeVisible()
	}
	async assertModalIsHidden() {
		const element = await global.page.getByTestId("modal-to come")
		await expect(element).toBeHidden()
	}

	// Buttons
	async clickClose() {
		await global.page.getByTestId("modal-to come-button-close").click()
	}
}


module.exports = { ToComeModal }