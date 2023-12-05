const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class SignUpModal {

	// Modal visibility
	async assertModalIsVisible() {
		const element = await global.page.getByTestId("modal-sign up")
		await expect(element).toBeVisible()
	}
	async assertModalIsHidden() {
		const element = await global.page.getByTestId("modal-sign up")
		await expect(element).toBeHidden()
	}

	// Box error on signing up with existing login visibility
	async assertErroronsigningupwithexistingloginIsVisible() {
		const element = await global.page.locator("data-testid=modal-sign up-box-error on signing up with existing login")
		await expect(element).toBeVisible()
	}
	async assertErroronsigningupwithexistingloginIsHidden() {
		const element = await global.page.locator("data-testid=modal-sign up-box-error on signing up with existing login")
		await expect(element).toBeHidden()
	}

	// Inputs
	async fillIn(inputs) {
		if (inputs.Pseudo !== undefined) {
			await global.page
				.locator("data-testid=modal-sign up-input-pseudo >> input")
				.fill(inputs.Pseudo)
		}
		if (inputs.Login !== undefined) {
			await global.page
				.locator("data-testid=modal-sign up-input-login >> input")
				.fill(inputs.Login)
		}
		if (inputs.Password !== undefined) {
			await global.page
				.locator("data-testid=modal-sign up-input-password >> input")
				.fill(inputs.Password)
		}
		if (inputs.Passwordrepeat !== undefined) {
			await global.page
				.locator("data-testid=modal-sign up-input-password repeat >> input")
				.fill(inputs.Passwordrepeat)
		}
	}
	async assertInputPseudoIsError() {
		const element = await global.page.locator(
			"data-testid=modal-sign up-input-pseudo >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputPseudoIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-sign up-input-pseudo >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputLoginIsError() {
		const element = await global.page.locator(
			"data-testid=modal-sign up-input-login >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputLoginIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-sign up-input-login >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputPasswordIsError() {
		const element = await global.page.locator(
			"data-testid=modal-sign up-input-password >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputPasswordIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-sign up-input-password >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputPasswordrepeatIsError() {
		const element = await global.page.locator(
			"data-testid=modal-sign up-input-password repeat >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputPasswordrepeatIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-sign up-input-password repeat >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}

	// Buttons
	async clickClose() {
		await global.page.getByTestId("modal-sign up-button-close").click()
	}
	async clickProceed() {
		await global.page.getByTestId("modal-sign up-button-proceed").click()
	}
}


module.exports = { SignUpModal }