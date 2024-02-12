const { Given, When, Then } = require('@cucumber/cucumber')
const { InviteModal } = require('./objects/InviteModal.object.js')
const { scenari } = require('../scenari.js')

const inviteModal = new InviteModal()

// Automated generation of functions from data-testid

// Modal visibility
Then('invite modal should be visible', async () => {
    await inviteModal.assertModalIsVisible()
})
Then('invite modal should be hidden', async () => {
    await inviteModal.assertModalIsHidden()
})

// Buttons
When('I click cancel button from invite', async () => {
    await inviteModal.clickCancel()
})
When('I click invite button from invite', async () => {
    await inviteModal.clickInvite()
})

// Inputs
When('I fill invite inputs with {string}', async function (scenario) {
    await inviteModal.inputFill(scenari['invite'][scenario]().inputs)
})
When('I click pseudo input from invite', async function () {
    await inviteModal.inputPseudoClick()
})
When(
    'I click item {string} of pseudo input list from invite',
    async function (index) {
        await inviteModal.inputPseudoClickItem(index)
    }
)
When('I click login input from invite', async function () {
    await inviteModal.inputLoginClick()
})
When(
    'I click item {string} of login input list from invite',
    async function (index) {
        await inviteModal.inputLoginClickItem(index)
    }
)
Then('pseudo input should be in error from invite', async () => {
    await inviteModal.assertInputPseudoIsError()
})
Then('pseudo input should not be in error from invite', async () => {
    await inviteModal.assertInputPseudoIsNotError()
})
Then('login input should be in error from invite', async () => {
    await inviteModal.assertInputLoginIsError()
})
Then('login input should not be in error from invite', async () => {
    await inviteModal.assertInputLoginIsNotError()
})

// Checkboxes
When('I fill invite checkboxes with {string}', async function (scenario) {
    await inviteModal.checkboxFill(scenari['invite'][scenario]().checkboxes)
})
When('I click acknowledgement checkbox from invite', async function () {
    await inviteModal.checkboxAcknowledgementClick()
})
Then('acknowledgement checkbox should be in error from invite', async () => {
    await inviteModal.assertCheckboxAcknowledgementIsError()
})
Then(
    'acknowledgement checkbox should not be in error from invite',
    async () => {
        await inviteModal.assertCheckboxAcknowledgementIsNotError()
    }
)
