const { Given, When, Then } = require('@cucumber/cucumber')
const { MyTables } = require('./objects/MyTables.object.js')
const { scenari } = require('../scenari.js')

const myTables = new MyTables()

// Automated generation of functions from data-testid

// Componentmy tables
Then('my tables should be visible', async () => {
    await myTables.assertMyTablesIsVisible()
})
Then('my tables should be hidden', async () => {
    await myTables.assertMyTablesIsHidden()
})

// Box no table note visibility
Then('no table note should be visible', async () => {
    await myTables.assertNoTableNoteIsVisible()
})
Then('no table note should be hidden', async () => {
    await myTables.assertNoTableNoteIsHidden()
})

// Buttons
When('I click new table button from my tables', async () => {
    await myTables.clickNewTable()
})

// List tables
When('I click item {int} of tables list from my tables', async (item) => {
    await myTables.clickTablesItem(item)
})
Then('tables list from my tables should be empty', async () => {
    await myTables.assertTablesIsEmpty()
})
Then('tables list from my tables should not be empty', async () => {
    await myTables.assertTablesIsNotEmpty()
})
Then(
    'tables list from my tables should contain {string} by {string}',
    async (item, by) => {
        await myTables.assertTablesContainsItem(item, by)
    }
)
