const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { Account } = require("./Account.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const account = new Account()
Object.keys(env).forEach(k => {
	account[k] = env[k]
})

// Automated generation of functions from data-testid

// Page
Given("I open account page", async () => {
	await account.navigateToPage()
	await account.assertPageIsVisible()
})
Then("account page should be visible", async () => {
	await account.assertPageIsVisible()
})
Then("account page should be hidden", async () => {
	await account.assertPageIsHidden()
})

// Buttons
When("I click change pseudo button of account page", async () => {
	await account.clickChangepseudo()
})
When("I click change email button of account page", async () => {
	await account.clickChangeemail()
})
When("I click change password button of account page", async () => {
	await account.clickChangepassword()
})
When("I click merge accounts button of account page", async () => {
	await account.clickMergeaccounts()
})
When("I click anonymize account button of account page", async () => {
	await account.clickAnonymizeaccount()
})
When("I click close account button of account page", async () => {
	await account.clickCloseaccount()
})
