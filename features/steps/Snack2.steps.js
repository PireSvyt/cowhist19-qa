const { Given, When, Then } = require('@cucumber/cucumber')
const { Snack2 } = require('./objects/Snack2.object.js')
const { scenari } = require('../scenari.js')

const snack2 = new Snack2()

// Automated generation of functions from data-testid

// Componentsnackbar
Then('snackbar should be visible', async () => {
    await snack2.assertSnackbarIsVisible()
})
Then('snackbar should be hidden', async () => {
    await snack2.assertSnackbarIsHidden()
})

// Componentalert
Then('alert should be visible', async () => {
    await snack2.assertAlertIsVisible()
})
Then('alert should be hidden', async () => {
    await snack2.assertAlertIsHidden()
})
