const { Given, When, Then } = require('@cucumber/cucumber')
const { SignInModal } = require('./objects/SignInModal.object.js')
const { scenari } = require('../scenari.js')

const signInModal = new SignInModal()

// Automated generation of functions from data-testid

// Modal visibility
Then('sign in modal should be visible', async () => {
    await signInModal.assertModalIsVisible()
})
Then('sign in modal should be hidden', async () => {
    await signInModal.assertModalIsHidden()
})

// Box error on finding account visibility
Then('error on finding account should be visible', async () => {
    await signInModal.assertErrorOnFindingAccountIsVisible()
})
Then('error on finding account should be hidden', async () => {
    await signInModal.assertErrorOnFindingAccountIsHidden()
})

// Box password sent visibility
Then('password sent should be visible', async () => {
    await signInModal.assertPasswordSentIsVisible()
})
Then('password sent should be hidden', async () => {
    await signInModal.assertPasswordSentIsHidden()
})

// Box inactive account visibility
Then('inactive account should be visible', async () => {
    await signInModal.assertInactiveAccountIsVisible()
})
Then('inactive account should be hidden', async () => {
    await signInModal.assertInactiveAccountIsHidden()
})

// Box activation sent visibility
Then('activation sent should be visible', async () => {
    await signInModal.assertActivationSentIsVisible()
})
Then('activation sent should be hidden', async () => {
    await signInModal.assertActivationSentIsHidden()
})

// Buttons
When('I click reset password button from sign in', async () => {
    await signInModal.clickResetPassword()
})
When('I click open sign up modal button from sign in', async () => {
    await signInModal.clickOpenSignUpModal()
})
When('I click send activation button from sign in', async () => {
    await signInModal.clickSendActivation()
})
When('I click close button from sign in', async () => {
    await signInModal.clickClose()
})
When('I click proceed button from sign in', async () => {
    await signInModal.clickProceed()
})

// Inputs
When('I fill sign in inputs with {string}', async function (scenario) {
    await signInModal.inputFill(scenari['sign in'][scenario]().inputs)
})
When('I click login input from sign in', async function () {
    await signInModal.inputLoginClick()
})
When(
    'I click item {string} of login input list from sign in',
    async function (index) {
        await signInModal.inputLoginClickItem(index)
    }
)
When('I click password input from sign in', async function () {
    await signInModal.inputPasswordClick()
})
When(
    'I click item {string} of password input list from sign in',
    async function (index) {
        await signInModal.inputPasswordClickItem(index)
    }
)
Then('login input should be in error from sign in', async () => {
    await signInModal.assertInputLoginIsError()
})
Then('login input should not be in error from sign in', async () => {
    await signInModal.assertInputLoginIsNotError()
})
Then('password input should be in error from sign in', async () => {
    await signInModal.assertInputPasswordIsError()
})
Then('password input should not be in error from sign in', async () => {
    await signInModal.assertInputPasswordIsNotError()
})
