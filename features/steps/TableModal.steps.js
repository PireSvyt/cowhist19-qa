const { Given, When, Then } = require('@cucumber/cucumber')
const { TableModal } = require('./objects/TableModal.object.js')
const { scenari } = require('../scenari.js')

const tableModal = new TableModal()

// Automated generation of functions from data-testid

// Modal visibility
Then('table modal should be visible', async () => {
    await tableModal.assertModalIsVisible()
})
Then('table modal should be hidden', async () => {
    await tableModal.assertModalIsHidden()
})

// Box error on creating without user visibility
Then('error on creating without user should be visible', async () => {
    await tableModal.assertErrorOnCreatingWithoutUserIsVisible()
})
Then('error on creating without user should be hidden', async () => {
    await tableModal.assertErrorOnCreatingWithoutUserIsHidden()
})

// Box error on saving without user visibility
Then('error on saving without user should be visible', async () => {
    await tableModal.assertErrorOnSavingWithoutUserIsVisible()
})
Then('error on saving without user should be hidden', async () => {
    await tableModal.assertErrorOnSavingWithoutUserIsHidden()
})

// Buttons
When('I click invite player button from table', async () => {
    await tableModal.clickInvitePlayer()
})
When('I click cancel button from table', async () => {
    await tableModal.clickCancel()
})
When('I click save button from table', async () => {
    await tableModal.clickSave()
})

// Inputs
When('I fill table inputs with {string}', async function (scenario) {
    await tableModal.inputFill(scenari['table'][scenario]().inputs)
})
When('I click name input from table', async function () {
    await tableModal.inputNameClick()
})
When(
    'I click item {string} of name input list from table',
    async function (index) {
        await tableModal.inputNameClickItem(index)
    }
)
When('I click guests input from table', async function () {
    await tableModal.inputGuestsClick()
})
When(
    'I click item {string} of guests input list from table',
    async function (index) {
        await tableModal.inputGuestsClickItem(index)
    }
)
Then('name input should be in error from table', async () => {
    await tableModal.assertInputNameIsError()
})
Then('name input should not be in error from table', async () => {
    await tableModal.assertInputNameIsNotError()
})
Then('guests input should be in error from table', async () => {
    await tableModal.assertInputGuestsIsError()
})
Then('guests input should not be in error from table', async () => {
    await tableModal.assertInputGuestsIsNotError()
})

// List players
When('I click item {int} of players list from table', async (item) => {
    await tableModal.clickPlayersItem(item)
})
Then('players list from table should be empty', async () => {
    await tableModal.assertPlayersIsEmpty()
})
Then('players list from table should not be empty', async () => {
    await tableModal.assertPlayersIsNotEmpty()
})
Then(
    'players list from table should contain {string} by {string}',
    async (item, by) => {
        await tableModal.assertPlayersIsNotEmpty()
        await tableModal.assertPlayersContainsItem(item, by)
    }
)
