const { Given, When, Then } = require('@cucumber/cucumber')
const { Activation } = require('./objects/Activation.object.js')
const { scenari } = require('../scenari.js')

const activation = new Activation()

// Automated generation of functions from data-testid

// Page
Given('I open activation page', async () => {
    await activation.navigateToPage()
    await activation.assertPageIsVisible()
})
Then('activation page should be visible', async () => {
    await activation.assertPageIsVisible()
})
Then('activation page should be hidden', async () => {
    await activation.assertPageIsHidden()
})

// Box account is activated visibility
Then('account is activated should be visible', async () => {
    await activation.assertAccountIsActivatedIsVisible()
})
Then('account is activated should be hidden', async () => {
    await activation.assertAccountIsActivatedIsHidden()
})

// Box error while activating visibility
Then('error while activating should be visible', async () => {
    await activation.assertErrorWhileActivatingIsVisible()
})
Then('error while activating should be hidden', async () => {
    await activation.assertErrorWhileActivatingIsHidden()
})

// Box activation sent visibility
Then('activation sent should be visible', async () => {
    await activation.assertActivationSentIsVisible()
})
Then('activation sent should be hidden', async () => {
    await activation.assertActivationSentIsHidden()
})

// Box error while sending activation visibility
Then('error while sending activation should be visible', async () => {
    await activation.assertErrorWhileSendingActivationIsVisible()
})
Then('error while sending activation should be hidden', async () => {
    await activation.assertErrorWhileSendingActivationIsHidden()
})

// Buttons
When('I click activate button from activation', async () => {
    await activation.clickActivate()
})
When(
    'I click open sign in modal button from account is activated',
    async () => {
        await activation.clickOpenSignInModal()
    }
)
When(
    'I click resend activation email button from error while activating',
    async () => {
        await activation.clickResendActivationEmail()
    }
)
