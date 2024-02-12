const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('About') * 1000)

// Automated generation of functions from data-testid
class About {
    // Page
    async navigateToPage() {
        await global.page.goto(scenari.paths.root + scenari.paths['about'])
    }
    async assertPageIsVisible() {
        const element = await global.page.getByTestId('page-about')
        await expect(element).toBeVisible()
    }
    async assertPageIsHidden() {
        const element = await global.page.getByTestId('page-about')
        await expect(element).toBeHidden()
    }
}

module.exports = { About }
