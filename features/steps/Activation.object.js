const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class Activation {

	// Page
	async navigateToPage() {
		await global.page.goto(this.appUrl+paths["activation"])
	}
	async assertPageIsVisible() {
		const element = await global.page.getByTestId("page-activation")
		await expect(element).toBeVisible()
	}
	async assertPageIsHidden() {
		const element = await global.page.getByTestId("page-activation")
		await expect(element).toBeHidden()
	}

	// Box account is activated visibility
	async assertAccountisactivatedIsVisible() {
		const element = await global.page.locator("data-testid=page-activation-box-account is activated")
		await expect(element).toBeVisible()
	}
	async assertAccountisactivatedIsHidden() {
		const element = await global.page.locator("data-testid=page-activation-box-account is activated")
		await expect(element).toBeHidden()
	}

	// Box error while activating visibility
	async assertErrorwhileactivatingIsVisible() {
		const element = await global.page.locator("data-testid=page-activation-box-error while activating")
		await expect(element).toBeVisible()
	}
	async assertErrorwhileactivatingIsHidden() {
		const element = await global.page.locator("data-testid=page-activation-box-error while activating")
		await expect(element).toBeHidden()
	}

	// Box activation sent visibility
	async assertActivationsentIsVisible() {
		const element = await global.page.locator("data-testid=page-activation-box-activation sent")
		await expect(element).toBeVisible()
	}
	async assertActivationsentIsHidden() {
		const element = await global.page.locator("data-testid=page-activation-box-activation sent")
		await expect(element).toBeHidden()
	}

	// Box error while sending activation visibility
	async assertErrorwhilesendingactivationIsVisible() {
		const element = await global.page.locator("data-testid=page-activation-box-error while sending activation")
		await expect(element).toBeVisible()
	}
	async assertErrorwhilesendingactivationIsHidden() {
		const element = await global.page.locator("data-testid=page-activation-box-error while sending activation")
		await expect(element).toBeHidden()
	}

	// Buttons
	async clickActivate() {
		await global.page.getByTestId("page-activation-button-activate").click()
	}
	async clickOpensigninmodal() {
		await global.page.getByTestId("page-activation-button-open sign in modal").click()
	}
	async clickResendactivationemail() {
		await global.page.getByTestId("page-activation-button-resend activation email").click()
	}
}


module.exports = { Activation }