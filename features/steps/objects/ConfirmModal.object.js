const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('ConfirmModal') * 1000)

// Automated generation of functions from data-testid
class ConfirmModal {
    // Modal visibility
    async assertModalIsVisible() {
        const element = await global.page.getByTestId('modal-confirm')
        await expect(element).toBeVisible()
    }
    async assertModalIsHidden() {
        const element = await global.page.getByTestId('modal-confirm')
        await expect(element).toBeHidden()
    }

    // List call to actions
    async clickCallToActionsItem(parameter) {
        await global.page
            .locator(
                "[data-testid='list-call to actions#listitem-" +
                    parameter +
                    "']"
            )
            .click()
    }
    async assertCallToActionsIsEmpty() {
        const element = await global.page.getByTestId(
            'list-call to actions#listitem-0'
        )
        await expect(element).toBeHidden()
    }
    async assertCallToActionsIsNotEmpty() {
        const element = await global.page.getByTestId(
            'list-call to actions#listitem-0'
        )
        await expect(element).toBeVisible()
    }
    async assertCallToActionsContainsItem(parameter, by) {
        let itemCount = -1
        switch (by) {
            case 'index':
                itemCount = await global.page
                    .getByTestId(
                        'list-call to actions#listitem-' + parameter + ''
                    )
                    .count()
                break
            case 'text':
                itemCount = await global.page
                    .locator(
                        "div[data-testid='modal-confirm#list-call to actions']"
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

module.exports = { ConfirmModal }
