const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('Appbar') * 1000)

// Automated generation of functions from data-testid
class Appbar {
    // Component app bar
    async assertAppBarIsVisible() {
        const element = await global.page.getByTestId('component-app bar')
        await expect(element).toBeVisible()
    }
    async assertAppBarIsHidden() {
        const element = await global.page.getByTestId('component-app bar')
        await expect(element).toBeHidden()
    }
    async assertTextTitleIs(value) {
        const element = await global.page
            .locator("[data-testid='component-app bar#text-title']")
            .innerText()
        await expect(element).toBe(value)
    }

    // Buttons
    async clickEditTable() {
        await global.page
            .getByTestId('component-app bar#button-edit table')
            .click()
    }
    async clickOpenMenu() {
        await global.page
            .getByTestId('component-app bar#button-open menu')
            .click()
    }
    async clickCloseMenu() {
        await global.page
            .getByTestId('component-app bar#button-close menu')
            .click()
    }

    // List app bar menu
    async clickAppBarMenuItem(parameter) {
        await global.page
            .locator(
                "[data-testid='list-app bar menu#listitem-" + parameter + "']"
            )
            .click()
    }
    async assertAppBarMenuIsEmpty() {
        const element = await global.page.getByTestId(
            'list-app bar menu#listitem-0'
        )
        await expect(element).toBeHidden()
    }
    async assertAppBarMenuIsNotEmpty() {
        const element = await global.page.getByTestId(
            'list-app bar menu#listitem-0'
        )
        await expect(element).toBeVisible()
    }
    async assertAppBarMenuContainsItem(parameter, by) {
        let itemCount = -1
        switch (by) {
            case 'index':
                itemCount = await global.page
                    .getByTestId('list-app bar menu#listitem-' + parameter + '')
                    .count()
                break
            case 'text':
                itemCount = await global.page
                    .locator(
                        "div[data-testid='component-app bar#list-app bar menu']"
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

module.exports = { Appbar }
