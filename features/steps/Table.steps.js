const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { Table } = require("./Table.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const table = new Table()
Object.keys(env).forEach(k => {
	table[k] = env[k]
})

// Automated generation of functions from data-testid

// Page
Given("I open table page", async () => {
	await table.navigateToPage()
	await table.assertPageIsVisible()
})
Then("table page should be visible", async () => {
	await table.assertPageIsVisible()
})
Then("table page should be hidden", async () => {
	await table.assertPageIsHidden()
})

// Box denied access visibility
Then("denied access should be visible", async () => {
	await table.assertDeniedaccessIsVisible()
})
Then("denied access should be hidden", async () => {
	await table.assertDeniedaccessIsHidden()
})

// Box granted access visibility
Then("granted access should be visible", async () => {
	await table.assertGrantedaccessIsVisible()
})
Then("granted access should be hidden", async () => {
	await table.assertGrantedaccessIsHidden()
})

// Box analytics tab visibility
Then("analytics tab should be visible", async () => {
	await table.assertAnalyticstabIsVisible()
})
Then("analytics tab should be hidden", async () => {
	await table.assertAnalyticstabIsHidden()
})

// Box history tab visibility
Then("history tab should be visible", async () => {
	await table.assertHistorytabIsVisible()
})
Then("history tab should be hidden", async () => {
	await table.assertHistorytabIsHidden()
})

// Buttons
When("I click to home button of table page", async () => {
	await table.clickTohome()
})
When("I click new game button of table page", async () => {
	await table.clickNewgame()
})
