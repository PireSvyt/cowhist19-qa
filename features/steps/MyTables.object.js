const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class MyTables {

	// Component my tables
	async assertMytablesIsVisible() {
		const element = await global.page.getByTestId("component-my tables")
		await expect(element).toBeVisible()
	}
	async assertMytablesIsHidden() {
		const element = await global.page.getByTestId("component-my tables")
		await expect(element).toBeHidden()
	}

	// Box no table note visibility
	async assertNotablenoteIsVisible() {
		const element = await global.page.locator("data-testid=component-my tables-box-no table note")
		await expect(element).toBeVisible()
	}
	async assertNotablenoteIsHidden() {
		const element = await global.page.locator("data-testid=component-my tables-box-no table note")
		await expect(element).toBeHidden()
	}

	// List my tables
	async clickMytablesItem(parameter,by) {
		switch (by) {
			case "id":
				await global.page.getByTestId("list-my tables-listitem").getAttribute("id", parameter).click()
				break
			case "text":
				await global.page.getByTestId("list-my tables-listitem").getByText(parameter).click()
				break
		}
	}
	async assertMytablesIsEmpty() {
		const itemCount = await global.page.getByTestId("list-my tables-listitem").count()
		await expect(itemCount).toBe(0)
	}
	async assertMytablesIsNotEmpty() {
		const itemCount = await global.page.getByTestId("list-my tables-listitem").count()
		await expect(itemCount).toBeGreaterThan(0)
	}
	async assertMytablesContainsItem(parameter,by) {
		let itemCount = -1
		switch (by) {
			case "id":
				itemCount = await global.page.getByTestId("list-my tables").getAttribute("id", parameter).count()
				break
			case "text":
				itemCount = await global.page.getByTestId("list-my tables").getByText(parameter).count()
				break
		}
		await expect(itemCount).toBe(1)
	}

	// Buttons
	async clickNewtable() {
		await global.page.getByTestId("component-my tables-button-new table").click()
	}
}


module.exports = { MyTables }