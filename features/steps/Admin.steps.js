const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { Admin } = require("./Admin.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const admin = new Admin()
Object.keys(env).forEach(k => {
	admin[k] = env[k]
})

// Automated generation of functions from data-testid
