const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { TableHistory } = require("./TableHistory.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const tableHistory = new TableHistory()
Object.keys(env).forEach(k => {
	tableHistory[k] = env[k]
})

// Automated generation of functions from data-testid
