const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { SignUpModal } = require("./SignUpModal.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const signUpModal = new SignUpModal()
Object.keys(env).forEach(k => {
	signUpModal[k] = env[k]
})

// Automated generation of functions from data-testid

// Modal visibility
Then("sign up modal should be visible", async () => {
	await signUpModal.assertModalIsVisible()
})
Then("sign up modal should be hidden", async () => {
	await signUpModal.assertModalIsHidden()
})

// Box error on signing up with existing login visibility
Then("error on signing up with existing login should be visible", async () => {
	await signUpModal.assertErroronsigningupwithexistingloginIsVisible()
})
Then("error on signing up with existing login should be hidden", async () => {
	await signUpModal.assertErroronsigningupwithexistingloginIsHidden()
})

// Inputs
When("I fill sign up modal with {string}", async function (scenario) {
	await signUpModal.fillIn(scenari["sign up"][scenario]())
})
Then("pseudo should be in error in sign up modal", async () => {
	await signUpModal.assertInputPseudoIsError()
})
Then("pseudo should not be in error in sign up modal", async () => {
	await signUpModal.assertInputPseudoIsNotError()
})
Then("login should be in error in sign up modal", async () => {
	await signUpModal.assertInputLoginIsError()
})
Then("login should not be in error in sign up modal", async () => {
	await signUpModal.assertInputLoginIsNotError()
})
Then("password should be in error in sign up modal", async () => {
	await signUpModal.assertInputPasswordIsError()
})
Then("password should not be in error in sign up modal", async () => {
	await signUpModal.assertInputPasswordIsNotError()
})
Then("password repeat should be in error in sign up modal", async () => {
	await signUpModal.assertInputPasswordrepeatIsError()
})
Then("password repeat should not be in error in sign up modal", async () => {
	await signUpModal.assertInputPasswordrepeatIsNotError()
})

// Buttons
When("I click close button of sign up modal", async () => {
	await signUpModal.clickClose()
})
When("I click proceed button of sign up modal", async () => {
	await signUpModal.clickProceed()
})
