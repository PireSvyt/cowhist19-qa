const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { Landing } = require("./Landing.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const landing = new Landing()
Object.keys(env).forEach(k => {
	landing[k] = env[k]
})

// Automated generation of functions from data-testid

// Page
Given("I open landing page", async () => {
	await landing.navigateToPage()
	await landing.assertPageIsVisible()
})
Then("landing page should be visible", async () => {
	await landing.assertPageIsVisible()
})
Then("landing page should be hidden", async () => {
	await landing.assertPageIsHidden()
})

// Buttons
When("I click sign up button of landing page", async () => {
	await landing.clickSignup()
})
When("I click sign in button of landing page", async () => {
	await landing.clickSignin()
})
