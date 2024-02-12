const { Given, When, Then } = require('@cucumber/cucumber')
const { ContractCard } = require('./objects/ContractCard.object.js')
const { scenari } = require('../scenari.js')

const contractCard = new ContractCard()

// Automated generation of functions from data-testid

// Selects
When('I fill contracts dropdowns with {string}', async function (scenario) {
    await contractCard.selectFill(scenari['contracts'][scenario]().dropdowns)
})
When('I click contract from dropdown list from contracts', async function () {
    await contractCard.selectContractClick()
})
When(
    'I click item {string} of contract dropdown list from contracts',
    async function (index) {
        await contractCard.selectContractClickItem(index)
    }
)
Then('contract dropdown should be in error from contracts', async () => {
    await contractCard.assertSelectContractIsError()
})
Then('contract dropdown should not be in error from contracts', async () => {
    await contractCard.assertSelectContractIsNotError()
})
When('I click attack from dropdown list from contracts', async function () {
    await contractCard.selectAttackClick()
})
When(
    'I click item {string} of attack dropdown list from contracts',
    async function (index) {
        await contractCard.selectAttackClickItem(index)
    }
)
Then('attack dropdown should be in error from contracts', async () => {
    await contractCard.assertSelectAttackIsError()
})
Then('attack dropdown should not be in error from contracts', async () => {
    await contractCard.assertSelectAttackIsNotError()
})
When('I click defense from dropdown list from contracts', async function () {
    await contractCard.selectDefenseClick()
})
When(
    'I click item {string} of defense dropdown list from contracts',
    async function (index) {
        await contractCard.selectDefenseClickItem(index)
    }
)
Then('defense dropdown should be in error from contracts', async () => {
    await contractCard.assertSelectDefenseIsError()
})
Then('defense dropdown should not be in error from contracts', async () => {
    await contractCard.assertSelectDefenseIsNotError()
})

// Sliders
When('I fill contracts sliders with {string}', async function (scenario) {
    await contractCard.sliderFill(scenari['contracts'][scenario]().sliders)
})
When('I click outcome from slider list from contracts', async function () {
    await contractCard.sliderOutcomeClick()
})
Then('outcome slider should be in error from contracts', async () => {
    await contractCard.assertSliderOutcomeIsError()
})
Then('outcome slider should not be in error from contracts', async () => {
    await contractCard.assertSliderOutcomeIsNotError()
})
