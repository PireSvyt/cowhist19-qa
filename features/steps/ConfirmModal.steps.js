const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { ConfirmModal } = require("./ConfirmModal.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const confirmModal = new ConfirmModal()
Object.keys(env).forEach(k => {
	confirmModal[k] = env[k]
})

// Automated generation of functions from data-testid

// Modal visibility
Then("confirm modal should be visible", async () => {
	await confirmModal.assertModalIsVisible()
})
Then("confirm modal should be hidden", async () => {
	await confirmModal.assertModalIsHidden()
})

// Buttons
When("I click  {string} by {string} button of confirm modal", async (parameter, by) => {
	await confirmModal.click(parameter, by)
})
