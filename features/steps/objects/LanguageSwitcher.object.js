const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('LanguageSwitcher') * 1000)

// Automated generation of functions from data-testid
class LanguageSwitcher {
    // Component localization
    async assertLocalizationIsVisible() {
        const element = await global.page.getByTestId('component-localization')
        await expect(element).toBeVisible()
    }
    async assertLocalizationIsHidden() {
        const element = await global.page.getByTestId('component-localization')
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickOpenMenu() {
        await global.page
            .getByTestId('component-localization#button-open menu')
            .click()
    }

    // List language
    async clickLanguageItem(parameter) {
        await global.page
            .locator("[data-testid='list-language#listitem-" + parameter + "']")
            .click()
    }
    async assertLanguageIsEmpty() {
        const element = await global.page.getByTestId(
            'list-language#listitem-0'
        )
        await expect(element).toBeHidden()
    }
    async assertLanguageIsNotEmpty() {
        const element = await global.page.getByTestId(
            'list-language#listitem-0'
        )
        await expect(element).toBeVisible()
    }
    async assertLanguageContainsItem(parameter, by) {
        let itemCount = -1
        switch (by) {
            case 'index':
                itemCount = await global.page
                    .getByTestId('list-language#listitem-' + parameter + '')
                    .count()
                break
            case 'text':
                itemCount = await global.page
                    .locator(
                        "div[data-testid='component-localization#list-language']"
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

module.exports = { LanguageSwitcher }
