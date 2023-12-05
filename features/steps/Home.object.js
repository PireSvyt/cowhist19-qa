const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class Home {

	// Page
	async navigateToPage() {
		await global.page.goto(this.appUrl+paths["home"])
	}
	async assertPageIsVisible() {
		const element = await global.page.getByTestId("page-home")
		await expect(element).toBeVisible()
	}
	async assertPageIsHidden() {
		const element = await global.page.getByTestId("page-home")
		await expect(element).toBeHidden()
	}
}


module.exports = { Home }