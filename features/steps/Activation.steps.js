const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { Activation } = require("./Activation.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const activation = new Activation()
Object.keys(env).forEach(k => {
	activation[k] = env[k]
})

// Automated generation of functions from data-testid

// Page
Given("I open activation page", async () => {
	await activation.navigateToPage()
	await activation.assertPageIsVisible()
})
Then("activation page should be visible", async () => {
	await activation.assertPageIsVisible()
})
Then("activation page should be hidden", async () => {
	await activation.assertPageIsHidden()
})

// Box account is activated visibility
Then("account is activated should be visible", async () => {
	await activation.assertAccountisactivatedIsVisible()
})
Then("account is activated should be hidden", async () => {
	await activation.assertAccountisactivatedIsHidden()
})

// Box error while activating visibility
Then("error while activating should be visible", async () => {
	await activation.assertErrorwhileactivatingIsVisible()
})
Then("error while activating should be hidden", async () => {
	await activation.assertErrorwhileactivatingIsHidden()
})

// Box activation sent visibility
Then("activation sent should be visible", async () => {
	await activation.assertActivationsentIsVisible()
})
Then("activation sent should be hidden", async () => {
	await activation.assertActivationsentIsHidden()
})

// Box error while sending activation visibility
Then("error while sending activation should be visible", async () => {
	await activation.assertErrorwhilesendingactivationIsVisible()
})
Then("error while sending activation should be hidden", async () => {
	await activation.assertErrorwhilesendingactivationIsHidden()
})

// Buttons
When("I click activate button of activation page", async () => {
	await activation.clickActivate()
})
When("I click open sign in modal button of activation page", async () => {
	await activation.clickOpensigninmodal()
})
When("I click resend activation email button of activation page", async () => {
	await activation.clickResendactivationemail()
})
