const { Given, When, Then } = require('@cucumber/cucumber')
const { ToComeModal } = require('./objects/ToComeModal.object.js')
const { scenari } = require('../scenari.js')

const toComeModal = new ToComeModal()

// Automated generation of functions from data-testid

// Modal visibility
Then('to come modal should be visible', async () => {
    await toComeModal.assertModalIsVisible()
})
Then('to come modal should be hidden', async () => {
    await toComeModal.assertModalIsHidden()
})

// Buttons
When('I click close button from to come', async () => {
    await toComeModal.clickClose()
})
