const { Given, When, Then } = require("@cucumber/cucumber")
const { SigninModal } = require("../page-objects/signin-modal.js")
const { random_id } = require("../utils/toolkit.js")

const signinModal = new SigninModal()

Given('I opened the sign in modal', async function () {
    await signinModal.navigateToSigninModal()
});
Given('I set the sign in modal login field with an erroneous email', async function () {
    await signinModal.typeLogin(random_id() + '@email')
});
Given('I set the sign in modal login field with a random email', async function () {
    await signinModal.typeLogin(random_id() + '@email.com')
});
Given('I set the sign in modal password field with a random password', async function () {
    await signinModal.typePassword(random_id())
});
Given('I fill in the sign in modal with activated account creadentials but invalid password', async function () {
    await signinModal.typeLogin(random_id() + '@email.com') // ACTIVE ACCOUNT
    await signinModal.typePassword(random_id())
});
Given('I fill in the sign in modal with inactive account creadentials', async function () {
    await signinModal.typeLogin(random_id() + '@email.com') // INACTIVE ACCOUNT
    await signinModal.typePassword(random_id())
});
Given('I fill in the sign in modal with activated account creadentials', async function () {
    await signinModal.typeLogin(random_id() + '@email.com')  // ACTIVE ACCOUNT
    await signinModal.typePassword(random_id())  // ACTIVE ACCOUNT
});


When("I click the cancel call to action of the sign in modal", async () => {
    await signinModal.clickCancel()
});
When("I click the sign in call to action of the sign in modal", async () => {
    await signinModal.clickSignIn()
});
When("I click the reset password call to action of the sign in modal", async () => {
    await signinModal.clickResetPassword()
});


Then('the sign in modal should be open', async () => {
    await signinModal.assertModalIsVisible()
});
Then('the sign in modal should be closed', async function () {
    await signinModal.assertModalIsClosed()
});  
Then('the sign in modal login field should be in error', async function () {
    await signinModal.assertFieldLoginIsError()
});  
Then('the sign in modal login field should not be in error', async function () {
    await signinModal.assertFieldLoginIsNotError()
});  
Then('the sign in modal password field should be in error', async function () {
    await signinModal.assertFieldPasswordIsError()
});  
Then('the sign in modal password field should not be in error', async function () {
    await signinModal.assertFieldPasswordIsNotError()
});  
Then('I should be connected', async () => {
    await false
});
