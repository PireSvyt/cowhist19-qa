const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class InviteModal {

	// Modal visibility
	async assertModalIsVisible() {
		const element = await global.page.getByTestId("modal-invite")
		await expect(element).toBeVisible()
	}
	async assertModalIsHidden() {
		const element = await global.page.getByTestId("modal-invite")
		await expect(element).toBeHidden()
	}

	// Box acknowledgement visibility
	async assertAcknowledgementIsVisible() {
		const element = await global.page.locator("data-testid=modal-invite-inputbox-acknowledgement")
		await expect(element).toBeVisible()
	}
	async assertAcknowledgementIsHidden() {
		const element = await global.page.locator("data-testid=modal-invite-inputbox-acknowledgement")
		await expect(element).toBeHidden()
	}

	// Inputs
	async fillIn(inputs) {
		if (inputs.Pseudo !== undefined) {
			await global.page
				.locator("data-testid=modal-invite-input-pseudo >> input")
				.fill(inputs.Pseudo)
		}
		if (inputs.Login !== undefined) {
			await global.page
				.locator("data-testid=modal-invite-input-login >> input")
				.fill(inputs.Login)
		}
		if (inputs.Acknowledgement !== undefined) {
			if (inputs.Acknowledgement) {
				await global.page.locator("data-testid=modal-invite-inputbox-acknowledgement >> input").check()
			} else {
				await global.page.locator("data-testid=modal-invite-inputbox-acknowledgement >> input").uncheck()
			}
		}
	}
	async assertInputPseudoIsError() {
		const element = await global.page.locator(
			"data-testid=modal-invite-input-pseudo >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputPseudoIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-invite-input-pseudo >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputLoginIsError() {
		const element = await global.page.locator(
			"data-testid=modal-invite-input-login >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputLoginIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-invite-input-login >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}
	async assertInputAcknowledgementIsError() {
		const element = await global.page.locator(
			"data-testid=modal-invite-inputbox-acknowledgement >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "true");
	}
	async assertInputAcknowledgementIsNotError() {
		const element = await global.page.locator(
			"data-testid=modal-invite-inputbox-acknowledgement >> input",
		)
		await expect(element).toHaveAttribute("aria-invalid", "false");
	}

	// Buttons
	async clickCancel() {
		await global.page.getByTestId("modal-invite-button-cancel").click()
	}
	async clickInvite() {
		await global.page.getByTestId("modal-invite-button-invite").click()
	}
}


module.exports = { InviteModal }