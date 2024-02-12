const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('Home') * 1000)

// Automated generation of functions from data-testid
class Home {
    // Page
    async navigateToPage() {
        await global.page.goto(scenari.paths.root + scenari.paths['home'])
    }
    async assertPageIsVisible() {
        const element = await global.page.getByTestId('page-home')
        await expect(element).toBeVisible()
    }
    async assertPageIsHidden() {
        const element = await global.page.getByTestId('page-home')
        await expect(element).toBeHidden()
    }

    // Component showroom
    async assertShowroomIsVisible() {
        const element = await global.page.getByTestId(
            'page-home#component-showroom'
        )
        await expect(element).toBeVisible()
    }
    async assertShowroomIsHidden() {
        const element = await global.page.getByTestId(
            'page-home#component-showroom'
        )
        await expect(element).toBeHidden()
    }

    // Component my home
    async assertMyHomeIsVisible() {
        const element = await global.page.getByTestId(
            'page-home#component-my home'
        )
        await expect(element).toBeVisible()
    }
    async assertMyHomeIsHidden() {
        const element = await global.page.getByTestId(
            'page-home#component-my home'
        )
        await expect(element).toBeHidden()
    }
}

module.exports = { Home }
