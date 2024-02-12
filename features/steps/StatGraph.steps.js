const { Given, When, Then } = require('@cucumber/cucumber')
const { StatGraph } = require('./objects/StatGraph.object.js')
const { scenari } = require('../scenari.js')

const statGraph = new StatGraph()

// Automated generation of functions from data-testid

// Componentstat graph
Then('stat graph should be visible', async () => {
    await statGraph.assertStatGraphIsVisible()
})
Then('stat graph should be hidden', async () => {
    await statGraph.assertStatGraphIsHidden()
})

// List chips
When('I click item {int} of chips list from stat graph', async (item) => {
    await statGraph.clickChipsItem(item)
})
Then('chips list from stat graph should be empty', async () => {
    await statGraph.assertChipsIsEmpty()
})
Then('chips list from stat graph should not be empty', async () => {
    await statGraph.assertChipsIsNotEmpty()
})
Then(
    'chips list from stat graph should contain {string} by {string}',
    async (item, by) => {
        await statGraph.assertChipsContainsItem(item, by)
    }
)
