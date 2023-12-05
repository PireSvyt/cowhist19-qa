const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { AdminActions } = require("./AdminActions.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const adminActions = new AdminActions()
Object.keys(env).forEach(k => {
	adminActions[k] = env[k]
})

// Automated generation of functions from data-testid
