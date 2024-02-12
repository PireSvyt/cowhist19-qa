const { Given, When, Then } = require('@cucumber/cucumber')
const { Appbar } = require('./objects/Appbar.object.js')
const { scenari } = require('../scenari.js')

const appbar = new Appbar()

// Automated generation of functions from data-testid

// Componentapp bar
Then('app bar should be visible', async () => {
    await appbar.assertAppBarIsVisible()
})
Then('app bar should be hidden', async () => {
    await appbar.assertAppBarIsHidden()
})

Then('title of app bar should be {string}', async (value) => {
    await appbar.assertTextTitleIs(value)
})

// Buttons
When('I click edit table button from app bar', async () => {
    await appbar.clickEditTable()
})
When('I click open menu button from app bar', async () => {
    await appbar.clickOpenMenu()
})
When('I click close menu button from app bar', async () => {
    await appbar.clickCloseMenu()
})

// List app bar menu
When('I click item {int} of app bar menu list from app bar', async (item) => {
    await appbar.clickAppBarMenuItem(item)
})
Then('app bar menu list from app bar should be empty', async () => {
    await appbar.assertAppBarMenuIsEmpty()
})
Then('app bar menu list from app bar should not be empty', async () => {
    await appbar.assertAppBarMenuIsNotEmpty()
})
Then(
    'app bar menu list from app bar should contain {string} by {string}',
    async (item, by) => {
        await appbar.assertAppBarMenuContainsItem(item, by)
    }
)
