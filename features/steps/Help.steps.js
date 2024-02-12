const { Given, When, Then } = require('@cucumber/cucumber')
const { Help } = require('./objects/Help.object.js')
const { scenari } = require('../scenari.js')

const help = new Help()

// Automated generation of functions from data-testid

// Page
Given('I open help page', async () => {
    await help.navigateToPage()
    await help.assertPageIsVisible()
})
Then('help page should be visible', async () => {
    await help.assertPageIsVisible()
})
Then('help page should be hidden', async () => {
    await help.assertPageIsHidden()
})
