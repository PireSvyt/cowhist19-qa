const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class Help {

	// Page
	async navigateToPage() {
		await global.page.goto(this.appUrl+paths["help"])
	}
	async assertPageIsVisible() {
		const element = await global.page.getByTestId("page-help")
		await expect(element).toBeVisible()
	}
	async assertPageIsHidden() {
		const element = await global.page.getByTestId("page-help")
		await expect(element).toBeHidden()
	}
}


module.exports = { Help }