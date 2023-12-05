const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { SignInModal } = require("./SignInModal.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const signInModal = new SignInModal()
Object.keys(env).forEach(k => {
	signInModal[k] = env[k]
})

// Automated generation of functions from data-testid

// Modal visibility
Then("sign in modal should be visible", async () => {
	await signInModal.assertModalIsVisible()
})
Then("sign in modal should be hidden", async () => {
	await signInModal.assertModalIsHidden()
})

// Box error on finding account visibility
Then("error on finding account should be visible", async () => {
	await signInModal.assertErroronfindingaccountIsVisible()
})
Then("error on finding account should be hidden", async () => {
	await signInModal.assertErroronfindingaccountIsHidden()
})

// Box password sent visibility
Then("password sent should be visible", async () => {
	await signInModal.assertPasswordsentIsVisible()
})
Then("password sent should be hidden", async () => {
	await signInModal.assertPasswordsentIsHidden()
})

// Box inactive account visibility
Then("inactive account should be visible", async () => {
	await signInModal.assertInactiveaccountIsVisible()
})
Then("inactive account should be hidden", async () => {
	await signInModal.assertInactiveaccountIsHidden()
})

// Box activation sent visibility
Then("activation sent should be visible", async () => {
	await signInModal.assertActivationsentIsVisible()
})
Then("activation sent should be hidden", async () => {
	await signInModal.assertActivationsentIsHidden()
})

// Inputs
When("I fill sign in modal with {string}", async function (scenario) {
	await signInModal.fillIn(scenari["sign in"][scenario]())
})
Then("login should be in error in sign in modal", async () => {
	await signInModal.assertInputLoginIsError()
})
Then("login should not be in error in sign in modal", async () => {
	await signInModal.assertInputLoginIsNotError()
})
Then("password should be in error in sign in modal", async () => {
	await signInModal.assertInputPasswordIsError()
})
Then("password should not be in error in sign in modal", async () => {
	await signInModal.assertInputPasswordIsNotError()
})

// Buttons
When("I click reset password button of sign in modal", async () => {
	await signInModal.clickResetpassword()
})
When("I click open sign up modal button of sign in modal", async () => {
	await signInModal.clickOpensignupmodal()
})
When("I click send activation button of sign in modal", async () => {
	await signInModal.clickSendactivation()
})
When("I click close button of sign in modal", async () => {
	await signInModal.clickClose()
})
When("I click proceed button of sign in modal", async () => {
	await signInModal.clickProceed()
})
