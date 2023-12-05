const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class TableStats {

	// Component table analytics
	async assertTableanalyticsIsVisible() {
		const element = await global.page.getByTestId("component-table analytics")
		await expect(element).toBeVisible()
	}
	async assertTableanalyticsIsHidden() {
		const element = await global.page.getByTestId("component-table analytics")
		await expect(element).toBeHidden()
	}

	// Box no game note visibility
	async assertNogamenoteIsVisible() {
		const element = await global.page.locator("data-testid=component-table analytics-box-no game note")
		await expect(element).toBeVisible()
	}
	async assertNogamenoteIsHidden() {
		const element = await global.page.locator("data-testid=component-table analytics-box-no game note")
		await expect(element).toBeHidden()
	}
}


module.exports = { TableStats }