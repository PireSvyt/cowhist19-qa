const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class MyStats {

	// Component my stats
	async assertMystatsIsVisible() {
		const element = await global.page.getByTestId("component-my stats")
		await expect(element).toBeVisible()
	}
	async assertMystatsIsHidden() {
		const element = await global.page.getByTestId("component-my stats")
		await expect(element).toBeHidden()
	}
}


module.exports = { MyStats }