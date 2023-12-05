const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { TableCard } = require("./TableCard.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const tableCard = new TableCard()
Object.keys(env).forEach(k => {
	tableCard[k] = env[k]
})

// Automated generation of functions from data-testid
