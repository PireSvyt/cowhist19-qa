const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('TableHistory') * 1000)

// Automated generation of functions from data-testid
class TableHistory {
    // Component table history
    async assertTableHistoryIsVisible() {
        const element = await global.page.getByTestId('component-table history')
        await expect(element).toBeVisible()
    }
    async assertTableHistoryIsHidden() {
        const element = await global.page.getByTestId('component-table history')
        await expect(element).toBeHidden()
    }

    // Box no games visibility
    async assertNoGamesIsVisible() {
        const element = await global.page.locator(
            "[data-testid='component-table history#box-no games']"
        )
        await expect(element).toBeVisible()
    }
    async assertNoGamesIsHidden() {
        const element = await global.page.locator(
            "[data-testid='component-table history#box-no games']"
        )
        await expect(element).toBeHidden()
    }

    // List games
    async clickGamesItem(parameter) {
        await global.page
            .locator("[data-testid='list-games#listitem-" + parameter + "']")
            .click()
    }
    async assertGamesIsEmpty() {
        const element = await global.page.getByTestId('list-games#listitem-0')
        await expect(element).toBeHidden()
    }
    async assertGamesIsNotEmpty() {
        const element = await global.page.getByTestId('list-games#listitem-0')
        await expect(element).toBeVisible()
    }
    async assertGamesContainsItem(parameter, by) {
        let itemCount = -1
        switch (by) {
            case 'index':
                itemCount = await global.page
                    .getByTestId('list-games#listitem-' + parameter + '')
                    .count()
                break
            case 'text':
                itemCount = await global.page
                    .locator(
                        "div[data-testid='component-table history#list-games']"
                    )
                    .getByText(parameter)
                    .count()
                break
            default:
                console.error(
                    'assert list contains by ' + by + ' is not supported'
                )
                break
        }
        await expect(itemCount).toBe(1)
    }
}

module.exports = { TableHistory }
