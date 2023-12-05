const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { TableStats } = require("./TableStats.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const tableStats = new TableStats()
Object.keys(env).forEach(k => {
	tableStats[k] = env[k]
})

// Automated generation of functions from data-testid

// Componenttable analytics
Then("table analytics should be visible", async () => {
	await tableStats.assertTableanalyticsIsVisible()
})
Then("table analytics should be hidden", async () => {
	await tableStats.assertTableanalyticsIsHidden()
})

// Box no game note visibility
Then("no game note should be visible", async () => {
	await tableStats.assertNogamenoteIsVisible()
})
Then("no game note should be hidden", async () => {
	await tableStats.assertNogamenoteIsHidden()
})
