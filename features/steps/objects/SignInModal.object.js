const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('SignInModal') * 1000)

// Automated generation of functions from data-testid
class SignInModal {
    // Modal visibility
    async assertModalIsVisible() {
        const element = await global.page.getByTestId('modal-sign in')
        await expect(element).toBeVisible()
    }
    async assertModalIsHidden() {
        const element = await global.page.getByTestId('modal-sign in')
        await expect(element).toBeHidden()
    }

    // Box error on finding account visibility
    async assertErrorOnFindingAccountIsVisible() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#box-error on finding account']"
        )
        await expect(element).toBeVisible()
    }
    async assertErrorOnFindingAccountIsHidden() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#box-error on finding account']"
        )
        await expect(element).toBeHidden()
    }

    // Box password sent visibility
    async assertPasswordSentIsVisible() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#box-password sent']"
        )
        await expect(element).toBeVisible()
    }
    async assertPasswordSentIsHidden() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#box-password sent']"
        )
        await expect(element).toBeHidden()
    }

    // Box inactive account visibility
    async assertInactiveAccountIsVisible() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#box-inactive account']"
        )
        await expect(element).toBeVisible()
    }
    async assertInactiveAccountIsHidden() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#box-inactive account']"
        )
        await expect(element).toBeHidden()
    }

    // Box activation sent visibility
    async assertActivationSentIsVisible() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#box-activation sent']"
        )
        await expect(element).toBeVisible()
    }
    async assertActivationSentIsHidden() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#box-activation sent']"
        )
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickResetPassword() {
        await global.page
            .getByTestId('modal-sign in#button-reset password')
            .click()
    }
    async clickOpenSignUpModal() {
        await global.page
            .getByTestId('modal-sign in#button-open sign up modal')
            .click()
    }
    async clickSendActivation() {
        await global.page
            .getByTestId('modal-sign in#button-send activation')
            .click()
    }
    async clickClose() {
        await global.page.getByTestId('modal-sign in#button-close').click()
    }
    async clickProceed() {
        await global.page.getByTestId('modal-sign in#button-proceed').click()
    }

    // Inputs
    async inputFill(inputs) {
        if (inputs.Login !== undefined) {
            await global.page
                .locator('data-testid=modal-sign in#input-login >> input')
                .fill(inputs.Login)
        }
        if (inputs.Password !== undefined) {
            await global.page
                .locator('data-testid=modal-sign in#input-password >> input')
                .fill(inputs.Password)
        }
    }
    async inputLoginClick() {
        const element = await global.page.locator(
            'data-testid=modal-sign in#input-login >> input'
        )
        await expect(element).click()
    }
    async inputLoginClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-sign in#input-login >> input'
        )
        await expect(element).click()
    }
    async inputPasswordClick() {
        const element = await global.page.locator(
            'data-testid=modal-sign in#input-password >> input'
        )
        await expect(element).click()
    }
    async inputPasswordClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-sign in#input-password >> input'
        )
        await expect(element).click()
    }
    async assertInputLoginIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#input-login'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputLoginIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#input-login'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
    async assertInputPasswordIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#input-password'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputPasswordIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-sign in#input-password'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
}

module.exports = { SignInModal }
