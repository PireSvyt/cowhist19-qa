const { Given, When, Then } = require("@cucumber/cucumber")
const { SigninModal } = require("../page-objects/signin-modal.js")
const { random_id } = require("../../utils/toolkit.js")
const env = require("../../.env.json")

const signinModal = new SigninModal()

Object.keys(env).forEach(k => {
    signinModal[k] = env[k]
})

Given('I opened the sign in modal', async function () {
    await signinModal.navigateToSigninModal()
    await signinModal.assertModalIsVisible()
});
Given('I filled the sign in modal login field with an erroneous email', async function () {
    await signinModal.fillIn({ login: random_id() + '@email' })
});
Given('I filled the sign in modal login field with a random email', async function () {
    await signinModal.fillIn({ login: random_id() + '@email.com' })
});
Given('I filled the sign in modal password field with a random password', async function () {
    await signinModal.fillIn({ password: random_id() })
});
Given('I filled the sign in modal with random credentials', async function () {
    await signinModal.fillIn({
        login: random_id() + '@email.com',
        password: random_id()
    })
});
Given('I filled in the sign in modal with activated account creadentials but invalid password', async function () {
    await signinModal.fillIn({
        login: env.input_signin_active_login,
        password: random_id()
    })
});
Given('I filled in the sign in modal with inactive account creadentials', async function () {
    await signinModal.fillIn({
        login: env.input_signin_inactive_login,
        password: env.input_signin_inactive_password
    })
});
Given('I filled in the sign in modal with activated account creadentials', async function () {
    await signinModal.fillIn({
        login: env.input_signin_active_login,
        password: env.input_signin_active_password
    })
});
Given('I signed in with activated account creadentials', async function () {
    await signinModal.signedin({
        login: env.input_signin_active_login,
        password: env.input_signin_active_password
    })
    await signinModal.assertIAmConnected()
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
Then("the sign in modal sign up call to action should be visible", async () => {
  await signinModal.assertButtonSignupIsVisible();
}); 
Then("the sign in modal send activation call to action should be visible", async () => {
  await signinModal.assertButtonSendActivationIsVisible();
}); 
Then('I should be connected', async () => {
    await signinModal.assertIAmConnected()
});
