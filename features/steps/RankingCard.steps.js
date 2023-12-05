const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { RankingCard } = require("./RankingCard.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const rankingCard = new RankingCard()
Object.keys(env).forEach(k => {
	rankingCard[k] = env[k]
})

// Automated generation of functions from data-testid
