const { Given, When, Then } = require('@cucumber/cucumber')
const { Landing } = require('./objects/Landing.object.js')
const { scenari } = require('../scenari.js')

const landing = new Landing()

// Automated generation of functions from data-testid

// Componentlanding
Then('landing should be visible', async () => {
    await landing.assertLandingIsVisible()
})
Then('landing should be hidden', async () => {
    await landing.assertLandingIsHidden()
})

// Buttons
When('I click sign up button from landing', async () => {
    await landing.clickSignUp()
})
When('I click sign in button from landing', async () => {
    await landing.clickSignIn()
})
