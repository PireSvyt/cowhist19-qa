const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class ConfirmModal {

	// Modal visibility
	async assertModalIsVisible() {
		const element = await global.page.getByTestId("modal-confirm")
		await expect(element).toBeVisible()
	}
	async assertModalIsHidden() {
		const element = await global.page.getByTestId("modal-confirm")
		await expect(element).toBeHidden()
	}

	// Buttons
	async click(parameter, by) {
		await global.page.locator('[data-testid="modal-confirm-button-"]['+by+'="'+parameter+'"]').click()
	}
}


module.exports = { ConfirmModal }