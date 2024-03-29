const { Given, When, Then } = require('@cucumber/cucumber')
const { WelcomeCarousel } = require('./objects/WelcomeCarousel.object.js')
const { scenari } = require('../scenari.js')

const welcomeCarousel = new WelcomeCarousel()

// Automated generation of functions from data-testid

// Componentcarousel
Then('carousel should be visible', async () => {
    await welcomeCarousel.assertCarouselIsVisible()
})
Then('carousel should be hidden', async () => {
    await welcomeCarousel.assertCarouselIsHidden()
})

// Box page 1 visibility
Then('page 1 should be visible', async () => {
    await welcomeCarousel.assertPage1IsVisible()
})
Then('page 1 should be hidden', async () => {
    await welcomeCarousel.assertPage1IsHidden()
})

// Box page 2 visibility
Then('page 2 should be visible', async () => {
    await welcomeCarousel.assertPage2IsVisible()
})
Then('page 2 should be hidden', async () => {
    await welcomeCarousel.assertPage2IsHidden()
})

// Box page 3 visibility
Then('page 3 should be visible', async () => {
    await welcomeCarousel.assertPage3IsVisible()
})
Then('page 3 should be hidden', async () => {
    await welcomeCarousel.assertPage3IsHidden()
})
