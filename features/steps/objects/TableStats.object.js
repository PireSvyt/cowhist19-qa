const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('TableStats') * 1000)

// Automated generation of functions from data-testid
class TableStats {
    // Component table stats
    async assertTableStatsIsVisible() {
        const element = await global.page.getByTestId('component-table stats')
        await expect(element).toBeVisible()
    }
    async assertTableStatsIsHidden() {
        const element = await global.page.getByTestId('component-table stats')
        await expect(element).toBeHidden()
    }

    // Box no ranking visibility
    async assertNoRankingIsVisible() {
        const element = await global.page.locator(
            "[data-testid='component-table stats#box-no ranking']"
        )
        await expect(element).toBeVisible()
    }
    async assertNoRankingIsHidden() {
        const element = await global.page.locator(
            "[data-testid='component-table stats#box-no ranking']"
        )
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickSeeRanking() {
        await global.page
            .getByTestId('component-table stats#button-see ranking')
            .click()
    }
    async clickSeeGraph() {
        await global.page
            .getByTestId('component-table stats#button-see graph')
            .click()
    }

    // Selects
    async selectFill(inputs) {
        if (inputs.GraphDimension !== undefined) {
            await global.page
                .locator(
                    'data-testid=component-table stats#select-graph dimension >> input'
                )
                .fill(inputs.GraphDimension)
        }
    }
    async selectGraphDimensionClick() {
        const element = await global.page.locator(
            'data-testid=component-table stats#select-graph dimension >> input'
        )
        await expect(element).click()
    }
    async selectGraphDimensionClickItem(index) {
        await global.page
            .locator(
                'data-testid=component-table stats#select-graph dimension >> data-testid=ArrowDropDownIcon'
            )
            .click()
        const element = await global.page
            .locator("div[id='menu-graph dimension']")
            .locator('data-value=' + index)
        await expect(element).click()
    }
    async assertSelectGraphDimensionIsError() {
        const element = await global.page.locator(
            'data-testid=component-table stats#select-graph dimension >> input'
        )
        await expect(element).toHaveAttribute('aria-invalid', 'true')
    }
    async assertSelectGraphDimensionIsNotError() {
        const element = await global.page.locator(
            'data-testid=component-table stats#select-graph dimension >> input'
        )
        await expect(element).toHaveAttribute('aria-invalid', 'false')
    }

    // List ranks
    async clickRanksItem(parameter) {
        await global.page
            .locator("[data-testid='list-ranks#listitem-" + parameter + "']")
            .click()
    }
    async assertRanksIsEmpty() {
        const element = await global.page.getByTestId('list-ranks#listitem-0')
        await expect(element).toBeHidden()
    }
    async assertRanksIsNotEmpty() {
        const element = await global.page.getByTestId('list-ranks#listitem-0')
        await expect(element).toBeVisible()
    }
    async assertRanksContainsItem(parameter, by) {
        let itemCount = -1
        switch (by) {
            case 'index':
                itemCount = await global.page
                    .getByTestId('list-ranks#listitem-' + parameter + '')
                    .count()
                break
            case 'text':
                itemCount = await global.page
                    .locator(
                        "div[data-testid='component-table stats#list-ranks']"
                    )
                    .getByText(parameter)
                    .count()
                break
            default:
                console.error(
                    'assert list contains by ' + by + ' is not supported'
                )
                break
        }
        await expect(itemCount).toBe(1)
    }
}

module.exports = { TableStats }
