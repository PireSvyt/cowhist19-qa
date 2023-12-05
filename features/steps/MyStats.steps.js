const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { MyStats } = require("./MyStats.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const myStats = new MyStats()
Object.keys(env).forEach(k => {
	myStats[k] = env[k]
})

// Automated generation of functions from data-testid

// Componentmy stats
Then("my stats should be visible", async () => {
	await myStats.assertMystatsIsVisible()
})
Then("my stats should be hidden", async () => {
	await myStats.assertMystatsIsHidden()
})
