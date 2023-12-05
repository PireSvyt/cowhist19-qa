const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { GameModal } = require("./GameModal.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const gameModal = new GameModal()
Object.keys(env).forEach(k => {
	gameModal[k] = env[k]
})

// Automated generation of functions from data-testid

// Modal visibility
Then("game modal should be visible", async () => {
	await gameModal.assertModalIsVisible()
})
Then("game modal should be hidden", async () => {
	await gameModal.assertModalIsHidden()
})

// Inputs
When("I fill game modal with {string}", async function (scenario) {
	await gameModal.fillIn(scenari["game"][scenario]())
})
Then("contract should be in error in game modal", async () => {
	await gameModal.assertInputContractIsError()
})
Then("contract should not be in error in game modal", async () => {
	await gameModal.assertInputContractIsNotError()
})
Then("attack should be in error in game modal", async () => {
	await gameModal.assertInputAttackIsError()
})
Then("attack should not be in error in game modal", async () => {
	await gameModal.assertInputAttackIsNotError()
})
Then("defense should be in error in game modal", async () => {
	await gameModal.assertInputDefenseIsError()
})
Then("defense should not be in error in game modal", async () => {
	await gameModal.assertInputDefenseIsNotError()
})
Then("outcome should be in error in game modal", async () => {
	await gameModal.assertInputOutcomeIsError()
})
Then("outcome should not be in error in game modal", async () => {
	await gameModal.assertInputOutcomeIsNotError()
})

// Buttons
When("I click cancel button of game modal", async () => {
	await gameModal.clickCancel()
})
When("I click save button of game modal", async () => {
	await gameModal.clickSave()
})
