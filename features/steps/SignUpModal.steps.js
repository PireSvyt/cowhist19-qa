const { Given, When, Then } = require('@cucumber/cucumber')
const { SignUpModal } = require('./objects/SignUpModal.object.js')
const { scenari } = require('../scenari.js')

const signUpModal = new SignUpModal()

// Automated generation of functions from data-testid

// Modal visibility
Then('sign up modal should be visible', async () => {
    await signUpModal.assertModalIsVisible()
})
Then('sign up modal should be hidden', async () => {
    await signUpModal.assertModalIsHidden()
})

// Box error on signing up with existing login visibility
Then('error on signing up with existing login should be visible', async () => {
    await signUpModal.assertErrorOnSigningUpWithExistingLoginIsVisible()
})
Then('error on signing up with existing login should be hidden', async () => {
    await signUpModal.assertErrorOnSigningUpWithExistingLoginIsHidden()
})

// Buttons
When('I click close button from sign up', async () => {
    await signUpModal.clickClose()
})
When('I click proceed button from sign up', async () => {
    await signUpModal.clickProceed()
})

// Inputs
When('I fill sign up inputs with {string}', async function (scenario) {
    await signUpModal.inputFill(scenari['sign up'][scenario]().inputs)
})
When('I click pseudo input from sign up', async function () {
    await signUpModal.inputPseudoClick()
})
When(
    'I click item {string} of pseudo input list from sign up',
    async function (index) {
        await signUpModal.inputPseudoClickItem(index)
    }
)
When('I click login input from sign up', async function () {
    await signUpModal.inputLoginClick()
})
When(
    'I click item {string} of login input list from sign up',
    async function (index) {
        await signUpModal.inputLoginClickItem(index)
    }
)
When('I click password input from sign up', async function () {
    await signUpModal.inputPasswordClick()
})
When(
    'I click item {string} of password input list from sign up',
    async function (index) {
        await signUpModal.inputPasswordClickItem(index)
    }
)
When('I click password repeat input from sign up', async function () {
    await signUpModal.inputPasswordRepeatClick()
})
When(
    'I click item {string} of password repeat input list from sign up',
    async function (index) {
        await signUpModal.inputPasswordRepeatClickItem(index)
    }
)
Then('pseudo input should be in error from sign up', async () => {
    await signUpModal.assertInputPseudoIsError()
})
Then('pseudo input should not be in error from sign up', async () => {
    await signUpModal.assertInputPseudoIsNotError()
})
Then('login input should be in error from sign up', async () => {
    await signUpModal.assertInputLoginIsError()
})
Then('login input should not be in error from sign up', async () => {
    await signUpModal.assertInputLoginIsNotError()
})
Then('password input should be in error from sign up', async () => {
    await signUpModal.assertInputPasswordIsError()
})
Then('password input should not be in error from sign up', async () => {
    await signUpModal.assertInputPasswordIsNotError()
})
Then('password repeat input should be in error from sign up', async () => {
    await signUpModal.assertInputPasswordRepeatIsError()
})
Then('password repeat input should not be in error from sign up', async () => {
    await signUpModal.assertInputPasswordRepeatIsNotError()
})
