const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { Home } = require("./Home.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const home = new Home()
Object.keys(env).forEach(k => {
	home[k] = env[k]
})

// Automated generation of functions from data-testid

// Page
Given("I open home page", async () => {
	await home.navigateToPage()
	await home.assertPageIsVisible()
})
Then("home page should be visible", async () => {
	await home.assertPageIsVisible()
})
Then("home page should be hidden", async () => {
	await home.assertPageIsHidden()
})
