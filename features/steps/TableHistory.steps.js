const { Given, When, Then } = require('@cucumber/cucumber')
const { TableHistory } = require('./objects/TableHistory.object.js')
const { scenari } = require('../scenari.js')

const tableHistory = new TableHistory()

// Automated generation of functions from data-testid

// Componenttable history
Then('table history should be visible', async () => {
    await tableHistory.assertTableHistoryIsVisible()
})
Then('table history should be hidden', async () => {
    await tableHistory.assertTableHistoryIsHidden()
})

// Box no games visibility
Then('no games should be visible', async () => {
    await tableHistory.assertNoGamesIsVisible()
})
Then('no games should be hidden', async () => {
    await tableHistory.assertNoGamesIsHidden()
})

// List games
When('I click item {int} of games list from table history', async (item) => {
    await tableHistory.clickGamesItem(item)
})
Then('games list from table history should be empty', async () => {
    await tableHistory.assertGamesIsEmpty()
})
Then('games list from table history should not be empty', async () => {
    await tableHistory.assertGamesIsNotEmpty()
})
Then(
    'games list from table history should contain {string} by {string}',
    async (item, by) => {
        await tableHistory.assertGamesContainsItem(item, by)
    }
)
