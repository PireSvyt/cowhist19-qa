const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class GameModal {

	// Modal visibility
	async assertModalIsVisible() {
		const element = await global.page.getByTestId("modal-game")
		await expect(element).toBeVisible()
	}
	async assertModalIsHidden() {
		const element = await global.page.getByTestId("modal-game")
		await expect(element).toBeHidden()
	}

	// Inputs
	async fillIn(inputs) {
		if (inputs.Contract !== undefined) {
			await global.page
				.locator("data-testid=modal-game-input-contract >> input")
				.fill(inputs.Contract)
		}
		if (inputs.Attack !== undefined) {
			await global.page
				.locator("data-testid=modal-game-input-attack >> input")
				.fill(inputs.Attack)
		}
		if (inputs.Defense !== undefined) {
			await global.page
				.locator("data-testid=modal-game-input-defense >> input")
				.fill(inputs.Defense)
		}
		if (inputs.Outcome !== undefined) {
			await global.page
				.locator("data-testid=modal-game-input-outcome >> input")
				.fill(inputs.Outcome)
		}
	}
	async assertInputContractIsError() {
		const element = await global.page.locator(
			"data-testid=modal-game-input-contract >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputContractIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-game-input-contract >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputAttackIsError() {
		const element = await global.page.locator(
			"data-testid=modal-game-input-attack >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputAttackIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-game-input-attack >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputDefenseIsError() {
		const element = await global.page.locator(
			"data-testid=modal-game-input-defense >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputDefenseIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-game-input-defense >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputOutcomeIsError() {
		const element = await global.page.locator(
			"data-testid=modal-game-input-outcome >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputOutcomeIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-game-input-outcome >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}

	// Buttons
	async clickCancel() {
		await global.page.getByTestId("modal-game-button-cancel").click()
	}
	async clickSave() {
		await global.page.getByTestId("modal-game-button-save").click()
	}
}


module.exports = { GameModal }