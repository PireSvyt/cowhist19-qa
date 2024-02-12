const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('Help') * 1000)

// Automated generation of functions from data-testid
class Help {
    // Page
    async navigateToPage() {
        await global.page.goto(scenari.paths.root + scenari.paths['help'])
    }
    async assertPageIsVisible() {
        const element = await global.page.getByTestId('page-help')
        await expect(element).toBeVisible()
    }
    async assertPageIsHidden() {
        const element = await global.page.getByTestId('page-help')
        await expect(element).toBeHidden()
    }
}

module.exports = { Help }
