const { Given, When, Then } = require('@cucumber/cucumber')
const { GameModal } = require('./objects/GameModal.object.js')
const { scenari } = require('../scenari.js')

const gameModal = new GameModal()

// Automated generation of functions from data-testid

// Modal visibility
Then('game modal should be visible', async () => {
    await gameModal.assertModalIsVisible()
})
Then('game modal should be hidden', async () => {
    await gameModal.assertModalIsHidden()
})

// Buttons
When('I click cancel button from game', async () => {
    await gameModal.clickCancel()
})
When('I click save button from game', async () => {
    await gameModal.clickSave()
})

// List contracts
When('I click item {int} of contracts list from game', async (item) => {
    await gameModal.clickContractsItem(item)
})
Then('contracts list from game should be empty', async () => {
    await gameModal.assertContractsIsEmpty()
})
Then('contracts list from game should not be empty', async () => {
    await gameModal.assertContractsIsNotEmpty()
})
Then(
    'contracts list from game should contain {string} by {string}',
    async (item, by) => {
        await gameModal.assertContractsContainsItem(item, by)
    }
)
