const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('Landing') * 1000)

// Automated generation of functions from data-testid
class Landing {
    // Component landing
    async assertLandingIsVisible() {
        const element = await global.page.getByTestId('component-landing')
        await expect(element).toBeVisible()
    }
    async assertLandingIsHidden() {
        const element = await global.page.getByTestId('component-landing')
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickSignUp() {
        await global.page
            .getByTestId('component-landing#button-sign up')
            .click()
    }
    async clickSignIn() {
        await global.page
            .getByTestId('component-landing#button-sign in')
            .click()
    }
}

module.exports = { Landing }
