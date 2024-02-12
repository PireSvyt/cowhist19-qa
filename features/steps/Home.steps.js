const { Given, When, Then } = require('@cucumber/cucumber')
const { Home } = require('./objects/Home.object.js')
const { scenari } = require('../scenari.js')

const home = new Home()

// Automated generation of functions from data-testid

// Page
Given('I open home page', async () => {
    await home.navigateToPage()
    await home.assertPageIsVisible()
})
Then('home page should be visible', async () => {
    await home.assertPageIsVisible()
})
Then('home page should be hidden', async () => {
    await home.assertPageIsHidden()
})

// Componentshowroom
Then('showroom should be visible', async () => {
    await home.assertShowroomIsVisible()
})
Then('showroom should be hidden', async () => {
    await home.assertShowroomIsHidden()
})

// Componentmy home
Then('my home should be visible', async () => {
    await home.assertMyHomeIsVisible()
})
Then('my home should be hidden', async () => {
    await home.assertMyHomeIsHidden()
})
