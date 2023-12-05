const { Given, When, Then } = require("@cucumber/cucumber")
const env = require("../../.env.json")
const { Stepper } = require("./Stepper.object.js")
const { scenari } = require("../scenari.js")
const { random_id } = require("../../utils/toolkit.js")

const stepper = new Stepper()
Object.keys(env).forEach(k => {
	stepper[k] = env[k]
})

// Automated generation of functions from data-testid

// Componentstepper
Then("stepper should be visible", async () => {
	await stepper.assertStepperIsVisible()
})
Then("stepper should be hidden", async () => {
	await stepper.assertStepperIsHidden()
})
