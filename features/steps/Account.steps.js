const { Given, When, Then } = require('@cucumber/cucumber')
const { Account } = require('./objects/Account.object.js')
const { scenari } = require('../scenari.js')

const account = new Account()

// Automated generation of functions from data-testid

// Page
Given('I open account page', async () => {
    await account.navigateToPage()
    await account.assertPageIsVisible()
})
Then('account page should be visible', async () => {
    await account.assertPageIsVisible()
})
Then('account page should be hidden', async () => {
    await account.assertPageIsHidden()
})

// Box account details visibility
Then('account details should be visible', async () => {
    await account.assertAccountDetailsIsVisible()
})
Then('account details should be hidden', async () => {
    await account.assertAccountDetailsIsHidden()
})

// Buttons
When('I click change pseudo button from account details', async () => {
    await account.clickChangePseudo()
})
When('I click change email button from account details', async () => {
    await account.clickChangeEmail()
})
When('I click change password button from account details', async () => {
    await account.clickChangePassword()
})
When('I click merge accounts button from account details', async () => {
    await account.clickMergeAccounts()
})
When('I click anonymize account button from account details', async () => {
    await account.clickAnonymizeAccount()
})
When('I click close account button from account details', async () => {
    await account.clickCloseAccount()
})
