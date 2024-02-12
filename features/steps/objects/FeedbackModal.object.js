const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('FeedbackModal') * 1000)

// Automated generation of functions from data-testid
class FeedbackModal {
    // Modal visibility
    async assertModalIsVisible() {
        const element = await global.page.getByTestId('modal-feedback')
        await expect(element).toBeVisible()
    }
    async assertModalIsHidden() {
        const element = await global.page.getByTestId('modal-feedback')
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickClose() {
        await global.page.getByTestId('modal-feedback#button-close').click()
    }
    async clickProceed() {
        await global.page.getByTestId('modal-feedback#button-proceed').click()
    }

    // Inputs
    async inputFill(inputs) {
        if (inputs.Message !== undefined) {
            await global.page
                .locator('data-testid=modal-feedback#input-message >> input')
                .fill(inputs.Message)
        }
    }
    async inputMessageClick() {
        const element = await global.page.locator(
            'data-testid=modal-feedback#input-message >> input'
        )
        await expect(element).click()
    }
    async inputMessageClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-feedback#input-message >> input'
        )
        await expect(element).click()
    }
    async assertInputMessageIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-feedback#input-message'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputMessageIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-feedback#input-message'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }

    // Checkboxes
    async checkboxFill(inputs) {
        if (inputs.Consent !== undefined) {
            await global.page
                .locator(
                    "[data-testid='modal-feedback#checkbox-consent'] >> input"
                )
                .setChecked(inputs.Consent)
        }
    }
    async checkboxConsentClick() {
        const element = await global.page.locator(
            "[data-testid='modal-feedback#checkbox-consent'] >> input"
        )
        await expect(element).check()
    }
    async assertCheckboxConsentIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-feedback#checkbox-consent'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertCheckboxConsentIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-feedback#checkbox-consent'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
}

module.exports = { FeedbackModal }
