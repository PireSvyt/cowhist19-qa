const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class SignInModal {

	// Modal visibility
	async assertModalIsVisible() {
		const element = await global.page.getByTestId("modal-sign in")
		await expect(element).toBeVisible()
	}
	async assertModalIsHidden() {
		const element = await global.page.getByTestId("modal-sign in")
		await expect(element).toBeHidden()
	}

	// Box error on finding account visibility
	async assertErroronfindingaccountIsVisible() {
		const element = await global.page.locator("data-testid=modal-sign in-box-error on finding account")
		await expect(element).toBeVisible()
	}
	async assertErroronfindingaccountIsHidden() {
		const element = await global.page.locator("data-testid=modal-sign in-box-error on finding account")
		await expect(element).toBeHidden()
	}

	// Box password sent visibility
	async assertPasswordsentIsVisible() {
		const element = await global.page.locator("data-testid=modal-sign in-box-password sent")
		await expect(element).toBeVisible()
	}
	async assertPasswordsentIsHidden() {
		const element = await global.page.locator("data-testid=modal-sign in-box-password sent")
		await expect(element).toBeHidden()
	}

	// Box inactive account visibility
	async assertInactiveaccountIsVisible() {
		const element = await global.page.locator("data-testid=modal-sign in-box-inactive account")
		await expect(element).toBeVisible()
	}
	async assertInactiveaccountIsHidden() {
		const element = await global.page.locator("data-testid=modal-sign in-box-inactive account")
		await expect(element).toBeHidden()
	}

	// Box activation sent visibility
	async assertActivationsentIsVisible() {
		const element = await global.page.locator("data-testid=modal-sign in-box-activation sent")
		await expect(element).toBeVisible()
	}
	async assertActivationsentIsHidden() {
		const element = await global.page.locator("data-testid=modal-sign in-box-activation sent")
		await expect(element).toBeHidden()
	}

	// Inputs
	async fillIn(inputs) {
		if (inputs.Login !== undefined) {
			await global.page
				.locator("data-testid=modal-sign in-input-login >> input")
				.fill(inputs.Login)
		}
		if (inputs.Password !== undefined) {
			await global.page
				.locator("data-testid=modal-sign in-input-password >> input")
				.fill(inputs.Password)
		}
	}
	async assertInputLoginIsError() {
		const element = await global.page.locator(
			"data-testid=modal-sign in-input-login >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputLoginIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-sign in-input-login >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputPasswordIsError() {
		const element = await global.page.locator(
			"data-testid=modal-sign in-input-password >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputPasswordIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-sign in-input-password >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}

	// Buttons
	async clickResetpassword() {
		await global.page.getByTestId("modal-sign in-button-reset password").click()
	}
	async clickOpensignupmodal() {
		await global.page.getByTestId("modal-sign in-button-open sign up modal").click()
	}
	async clickSendactivation() {
		await global.page.getByTestId("modal-sign in-button-send activation").click()
	}
	async clickClose() {
		await global.page.getByTestId("modal-sign in-button-close").click()
	}
	async clickProceed() {
		await global.page.getByTestId("modal-sign in-button-proceed").click()
	}
}


module.exports = { SignInModal }