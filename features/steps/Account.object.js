const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class Account {

	// Page
	async navigateToPage() {
		await global.page.goto(this.appUrl+paths["account"])
	}
	async assertPageIsVisible() {
		const element = await global.page.getByTestId("page-account")
		await expect(element).toBeVisible()
	}
	async assertPageIsHidden() {
		const element = await global.page.getByTestId("page-account")
		await expect(element).toBeHidden()
	}

	// Buttons
	async clickChangepseudo() {
		await global.page.getByTestId("page-account-button-change pseudo").click()
	}
	async clickChangeemail() {
		await global.page.getByTestId("page-account-button-change email").click()
	}
	async clickChangepassword() {
		await global.page.getByTestId("page-account-button-change password").click()
	}
	async clickMergeaccounts() {
		await global.page.getByTestId("page-account-button-merge accounts").click()
	}
	async clickAnonymizeaccount() {
		await global.page.getByTestId("page-account-button-anonymize account").click()
	}
	async clickCloseaccount() {
		await global.page.getByTestId("page-account-button-close account").click()
	}
}


module.exports = { Account }