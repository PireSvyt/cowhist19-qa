const { Given, When, Then } = require('@cucumber/cucumber')
const { Table } = require('./objects/Table.object.js')
const { scenari } = require('../scenari.js')

const table = new Table()

// Automated generation of functions from data-testid

// Page
Given('I open table page', async () => {
    await table.navigateToPage()
    await table.assertPageIsVisible()
})
Then('table page should be visible', async () => {
    await table.assertPageIsVisible()
})
Then('table page should be hidden', async () => {
    await table.assertPageIsHidden()
})

// Box denied access visibility
Then('denied access should be visible', async () => {
    await table.assertDeniedAccessIsVisible()
})
Then('denied access should be hidden', async () => {
    await table.assertDeniedAccessIsHidden()
})

// Box granted access visibility
Then('granted access should be visible', async () => {
    await table.assertGrantedAccessIsVisible()
})
Then('granted access should be hidden', async () => {
    await table.assertGrantedAccessIsHidden()
})

// Box analytics tab visibility
Then('analytics tab should be visible', async () => {
    await table.assertAnalyticsTabIsVisible()
})
Then('analytics tab should be hidden', async () => {
    await table.assertAnalyticsTabIsHidden()
})

// Box history tab visibility
Then('history tab should be visible', async () => {
    await table.assertHistoryTabIsVisible()
})
Then('history tab should be hidden', async () => {
    await table.assertHistoryTabIsHidden()
})

// Buttons
When('I click to home button from table', async () => {
    await table.clickToHome()
})
When('I click to analytics tab button from granted access', async () => {
    await table.clickToAnalyticsTab()
})
When('I click to history tab button from granted access', async () => {
    await table.clickToHistoryTab()
})
When('I click new game button from table', async () => {
    await table.clickNewGame()
})
