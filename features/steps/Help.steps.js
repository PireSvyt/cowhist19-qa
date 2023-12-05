const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { Help } = require("./Help.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const help = new Help()
Object.keys(env).forEach(k => {
	help[k] = env[k]
})

// Automated generation of functions from data-testid

// Page
Given("I open help page", async () => {
	await help.navigateToPage()
	await help.assertPageIsVisible()
})
Then("help page should be visible", async () => {
	await help.assertPageIsVisible()
})
Then("help page should be hidden", async () => {
	await help.assertPageIsHidden()
})
