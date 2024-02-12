const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('StatGraph') * 1000)

// Automated generation of functions from data-testid
class StatGraph {
    // Component stat graph
    async assertStatGraphIsVisible() {
        const element = await global.page.getByTestId('component-stat graph')
        await expect(element).toBeVisible()
    }
    async assertStatGraphIsHidden() {
        const element = await global.page.getByTestId('component-stat graph')
        await expect(element).toBeHidden()
    }

    // List chips
    async clickChipsItem(parameter) {
        await global.page
            .locator("[data-testid='list-chips#listitem-" + parameter + "']")
            .click()
    }
    async assertChipsIsEmpty() {
        const element = await global.page.getByTestId('list-chips#listitem-0')
        await expect(element).toBeHidden()
    }
    async assertChipsIsNotEmpty() {
        const element = await global.page.getByTestId('list-chips#listitem-0')
        await expect(element).toBeVisible()
    }
    async assertChipsContainsItem(parameter, by) {
        let itemCount = -1
        switch (by) {
            case 'index':
                itemCount = await global.page
                    .getByTestId('list-chips#listitem-' + parameter + '')
                    .count()
                break
            case 'text':
                itemCount = await global.page
                    .locator(
                        "div[data-testid='component-stat graph#list-chips']"
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

module.exports = { StatGraph }
