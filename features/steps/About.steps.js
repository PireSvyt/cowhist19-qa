const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { About } = require("./About.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const about = new About()
Object.keys(env).forEach(k => {
	about[k] = env[k]
})

// Automated generation of functions from data-testid

// Page
Given("I open about page", async () => {
	await about.navigateToPage()
	await about.assertPageIsVisible()
})
Then("about page should be visible", async () => {
	await about.assertPageIsVisible()
})
Then("about page should be hidden", async () => {
	await about.assertPageIsHidden()
})
