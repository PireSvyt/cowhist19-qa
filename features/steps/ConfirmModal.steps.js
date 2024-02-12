const { Given, When, Then } = require('@cucumber/cucumber')
const { ConfirmModal } = require('./objects/ConfirmModal.object.js')
const { scenari } = require('../scenari.js')

const confirmModal = new ConfirmModal()

// Automated generation of functions from data-testid

// Modal visibility
Then('confirm modal should be visible', async () => {
    await confirmModal.assertModalIsVisible()
})
Then('confirm modal should be hidden', async () => {
    await confirmModal.assertModalIsHidden()
})

// List call to actions
When(
    'I click item {int} of call to actions list from confirm',
    async (item) => {
        await confirmModal.clickCallToActionsItem(item)
    }
)
Then('call to actions list from confirm should be empty', async () => {
    await confirmModal.assertCallToActionsIsEmpty()
})
Then('call to actions list from confirm should not be empty', async () => {
    await confirmModal.assertCallToActionsIsNotEmpty()
})
Then(
    'call to actions list from confirm should contain {string} by {string}',
    async (item, by) => {
        await confirmModal.assertCallToActionsContainsItem(item, by)
    }
)
