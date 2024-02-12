const { Given, When, Then } = require('@cucumber/cucumber')
const { TableStats } = require('./objects/TableStats.object.js')
const { scenari } = require('../scenari.js')

const tableStats = new TableStats()

// Automated generation of functions from data-testid

// Componenttable stats
Then('table stats should be visible', async () => {
    await tableStats.assertTableStatsIsVisible()
})
Then('table stats should be hidden', async () => {
    await tableStats.assertTableStatsIsHidden()
})

// Box no ranking visibility
Then('no ranking should be visible', async () => {
    await tableStats.assertNoRankingIsVisible()
})
Then('no ranking should be hidden', async () => {
    await tableStats.assertNoRankingIsHidden()
})

// Buttons
When('I click see ranking button from table stats', async () => {
    await tableStats.clickSeeRanking()
})
When('I click see graph button from table stats', async () => {
    await tableStats.clickSeeGraph()
})

// Selects
When('I fill table stats dropdowns with {string}', async function (scenario) {
    await tableStats.selectFill(scenari['table stats'][scenario]().dropdowns)
})
When(
    'I click graph dimension from dropdown list from table stats',
    async function () {
        await tableStats.selectGraphDimensionClick()
    }
)
When(
    'I click item {string} of graph dimension dropdown list from table stats',
    async function (index) {
        await tableStats.selectGraphDimensionClickItem(index)
    }
)
Then(
    'graph dimension dropdown should be in error from table stats',
    async () => {
        await tableStats.assertSelectGraphDimensionIsError()
    }
)
Then(
    'graph dimension dropdown should not be in error from table stats',
    async () => {
        await tableStats.assertSelectGraphDimensionIsNotError()
    }
)

// List ranks
When('I click item {int} of ranks list from table stats', async (item) => {
    await tableStats.clickRanksItem(item)
})
Then('ranks list from table stats should be empty', async () => {
    await tableStats.assertRanksIsEmpty()
})
Then('ranks list from table stats should not be empty', async () => {
    await tableStats.assertRanksIsNotEmpty()
})
Then(
    'ranks list from table stats should contain {string} by {string}',
    async (item, by) => {
        await tableStats.assertRanksContainsItem(item, by)
    }
)
