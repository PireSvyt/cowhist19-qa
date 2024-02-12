const { Given, When, Then } = require('@cucumber/cucumber')
const { FeedbackModal } = require('./objects/FeedbackModal.object.js')
const { scenari } = require('../scenari.js')

const feedbackModal = new FeedbackModal()

// Automated generation of functions from data-testid

// Modal visibility
Then('feedback modal should be visible', async () => {
    await feedbackModal.assertModalIsVisible()
})
Then('feedback modal should be hidden', async () => {
    await feedbackModal.assertModalIsHidden()
})

// Buttons
When('I click close button from feedback', async () => {
    await feedbackModal.clickClose()
})
When('I click proceed button from feedback', async () => {
    await feedbackModal.clickProceed()
})

// Inputs
When('I fill feedback inputs with {string}', async function (scenario) {
    await feedbackModal.inputFill(scenari['feedback'][scenario]().inputs)
})
When('I click message input from feedback', async function () {
    await feedbackModal.inputMessageClick()
})
When(
    'I click item {string} of message input list from feedback',
    async function (index) {
        await feedbackModal.inputMessageClickItem(index)
    }
)
Then('message input should be in error from feedback', async () => {
    await feedbackModal.assertInputMessageIsError()
})
Then('message input should not be in error from feedback', async () => {
    await feedbackModal.assertInputMessageIsNotError()
})

// Checkboxes
When('I fill feedback checkboxes with {string}', async function (scenario) {
    await feedbackModal.checkboxFill(scenari['feedback'][scenario]().checkboxes)
})
When('I click consent checkbox from feedback', async function () {
    await feedbackModal.checkboxConsentClick()
})
Then('consent checkbox should be in error from feedback', async () => {
    await feedbackModal.assertCheckboxConsentIsError()
})
Then('consent checkbox should not be in error from feedback', async () => {
    await feedbackModal.assertCheckboxConsentIsNotError()
})
