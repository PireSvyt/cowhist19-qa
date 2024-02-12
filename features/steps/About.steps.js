const { Given, When, Then } = require('@cucumber/cucumber')
const { About } = require('./objects/About.object.js')
const { scenari } = require('../scenari.js')

const about = new About()

// Automated generation of functions from data-testid

// Page
Given('I open about page', async () => {
    await about.navigateToPage()
    await about.assertPageIsVisible()
})
Then('about page should be visible', async () => {
    await about.assertPageIsVisible()
})
Then('about page should be hidden', async () => {
    await about.assertPageIsHidden()
})
