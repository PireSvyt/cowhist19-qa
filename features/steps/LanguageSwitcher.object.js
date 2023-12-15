const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class LanguageSwitcher {

	// Buttons
	async clickOpenmenu() {
		await global.page.getByTestId("component-localization-button-open menu").click()
	}
}


module.exports = { LanguageSwitcher }