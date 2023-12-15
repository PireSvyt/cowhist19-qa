const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class ContractCard {

	// Inputs
	async fillIn(inputs) {
		if (inputs.Contract !== undefined) {
			await global.page
				.locator("data-testid=modal-game-listitem-contract-input-contract >> input")
				.fill(inputs.Contract)
		}
		if (inputs.Attack !== undefined) {
			await global.page
				.locator("data-testid=modal-game-listitem-contract-input-attack >> input")
				.fill(inputs.Attack)
		}
		if (inputs.Defense !== undefined) {
			await global.page
				.locator("data-testid=modal-game-listitem-contract-input-defense >> input")
				.fill(inputs.Defense)
		}
		if (inputs.Outcome !== undefined) {
			await global.page
				.locator("data-testid=modal-game-listitem-contract-input-outcome >> input")
				.fill(inputs.Outcome)
		}
	}
	async assertInputContractIsError() {
		const element = await global.page.locator(
			"data-testid=modal-game-listitem-contract-input-contract >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputContractIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-game-listitem-contract-input-contract >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputAttackIsError() {
		const element = await global.page.locator(
			"data-testid=modal-game-listitem-contract-input-attack >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputAttackIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-game-listitem-contract-input-attack >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputDefenseIsError() {
		const element = await global.page.locator(
			"data-testid=modal-game-listitem-contract-input-defense >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputDefenseIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-game-listitem-contract-input-defense >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputOutcomeIsError() {
		const element = await global.page.locator(
			"data-testid=modal-game-listitem-contract-input-outcome >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputOutcomeIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-game-listitem-contract-input-outcome >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
}


module.exports = { ContractCard }