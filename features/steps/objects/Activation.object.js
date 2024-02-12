const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('Activation') * 1000)

// Automated generation of functions from data-testid
class Activation {
    // Page
    async navigateToPage() {
        await global.page.goto(scenari.paths.root + scenari.paths['activation'])
    }
    async assertPageIsVisible() {
        const element = await global.page.getByTestId('page-activation')
        await expect(element).toBeVisible()
    }
    async assertPageIsHidden() {
        const element = await global.page.getByTestId('page-activation')
        await expect(element).toBeHidden()
    }

    // Box account is activated visibility
    async assertAccountIsActivatedIsVisible() {
        const element = await global.page.locator(
            "[data-testid='page-activation#box-account is activated']"
        )
        await expect(element).toBeVisible()
    }
    async assertAccountIsActivatedIsHidden() {
        const element = await global.page.locator(
            "[data-testid='page-activation#box-account is activated']"
        )
        await expect(element).toBeHidden()
    }

    // Box error while activating visibility
    async assertErrorWhileActivatingIsVisible() {
        const element = await global.page.locator(
            "[data-testid='page-activation#box-error while activating']"
        )
        await expect(element).toBeVisible()
    }
    async assertErrorWhileActivatingIsHidden() {
        const element = await global.page.locator(
            "[data-testid='page-activation#box-error while activating']"
        )
        await expect(element).toBeHidden()
    }

    // Box activation sent visibility
    async assertActivationSentIsVisible() {
        const element = await global.page.locator(
            "[data-testid='page-activation#box-activation sent']"
        )
        await expect(element).toBeVisible()
    }
    async assertActivationSentIsHidden() {
        const element = await global.page.locator(
            "[data-testid='page-activation#box-activation sent']"
        )
        await expect(element).toBeHidden()
    }

    // Box error while sending activation visibility
    async assertErrorWhileSendingActivationIsVisible() {
        const element = await global.page.locator(
            "[data-testid='page-activation#box-error while sending activation']"
        )
        await expect(element).toBeVisible()
    }
    async assertErrorWhileSendingActivationIsHidden() {
        const element = await global.page.locator(
            "[data-testid='page-activation#box-error while sending activation']"
        )
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickActivate() {
        await global.page.getByTestId('page-activation#button-activate').click()
    }
    async clickOpenSignInModal() {
        await global.page
            .getByTestId('box-account is activated#button-open sign in modal')
            .click()
    }
    async clickResendActivationEmail() {
        await global.page
            .getByTestId(
                'component-error while activating#button-resend activation email'
            )
            .click()
    }
}

module.exports = { Activation }
