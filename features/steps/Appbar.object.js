const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class Appbar {

	// Component app bar
	async assertAppbarIsVisible() {
		const element = await global.page.getByTestId("component-app bar")
		await expect(element).toBeVisible()
	}
	async assertAppbarIsHidden() {
		const element = await global.page.getByTestId("component-app bar")
		await expect(element).toBeHidden()
	}

	// List app bar menu
	async clickAppbarmenuItem(parameter,by) {
		switch (by) {
			case "id":
				await global.page.getByTestId("list-app bar menu-listitem").getAttribute("id", parameter).click()
				break
			case "text":
				await global.page.getByTestId("list-app bar menu-listitem").getByText(parameter).click()
				break
		}
	}
	async assertAppbarmenuIsEmpty() {
		const itemCount = await global.page.getByTestId("list-app bar menu-listitem").count()
		await expect(itemCount).toBe(0)
	}
	async assertAppbarmenuIsNotEmpty() {
		const itemCount = await global.page.getByTestId("list-app bar menu-listitem").count()
		await expect(itemCount).toBeGreaterThan(0)
	}
	async assertAppbarmenuContainsItem(parameter,by) {
		let itemCount = -1
		switch (by) {
			case "id":
				itemCount = await global.page.getByTestId("list-app bar menu").getAttribute("id", parameter).count()
				break
			case "text":
				itemCount = await global.page.getByTestId("list-app bar menu").getByText(parameter).count()
				break
		}
		await expect(itemCount).toBe(1)
	}

	// Buttons
	async clickEdittable() {
		await global.page.getByTestId("component-app bar-button-edit table").click()
	}
	async clickOpenmenu() {
		await global.page.getByTestId("component-app bar-button-open menu").click()
	}
	async clickClosemenu() {
		await global.page.getByTestId("component-app bar-button-close menu").click()
	}

	// Texts
	async assertTextTitleIs(value) {
		const element = await global.page.locator("data-testid=component-app bar-text-title")
		await expect(element).toBe(value)
	}}


module.exports = { Appbar }