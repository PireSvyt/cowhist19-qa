const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { HistoryCard } = require("./HistoryCard.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const historyCard = new HistoryCard()
Object.keys(env).forEach(k => {
	historyCard[k] = env[k]
})

// Automated generation of functions from data-testid

// Buttons
When("I click delete game button of table history", async () => {
	await historyCard.clickDeletegame()
})
