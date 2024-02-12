const { Given, When, Then } = require('@cucumber/cucumber')
const { HistoryCard } = require('./objects/HistoryCard.object.js')
const { scenari } = require('../scenari.js')

const historyCard = new HistoryCard()

// Automated generation of functions from data-testid

// Buttons
When(
    'I click delete game {string} by {string} button from games',
    async (parameter, by) => {
        await historyCard.clickDeleteGame(parameter, by)
    }
)

// List contracts
When('I click item {int} of contracts list from games', async (item) => {
    await historyCard.clickContractsItem(item)
})
Then('contracts list from games should be empty', async () => {
    await historyCard.assertContractsIsEmpty()
})
Then('contracts list from games should not be empty', async () => {
    await historyCard.assertContractsIsNotEmpty()
})
Then(
    'contracts list from games should contain {string} by {string}',
    async (item, by) => {
        await historyCard.assertContractsContainsItem(item, by)
    }
)
