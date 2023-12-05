const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { InviteModal } = require("./InviteModal.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const inviteModal = new InviteModal()
Object.keys(env).forEach(k => {
	inviteModal[k] = env[k]
})

// Automated generation of functions from data-testid

// Modal visibility
Then("invite modal should be visible", async () => {
	await inviteModal.assertModalIsVisible()
})
Then("invite modal should be hidden", async () => {
	await inviteModal.assertModalIsHidden()
})

// Box acknowledgement visibility
Then("acknowledgement should be visible", async () => {
	await inviteModal.assertAcknowledgementIsVisible()
})
Then("acknowledgement should be hidden", async () => {
	await inviteModal.assertAcknowledgementIsHidden()
})

// Inputs
When("I fill invite modal with {string}", async function (scenario) {
	await inviteModal.fillIn(scenari["invite"][scenario]())
})
Then("pseudo should be in error in invite modal", async () => {
	await inviteModal.assertInputPseudoIsError()
})
Then("pseudo should not be in error in invite modal", async () => {
	await inviteModal.assertInputPseudoIsNotError()
})
Then("login should be in error in invite modal", async () => {
	await inviteModal.assertInputLoginIsError()
})
Then("login should not be in error in invite modal", async () => {
	await inviteModal.assertInputLoginIsNotError()
})
Then("acknowledgement should be in error in invite modal", async () => {
	await inviteModal.assertInputAcknowledgementIsError()
})
Then("acknowledgement should not be in error in invite modal", async () => {
	await inviteModal.assertInputAcknowledgementIsNotError()
})

// Buttons
When("I click cancel button of invite modal", async () => {
	await inviteModal.clickCancel()
})
When("I click invite button of invite modal", async () => {
	await inviteModal.clickInvite()
})
