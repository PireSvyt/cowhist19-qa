const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('Snack2') * 1000)

// Automated generation of functions from data-testid
class Snack2 {
    // Component snackbar
    async assertSnackbarIsVisible() {
        const element = await global.page.getByTestId('component-snackbar')
        await expect(element).toBeVisible()
    }
    async assertSnackbarIsHidden() {
        const element = await global.page.getByTestId('component-snackbar')
        await expect(element).toBeHidden()
    }

    // Component alert
    async assertAlertIsVisible() {
        const element = await global.page.getByTestId(
            'component-snackbar#component-alert'
        )
        await expect(element).toBeVisible()
    }
    async assertAlertIsHidden() {
        const element = await global.page.getByTestId(
            'component-snackbar#component-alert'
        )
        await expect(element).toBeHidden()
    }
}

module.exports = { Snack2 }
