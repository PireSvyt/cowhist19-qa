const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { AdminStats } = require("./AdminStats.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const adminStats = new AdminStats()
Object.keys(env).forEach(k => {
	adminStats[k] = env[k]
})

// Automated generation of functions from data-testid
