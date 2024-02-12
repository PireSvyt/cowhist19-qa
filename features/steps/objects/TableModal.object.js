const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('TableModal') * 1000)

// Automated generation of functions from data-testid
class TableModal {
    // Modal visibility
    async assertModalIsVisible() {
        const element = await global.page.getByTestId('modal-table')
        await expect(element).toBeVisible()
    }
    async assertModalIsHidden() {
        const element = await global.page.getByTestId('modal-table')
        await expect(element).toBeHidden()
    }

    // Box error on creating without user visibility
    async assertErrorOnCreatingWithoutUserIsVisible() {
        const element = await global.page.locator(
            "[data-testid='modal-table#box-error on creating without user']"
        )
        await expect(element).toBeVisible()
    }
    async assertErrorOnCreatingWithoutUserIsHidden() {
        const element = await global.page.locator(
            "[data-testid='modal-table#box-error on creating without user']"
        )
        await expect(element).toBeHidden()
    }

    // Box error on saving without user visibility
    async assertErrorOnSavingWithoutUserIsVisible() {
        const element = await global.page.locator(
            "[data-testid='modal-table#box-error on saving without user']"
        )
        await expect(element).toBeVisible()
    }
    async assertErrorOnSavingWithoutUserIsHidden() {
        const element = await global.page.locator(
            "[data-testid='modal-table#box-error on saving without user']"
        )
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickInvitePlayer() {
        await global.page
            .getByTestId('modal-table#button-invite player')
            .click()
    }
    async clickCancel() {
        await global.page.getByTestId('modal-table#button-cancel').click()
    }
    async clickSave() {
        await global.page.getByTestId('modal-table#button-save').click()
    }

    // Inputs
    async inputFill(inputs) {
        if (inputs.Name !== undefined) {
            await global.page
                .locator('data-testid=modal-table#input-name >> input')
                .fill(inputs.Name)
        }
        if (inputs.Guests !== undefined) {
            await global.page
                .locator('data-testid=modal-table#input-guests >> input')
                .fill(inputs.Guests)
        }
    }
    async inputNameClick() {
        const element = await global.page.locator(
            'data-testid=modal-table#input-name >> input'
        )
        await expect(element).click()
    }
    async inputNameClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-table#input-name >> input'
        )
        await expect(element).click()
    }
    async inputGuestsClick() {
        const element = await global.page.locator(
            'data-testid=modal-table#input-guests >> input'
        )
        await expect(element).click()
    }
    async inputGuestsClickItem(index) {
        const element = await global.page.locator(
            'data-testid=modal-table#input-guests >> input'
        )
        await expect(element).click()
    }
    async assertInputNameIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-table#input-name'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputNameIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-table#input-name'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
    async assertInputGuestsIsError() {
        const element = await global.page.locator(
            "[data-testid='modal-table#input-guests'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertInputGuestsIsNotError() {
        const element = await global.page.locator(
            "[data-testid='modal-table#input-guests'] >> input"
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }

    // List players
    async clickPlayersItem(parameter) {
        await global.page
            .locator("[data-testid='list-players#listitem-" + parameter + "']")
            .click()
    }
    async assertPlayersIsEmpty() {
        const element = await global.page.getByTestId('list-players#listitem-0')
        await expect(element).toBeHidden()
    }
    async assertPlayersIsNotEmpty() {
        const element = await global.page.getByTestId('list-players#listitem-0')
        await expect(element).toBeVisible()
    }
    async assertPlayersContainsItem(parameter, by) {
        let itemCount = -1
        switch (by) {
            case 'index':
                itemCount = await global.page
                    .getByTestId('list-players#listitem-' + parameter + '')
                    .count()
                break
            case 'text':
                itemCount = await global.page
                    .locator("div[data-testid='modal-table#list-players']")
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

module.exports = { TableModal }
