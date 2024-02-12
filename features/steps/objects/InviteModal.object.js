const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('InviteModal') * 1000)

// Automated generation of functions from data-testid
class InviteModal {
    // Modal visibility
    async assertModalIsVisible() {
        const element = await global.page.getByTestId('modal-invite')
        await expect(element).toBeVisible()
    }
    async assertModalIsHidden() {
        const element = await global.page.getByTestId('modal-invite')
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickCancel() {
        await global.page.getByTestId('modal-invite#button-cancel').click()
    }
    async clickInvite() {
        await global.page.getByTestId('modal-invite#button-invite').click()
    }

    // Inputs
    async inputFill(inputs) {
        if (inputs.Pseudo !== undefined) {
            await global.page
                .locator('data-testid=modal-invite#input-pseudo >> input')
                .fill(inputs.Pseudo)
        }
        if (inputs.Login !== undefined) {
            await global.page
                .locator('data-testid=modal-invite#input-login >> input')
                .fill(inputs.Login)
        }
    }
    async inputPseudoClick() {
        const element = await global.page.locator(
            'data-testid=modal-invite#input-pseudo >> input'
        )
        await expect(element).click()
    }
    async inputPseudoClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-invite#input-pseudo >> input'
        )
        await expect(element).click()
    }
    async inputLoginClick() {
        const element = await global.page.locator(
            'data-testid=modal-invite#input-login >> input'
        )
        await expect(element).click()
    }
    async inputLoginClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-invite#input-login >> input'
        )
        await expect(element).click()
    }
    async assertInputPseudoIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-invite#input-pseudo'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputPseudoIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-invite#input-pseudo'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
    async assertInputLoginIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-invite#input-login'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputLoginIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-invite#input-login'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }

    // Checkboxes
    async checkboxFill(inputs) {
        if (inputs.Acknowledgement !== undefined) {
            await global.page
                .locator(
                    "[data-testid='modal-invite#checkbox-acknowledgement'] >> input"
                )
                .setChecked(inputs.Acknowledgement)
        }
    }
    async checkboxAcknowledgementClick() {
        const element = await global.page.locator(
            "[data-testid='modal-invite#checkbox-acknowledgement'] >> input"
        )
        await expect(element).check()
    }
    async assertCheckboxAcknowledgementIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-invite#checkbox-acknowledgement'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertCheckboxAcknowledgementIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-invite#checkbox-acknowledgement'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
}

module.exports = { InviteModal }
