const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { PasswordReset } = require("./PasswordReset.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const passwordReset = new PasswordReset()
Object.keys(env).forEach(k => {
	passwordReset[k] = env[k]
})

// Automated generation of functions from data-testid
