const { Given, When, Then } = require('@cucumber/cucumber')
const { LanguageSwitcher } = require('./objects/LanguageSwitcher.object.js')
const { scenari } = require('../scenari.js')

const languageSwitcher = new LanguageSwitcher()

// Automated generation of functions from data-testid

// Componentlocalization
Then('localization should be visible', async () => {
    await languageSwitcher.assertLocalizationIsVisible()
})
Then('localization should be hidden', async () => {
    await languageSwitcher.assertLocalizationIsHidden()
})

// Buttons
When('I click open menu button from localization', async () => {
    await languageSwitcher.clickOpenMenu()
})

// List language
When('I click item {int} of language list from localization', async (item) => {
    await languageSwitcher.clickLanguageItem(item)
})
Then('language list from localization should be empty', async () => {
    await languageSwitcher.assertLanguageIsEmpty()
})
Then('language list from localization should not be empty', async () => {
    await languageSwitcher.assertLanguageIsNotEmpty()
})
Then(
    'language list from localization should contain {string} by {string}',
    async (item, by) => {
        await languageSwitcher.assertLanguageContainsItem(item, by)
    }
)
