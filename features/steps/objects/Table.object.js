const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('Table') * 1000)

// Automated generation of functions from data-testid
class Table {
    // Page
    async navigateToPage() {
        await global.page.goto(scenari.paths.root + scenari.paths['table'])
    }
    async assertPageIsVisible() {
        const element = await global.page.getByTestId('page-table')
        await expect(element).toBeVisible()
    }
    async assertPageIsHidden() {
        const element = await global.page.getByTestId('page-table')
        await expect(element).toBeHidden()
    }

    // Box denied access visibility
    async assertDeniedAccessIsVisible() {
        const element = await global.page.locator(
            "[data-testid='page-table#box-denied access']"
        )
        await expect(element).toBeVisible()
    }
    async assertDeniedAccessIsHidden() {
        const element = await global.page.locator(
            "[data-testid='page-table#box-denied access']"
        )
        await expect(element).toBeHidden()
    }

    // Box granted access visibility
    async assertGrantedAccessIsVisible() {
        const element = await global.page.locator(
            "[data-testid='page-table#box-granted access']"
        )
        await expect(element).toBeVisible()
    }
    async assertGrantedAccessIsHidden() {
        const element = await global.page.locator(
            "[data-testid='page-table#box-granted access']"
        )
        await expect(element).toBeHidden()
    }

    // Box analytics tab visibility
    async assertAnalyticsTabIsVisible() {
        const element = await global.page.locator(
            "[data-testid='page-table#box-analytics tab']"
        )
        await expect(element).toBeVisible()
    }
    async assertAnalyticsTabIsHidden() {
        const element = await global.page.locator(
            "[data-testid='page-table#box-analytics tab']"
        )
        await expect(element).toBeHidden()
    }

    // Box history tab visibility
    async assertHistoryTabIsVisible() {
        const element = await global.page.locator(
            "[data-testid='page-table#box-history tab']"
        )
        await expect(element).toBeVisible()
    }
    async assertHistoryTabIsHidden() {
        const element = await global.page.locator(
            "[data-testid='page-table#box-history tab']"
        )
        await expect(element).toBeHidden()
    }

    // Buttons
    async clickToHome() {
        await global.page.getByTestId('page-table#button-to home').click()
    }
    async clickToAnalyticsTab() {
        await global.page
            .getByTestId('box-granted access#button-to analytics tab')
            .click()
    }
    async clickToHistoryTab() {
        await global.page
            .getByTestId('box-granted access#button-to history tab')
            .click()
    }
    async clickNewGame() {
        await global.page.getByTestId('page-table#button-new game').click()
    }
}

module.exports = { Table }
