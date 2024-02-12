const { Given, When, Then } = require('@cucumber/cucumber')
const { MyStats } = require('./objects/MyStats.object.js')
const { scenari } = require('../scenari.js')

const myStats = new MyStats()

// Automated generation of functions from data-testid

// Componentmy stats
Then('my stats should be visible', async () => {
    await myStats.assertMyStatsIsVisible()
})
Then('my stats should be hidden', async () => {
    await myStats.assertMyStatsIsHidden()
})

// Box no games visibility
Then('no games should be visible', async () => {
    await myStats.assertNoGamesIsVisible()
})
Then('no games should be hidden', async () => {
    await myStats.assertNoGamesIsHidden()
})

// Box stats visibility
Then('stats should be visible', async () => {
    await myStats.assertStatsIsVisible()
})
Then('stats should be hidden', async () => {
    await myStats.assertStatsIsHidden()
})
