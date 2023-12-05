const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class LanguageSwitcher {

	// Buttons
	async clickOpenlocalization() {
		await global.page.getByTestId("component-appbar-button-open localization").click()
	}
}


module.exports = { LanguageSwitcher }