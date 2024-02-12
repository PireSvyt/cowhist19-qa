const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('SignUpModal') * 1000)

// Automated generation of functions from data-testid
class SignUpModal {
    // Modal visibility
    async assertModalIsVisible() {
        const element = await global.page.getByTestId('modal-sign up')
        await expect(element).toBeVisible()
    }
    async assertModalIsHidden() {
        const element = await global.page.getByTestId('modal-sign up')
        await expect(element).toBeHidden()
    }

    // Box error on signing up with existing login visibility
    async assertErrorOnSigningUpWithExistingLoginIsVisible() {
        const element = await global.page.locator(
            "[data-testid='modal-sign up#box-error on signing up with existing login']"
        )
        await expect(element).toBeVisible()
    }
    async assertErrorOnSigningUpWithExistingLoginIsHidden() {
        const element = await global.page.locator(
            "[data-testid='modal-sign up#box-error on signing up with existing login']"
        )
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickClose() {
        await global.page.getByTestId('modal-sign up#button-close').click()
    }
    async clickProceed() {
        await global.page.getByTestId('modal-sign up#button-proceed').click()
    }

    // Inputs
    async inputFill(inputs) {
        if (inputs.Pseudo !== undefined) {
            await global.page
                .locator('data-testid=modal-sign up#input-pseudo >> input')
                .fill(inputs.Pseudo)
        }
        if (inputs.Login !== undefined) {
            await global.page
                .locator('data-testid=modal-sign up#input-login >> input')
                .fill(inputs.Login)
        }
        if (inputs.Password !== undefined) {
            await global.page
                .locator('data-testid=modal-sign up#input-password >> input')
                .fill(inputs.Password)
        }
        if (inputs.PasswordRepeat !== undefined) {
            await global.page
                .locator(
                    'data-testid=modal-sign up#input-password repeat >> input'
                )
                .fill(inputs.PasswordRepeat)
        }
    }
    async inputPseudoClick() {
        const element = await global.page.locator(
            'data-testid=modal-sign up#input-pseudo >> input'
        )
        await expect(element).click()
    }
    async inputPseudoClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-sign up#input-pseudo >> input'
        )
        await expect(element).click()
    }
    async inputLoginClick() {
        const element = await global.page.locator(
            'data-testid=modal-sign up#input-login >> input'
        )
        await expect(element).click()
    }
    async inputLoginClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-sign up#input-login >> input'
        )
        await expect(element).click()
    }
    async inputPasswordClick() {
        const element = await global.page.locator(
            'data-testid=modal-sign up#input-password >> input'
        )
        await expect(element).click()
    }
    async inputPasswordClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-sign up#input-password >> input'
        )
        await expect(element).click()
    }
    async inputPasswordRepeatClick() {
        const element = await global.page.locator(
            'data-testid=modal-sign up#input-password repeat >> input'
        )
        await expect(element).click()
    }
    async inputPasswordRepeatClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-sign up#input-password repeat >> input'
        )
        await expect(element).click()
    }
    async assertInputPseudoIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign up#input-pseudo'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputPseudoIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign up#input-pseudo'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
    async assertInputLoginIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign up#input-login'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputLoginIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign up#input-login'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
    async assertInputPasswordIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign up#input-password'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputPasswordIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign up#input-password'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
    async assertInputPasswordRepeatIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign up#input-password repeat'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputPasswordRepeatIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign up#input-password repeat'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
}

module.exports = { SignUpModal }
