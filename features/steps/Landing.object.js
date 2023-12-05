const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class Landing {

	// Page
	async navigateToPage() {
		await global.page.goto(this.appUrl+paths["landing"])
	}
	async assertPageIsVisible() {
		const element = await global.page.getByTestId("page-landing")
		await expect(element).toBeVisible()
	}
	async assertPageIsHidden() {
		const element = await global.page.getByTestId("page-landing")
		await expect(element).toBeHidden()
	}

	// Buttons
	async clickSignup() {
		await global.page.getByTestId("page-landing-button-sign up").click()
	}
	async clickSignin() {
		await global.page.getByTestId("page-landing-button-sign in").click()
	}
}


module.exports = { Landing }