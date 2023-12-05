const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class TableModal {

	// Modal visibility
	async assertModalIsVisible() {
		const element = await global.page.getByTestId("modal-table")
		await expect(element).toBeVisible()
	}
	async assertModalIsHidden() {
		const element = await global.page.getByTestId("modal-table")
		await expect(element).toBeHidden()
	}

	// Box error on creating without user visibility
	async assertErroroncreatingwithoutuserIsVisible() {
		const element = await global.page.locator("data-testid=modal-table-box-error on creating without user")
		await expect(element).toBeVisible()
	}
	async assertErroroncreatingwithoutuserIsHidden() {
		const element = await global.page.locator("data-testid=modal-table-box-error on creating without user")
		await expect(element).toBeHidden()
	}

	// Box error on saving without user visibility
	async assertErroronsavingwithoutuserIsVisible() {
		const element = await global.page.locator("data-testid=modal-table-box-error on saving without user")
		await expect(element).toBeVisible()
	}
	async assertErroronsavingwithoutuserIsHidden() {
		const element = await global.page.locator("data-testid=modal-table-box-error on saving without user")
		await expect(element).toBeHidden()
	}

	// List players
	async clickPlayersItem(parameter,by) {
		switch (by) {
			case "id":
				await global.page.getByTestId("list-players-listitem").getAttribute("id", parameter).click()
				break
			case "text":
				await global.page.getByTestId("list-players-listitem").getByText(parameter).click()
				break
		}
	}
	async assertPlayersIsEmpty() {
		const itemCount = await global.page.getByTestId("list-players-listitem").count()
		await expect(itemCount).toBe(0)
	}
	async assertPlayersIsNotEmpty() {
		const itemCount = await global.page.getByTestId("list-players-listitem").count()
		await expect(itemCount).toBeGreaterThan(0)
	}
	async assertPlayersContainsItem(parameter,by) {
		let itemCount = -1
		switch (by) {
			case "id":
				itemCount = await global.page.getByTestId("list-players").getAttribute("id", parameter).count()
				break
			case "text":
				itemCount = await global.page.getByTestId("list-players").getByText(parameter).count()
				break
		}
		await expect(itemCount).toBe(1)
	}

	// Inputs
	async fillIn(inputs) {
		if (inputs.Name !== undefined) {
			await global.page
				.locator("data-testid=modal-table-input-name >> input")
				.fill(inputs.Name)
		}
		if (inputs.Guests !== undefined) {
			await global.page
				.locator("data-testid=modal-table-input-guests >> input")
				.fill(inputs.Guests)
		}
	}
	async assertInputNameIsError() {
		const element = await global.page.locator(
			"data-testid=modal-table-input-name >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputNameIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-table-input-name >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputGuestsIsError() {
		const element = await global.page.locator(
			"data-testid=modal-table-input-guests >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputGuestsIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-table-input-guests >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}

	// Buttons
	async clickInviteplayer() {
		await global.page.getByTestId("modal-table-button-invite player").click()
	}
	async clickCancel() {
		await global.page.getByTestId("modal-table-button-cancel").click()
	}
	async clickSave() {
		await global.page.getByTestId("modal-table-button-save").click()
	}
}


module.exports = { TableModal }