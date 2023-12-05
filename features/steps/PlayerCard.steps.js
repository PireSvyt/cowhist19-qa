const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { PlayerCard } = require("./PlayerCard.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const playerCard = new PlayerCard()
Object.keys(env).forEach(k => {
	playerCard[k] = env[k]
})

// Automated generation of functions from data-testid

// Buttons
When("I click remove player {string} by {string} button of players", async (parameter, by) => {
	await playerCard.clickRemoveplayer(parameter, by)
})
