const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('Account') * 1000)

// Automated generation of functions from data-testid
class Account {
    // Page
    async navigateToPage() {
        await global.page.goto(scenari.paths.root + scenari.paths['account'])
    }
    async assertPageIsVisible() {
        const element = await global.page.getByTestId('page-account')
        await expect(element).toBeVisible()
    }
    async assertPageIsHidden() {
        const element = await global.page.getByTestId('page-account')
        await expect(element).toBeHidden()
    }

    // Box account details visibility
    async assertAccountDetailsIsVisible() {
        const element = await global.page.locator(
            "[data-testid='page-account#box-account details']"
        )
        await expect(element).toBeVisible()
    }
    async assertAccountDetailsIsHidden() {
        const element = await global.page.locator(
            "[data-testid='page-account#box-account details']"
        )
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickChangePseudo() {
        await global.page
            .getByTestId('box-account details#button-change pseudo')
            .click()
    }
    async clickChangeEmail() {
        await global.page
            .getByTestId('box-account details#button-change email')
            .click()
    }
    async clickChangePassword() {
        await global.page
            .getByTestId('box-account details#button-change password')
            .click()
    }
    async clickMergeAccounts() {
        await global.page
            .getByTestId('box-account details#button-merge accounts')
            .click()
    }
    async clickAnonymizeAccount() {
        await global.page
            .getByTestId('box-account details#button-anonymize account')
            .click()
    }
    async clickCloseAccount() {
        await global.page
            .getByTestId('box-account details#button-close account')
            .click()
    }
}

module.exports = { Account }
