const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { TableModal } = require("./TableModal.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const tableModal = new TableModal()
Object.keys(env).forEach(k => {
	tableModal[k] = env[k]
})

// Automated generation of functions from data-testid

// Modal visibility
Then("table modal should be visible", async () => {
	await tableModal.assertModalIsVisible()
})
Then("table modal should be hidden", async () => {
	await tableModal.assertModalIsHidden()
})

// Box error on creating without user visibility
Then("error on creating without user should be visible", async () => {
	await tableModal.assertErroroncreatingwithoutuserIsVisible()
})
Then("error on creating without user should be hidden", async () => {
	await tableModal.assertErroroncreatingwithoutuserIsHidden()
})

// Box error on saving without user visibility
Then("error on saving without user should be visible", async () => {
	await tableModal.assertErroronsavingwithoutuserIsVisible()
})
Then("error on saving without user should be hidden", async () => {
	await tableModal.assertErroronsavingwithoutuserIsHidden()
})

// List players
When("I click {string} from players", async (item) => {
	await tableModal.clickPlayersItem(item, "text")
})
When("I click {string} by {string} from players", async (item, by) => {
	await tableModal.clickPlayersItem(item, by)
})
Then("players should be empty", async () => {
	await tableModal.assertPlayersIsEmpty()
})
Then("players should not be empty", async () => {
	await tableModal.assertPlayersIsNotEmpty()
})
Then("players should contain {string} by {string}", async (item, by) => {
	await tableModal.assertPlayersContainsItem(item, by)
})

// Inputs
When("I fill table modal with {string}", async function (scenario) {
	await tableModal.fillIn(scenari["table"][scenario]())
})
Then("name should be in error in table modal", async () => {
	await tableModal.assertInputNameIsError()
})
Then("name should not be in error in table modal", async () => {
	await tableModal.assertInputNameIsNotError()
})
Then("guests should be in error in table modal", async () => {
	await tableModal.assertInputGuestsIsError()
})
Then("guests should not be in error in table modal", async () => {
	await tableModal.assertInputGuestsIsNotError()
})

// Buttons
When("I click invite player button of table modal", async () => {
	await tableModal.clickInviteplayer()
})
When("I click cancel button of table modal", async () => {
	await tableModal.clickCancel()
})
When("I click save button of table modal", async () => {
	await tableModal.clickSave()
})
