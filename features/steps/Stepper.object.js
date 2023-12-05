const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class Stepper {

	// Component stepper
	async assertStepperIsVisible() {
		const element = await global.page.getByTestId("component-stepper")
		await expect(element).toBeVisible()
	}
	async assertStepperIsHidden() {
		const element = await global.page.getByTestId("component-stepper")
		await expect(element).toBeHidden()
	}
}


module.exports = { Stepper }