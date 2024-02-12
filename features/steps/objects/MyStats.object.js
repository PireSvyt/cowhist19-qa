const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('MyStats') * 1000)

// Automated generation of functions from data-testid
class MyStats {
    // Component my stats
    async assertMyStatsIsVisible() {
        const element = await global.page.getByTestId('component-my stats')
        await expect(element).toBeVisible()
    }
    async assertMyStatsIsHidden() {
        const element = await global.page.getByTestId('component-my stats')
        await expect(element).toBeHidden()
    }

    // Box no games visibility
    async assertNoGamesIsVisible() {
        const element = await global.page.locator(
            "[data-testid='component-my stats#box-no games']"
        )
        await expect(element).toBeVisible()
    }
    async assertNoGamesIsHidden() {
        const element = await global.page.locator(
            "[data-testid='component-my stats#box-no games']"
        )
        await expect(element).toBeHidden()
    }

    // Box stats visibility
    async assertStatsIsVisible() {
        const element = await global.page.locator(
            "[data-testid='component-my stats#box-stats']"
        )
        await expect(element).toBeVisible()
    }
    async assertStatsIsHidden() {
        const element = await global.page.locator(
            "[data-testid='component-my stats#box-stats']"
        )
        await expect(element).toBeHidden()
    }
}

module.exports = { MyStats }
