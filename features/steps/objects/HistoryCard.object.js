const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('HistoryCard') * 1000)

// Automated generation of functions from data-testid
class HistoryCard {
    // Buttons
    async clickDeleteGame(parameter, by) {
        await global.page
            .locator(
                "[data-testid='list-games#listitem-" +
                    parameter +
                    "#button-delete game']"
            )
            .click()
    }

    // List contracts
    async clickContractsItem(parameter) {
        await global.page
            .locator(
                "[data-testid='list-contracts#listitem-" + parameter + "']"
            )
            .click()
    }
    async assertContractsIsEmpty() {
        const element = await global.page.getByTestId(
            'list-contracts#listitem-0'
        )
        await expect(element).toBeHidden()
    }
    async assertContractsIsNotEmpty() {
        const element = await global.page.getByTestId(
            'list-contracts#listitem-0'
        )
        await expect(element).toBeVisible()
    }
    async assertContractsContainsItem(parameter, by) {
        let itemCount = -1
        switch (by) {
            case 'index':
                itemCount = await global.page
                    .getByTestId('list-contracts#listitem-' + parameter + '')
                    .count()
                break
            case 'text':
                itemCount = await global.page
                    .locator(
                        "div[data-testid='list-games#listitem-" +
                            parameter +
                            "#list-contracts']"
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

module.exports = { HistoryCard }
