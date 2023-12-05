const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { ToComeModal } = require("./ToComeModal.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const toComeModal = new ToComeModal()
Object.keys(env).forEach(k => {
	toComeModal[k] = env[k]
})

// Automated generation of functions from data-testid

// Modal visibility
Then("to come modal should be visible", async () => {
	await toComeModal.assertModalIsVisible()
})
Then("to come modal should be hidden", async () => {
	await toComeModal.assertModalIsHidden()
})

// Buttons
When("I click close button of to come modal", async () => {
	await toComeModal.clickClose()
})
