const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('MyTables') * 1000)

// Automated generation of functions from data-testid
class MyTables {
    // Component my tables
    async assertMyTablesIsVisible() {
        const element = await global.page.getByTestId('component-my tables')
        await expect(element).toBeVisible()
    }
    async assertMyTablesIsHidden() {
        const element = await global.page.getByTestId('component-my tables')
        await expect(element).toBeHidden()
    }

    // Box no table note visibility
    async assertNoTableNoteIsVisible() {
        const element = await global.page.locator(
            "[data-testid='component-my tables#box-no table note']"
        )
        await expect(element).toBeVisible()
    }
    async assertNoTableNoteIsHidden() {
        const element = await global.page.locator(
            "[data-testid='component-my tables#box-no table note']"
        )
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickNewTable() {
        await global.page
            .getByTestId('component-my tables#button-new table')
            .click()
    }

    // List tables
    async clickTablesItem(parameter) {
        await global.page
            .locator("[data-testid='list-tables#listitem-" + parameter + "']")
            .click()
    }
    async assertTablesIsEmpty() {
        const element = await global.page.getByTestId('list-tables#listitem-0')
        await expect(element).toBeHidden()
    }
    async assertTablesIsNotEmpty() {
        const element = await global.page.getByTestId('list-tables#listitem-0')
        await expect(element).toBeVisible()
    }
    async assertTablesContainsItem(parameter, by) {
        let itemCount = -1
        switch (by) {
            case 'index':
                itemCount = await global.page
                    .getByTestId('list-tables#listitem-' + parameter + '')
                    .count()
                break
            case 'text':
                itemCount = await global.page
                    .locator(
                        "div[data-testid='component-my tables#list-tables']"
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

module.exports = { MyTables }
