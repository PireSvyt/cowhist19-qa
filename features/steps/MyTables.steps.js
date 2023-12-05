const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { MyTables } = require("./MyTables.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const myTables = new MyTables()
Object.keys(env).forEach(k => {
	myTables[k] = env[k]
})

// Automated generation of functions from data-testid

// Componentmy tables
Then("my tables should be visible", async () => {
	await myTables.assertMytablesIsVisible()
})
Then("my tables should be hidden", async () => {
	await myTables.assertMytablesIsHidden()
})

// Box no table note visibility
Then("no table note should be visible", async () => {
	await myTables.assertNotablenoteIsVisible()
})
Then("no table note should be hidden", async () => {
	await myTables.assertNotablenoteIsHidden()
})

// List my tables
When("I click {string} from my tables", async (item) => {
	await myTables.clickMytablesItem(item, "text")
})
When("I click {string} by {string} from my tables", async (item, by) => {
	await myTables.clickMytablesItem(item, by)
})
Then("my tables should be empty", async () => {
	await myTables.assertMytablesIsEmpty()
})
Then("my tables should not be empty", async () => {
	await myTables.assertMytablesIsNotEmpty()
})
Then("my tables should contain {string} by {string}", async (item, by) => {
	await myTables.assertMytablesContainsItem(item, by)
})

// Buttons
When("I click new table button of my tables", async () => {
	await myTables.clickNewtable()
})
