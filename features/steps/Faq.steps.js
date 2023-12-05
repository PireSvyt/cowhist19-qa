const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { Faq } = require("./Faq.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const faq = new Faq()
Object.keys(env).forEach(k => {
	faq[k] = env[k]
})

// Automated generation of functions from data-testid
