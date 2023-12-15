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

// Buttons
When("I click cancel button of game modal", async () => {
	await gameModal.clickCancel()
})
When("I click save button of game modal", async () => {
	await gameModal.clickSave()
})
