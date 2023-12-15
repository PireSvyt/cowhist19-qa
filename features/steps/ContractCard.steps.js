const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { ContractCard } = require("./ContractCard.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const contractCard = new ContractCard()
Object.keys(env).forEach(k => {
	contractCard[k] = env[k]
})

// Automated generation of functions from data-testid

// Inputs
When("I fill game modal with {string}", async function (scenario) {
	await contractCard.fillIn(scenari["game"][scenario]())
})
Then("contract should be in error in game modal", async () => {
	await contractCard.assertInputContractIsError()
})
Then("contract should not be in error in game modal", async () => {
	await contractCard.assertInputContractIsNotError()
})
Then("attack should be in error in game modal", async () => {
	await contractCard.assertInputAttackIsError()
})
Then("attack should not be in error in game modal", async () => {
	await contractCard.assertInputAttackIsNotError()
})
Then("defense should be in error in game modal", async () => {
	await contractCard.assertInputDefenseIsError()
})
Then("defense should not be in error in game modal", async () => {
	await contractCard.assertInputDefenseIsNotError()
})
Then("outcome should be in error in game modal", async () => {
	await contractCard.assertInputOutcomeIsError()
})
Then("outcome should not be in error in game modal", async () => {
	await contractCard.assertInputOutcomeIsNotError()
})
