const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('GameModal') * 1000)

// Automated generation of functions from data-testid
class GameModal {
    // Modal visibility
    async assertModalIsVisible() {
        const element = await global.page.getByTestId('modal-game')
        await expect(element).toBeVisible()
    }
    async assertModalIsHidden() {
        const element = await global.page.getByTestId('modal-game')
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickCancel() {
        await global.page.getByTestId('modal-game#button-cancel').click()
    }
    async clickSave() {
        await global.page.getByTestId('modal-game#button-save').click()
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
                    .locator("div[data-testid='modal-game#list-contracts']")
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

module.exports = { GameModal }
