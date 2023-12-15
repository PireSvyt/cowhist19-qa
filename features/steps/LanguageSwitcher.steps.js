const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { LanguageSwitcher } = require("./LanguageSwitcher.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const languageSwitcher = new LanguageSwitcher()
Object.keys(env).forEach(k => {
	languageSwitcher[k] = env[k]
})

// Automated generation of functions from data-testid

// Buttons
When("I click open menu button of localization", async () => {
	await languageSwitcher.clickOpenmenu()
})
