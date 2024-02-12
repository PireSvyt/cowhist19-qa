const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('ContractCard') * 1000)

// Automated generation of functions from data-testid
class ContractCard {
    // Selects
    async selectFill(inputs) {
        if (inputs.Contract !== undefined) {
            await global.page
                .locator(
                    'data-testid=list-contracts#listitem-' +
                        parameter +
                        '#select-contract >> input'
                )
                .fill(inputs.Contract)
        }
        if (inputs.Attack !== undefined) {
            await global.page
                .locator(
                    'data-testid=list-contracts#listitem-' +
                        parameter +
                        '#select-attack >> input'
                )
                .fill(inputs.Attack)
        }
        if (inputs.Defense !== undefined) {
            await global.page
                .locator(
                    'data-testid=list-contracts#listitem-' +
                        parameter +
                        '#select-defense >> input'
                )
                .fill(inputs.Defense)
        }
    }
    async selectContractClick() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#select-contract >> input'
        )
        await expect(element).click()
    }
    async selectContractClickItem(index) {
        await global.page
            .locator(
                'data-testid=list-contracts#listitem-' +
                    parameter +
                    '#select-contract >> data-testid=ArrowDropDownIcon'
            )
            .click()
        const element = await global.page
            .locator("div[id='menu-contract']")
            .locator('data-value=' + index)
        await expect(element).click()
    }
    async selectAttackClick() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#select-attack >> input'
        )
        await expect(element).click()
    }
    async selectAttackClickItem(index) {
        await global.page
            .locator(
                'data-testid=list-contracts#listitem-' +
                    parameter +
                    '#select-attack >> data-testid=ArrowDropDownIcon'
            )
            .click()
        const element = await global.page
            .locator("div[id='menu-attack']")
            .locator('data-value=' + index)
        await expect(element).click()
    }
    async selectDefenseClick() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#select-defense >> input'
        )
        await expect(element).click()
    }
    async selectDefenseClickItem(index) {
        await global.page
            .locator(
                'data-testid=list-contracts#listitem-' +
                    parameter +
                    '#select-defense >> data-testid=ArrowDropDownIcon'
            )
            .click()
        const element = await global.page
            .locator("div[id='menu-defense']")
            .locator('data-value=' + index)
        await expect(element).click()
    }
    async assertSelectContractIsError() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#select-contract >> input'
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertSelectContractIsNotError() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#select-contract >> input'
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
    async assertSelectAttackIsError() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#select-attack >> input'
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertSelectAttackIsNotError() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#select-attack >> input'
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
    async assertSelectDefenseIsError() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#select-defense >> input'
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertSelectDefenseIsNotError() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#select-defense >> input'
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }

    // Sliders
    async sliderFill(inputs) {
        if (inputs.Outcome !== undefined) {
            await global.page
                .locator(
                    'data-testid=list-contracts#listitem-' +
                        parameter +
                        '#slider-outcome >> input'
                )
                .fill(inputs.Outcome)
        }
    }
    async sliderOutcomeClick() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#slider-outcome >> input'
        )
        await expect(element).click()
    }
    async sliderOutcomeClickItem(index) {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#slider-outcome >> input'
        )
        await expect(element).click()
    }
    async assertSliderOutcomeIsError() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#slider-outcome >> input'
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertSliderOutcomeIsNotError() {
        const element = await global.page.locator(
            'data-testid=list-contracts#listitem-' +
                parameter +
                '#slider-outcome >> input'
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }
}

module.exports = { ContractCard }
