const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { Appbar } = require("./Appbar.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const appbar = new Appbar()
Object.keys(env).forEach(k => {
	appbar[k] = env[k]
})

// Automated generation of functions from data-testid

// Componentapp bar
Then("app bar should be visible", async () => {
	await appbar.assertAppbarIsVisible()
})
Then("app bar should be hidden", async () => {
	await appbar.assertAppbarIsHidden()
})

// List app bar menu
When("I click {string} from app bar menu", async (item) => {
	await appbar.clickAppbarmenuItem(item, "text")
})
When("I click {string} by {string} from app bar menu", async (item, by) => {
	await appbar.clickAppbarmenuItem(item, by)
})
Then("app bar menu should be empty", async () => {
	await appbar.assertAppbarmenuIsEmpty()
})
Then("app bar menu should not be empty", async () => {
	await appbar.assertAppbarmenuIsNotEmpty()
})
Then("app bar menu should contain {string} by {string}", async (item, by) => {
	await appbar.assertAppbarmenuContainsItem(item, by)
})

// Buttons
When("I click edit table button of app bar", async () => {
	await appbar.clickEdittable()
})
When("I click open menu button of app bar", async () => {
	await appbar.clickOpenmenu()
})
When("I click close menu button of app bar", async () => {
	await appbar.clickClosemenu()
})

// Texts
Then("title of app bar should be {string}", async () => {
	await appbar.assertTextTitleIs(value)
})
