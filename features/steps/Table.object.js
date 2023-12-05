const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class Table {

	// Page
	async navigateToPage() {
		await global.page.goto(this.appUrl+paths["table"])
	}
	async assertPageIsVisible() {
		const element = await global.page.getByTestId("page-table")
		await expect(element).toBeVisible()
	}
	async assertPageIsHidden() {
		const element = await global.page.getByTestId("page-table")
		await expect(element).toBeHidden()
	}

	// Box denied access visibility
	async assertDeniedaccessIsVisible() {
		const element = await global.page.locator("data-testid=page-table-box-denied access")
		await expect(element).toBeVisible()
	}
	async assertDeniedaccessIsHidden() {
		const element = await global.page.locator("data-testid=page-table-box-denied access")
		await expect(element).toBeHidden()
	}

	// Box granted access visibility
	async assertGrantedaccessIsVisible() {
		const element = await global.page.locator("data-testid=page-table-box-granted access")
		await expect(element).toBeVisible()
	}
	async assertGrantedaccessIsHidden() {
		const element = await global.page.locator("data-testid=page-table-box-granted access")
		await expect(element).toBeHidden()
	}

	// Box analytics tab visibility
	async assertAnalyticstabIsVisible() {
		const element = await global.page.locator("data-testid=page-table-box-analytics tab")
		await expect(element).toBeVisible()
	}
	async assertAnalyticstabIsHidden() {
		const element = await global.page.locator("data-testid=page-table-box-analytics tab")
		await expect(element).toBeHidden()
	}

	// Box history tab visibility
	async assertHistorytabIsVisible() {
		const element = await global.page.locator("data-testid=page-table-box-history tab")
		await expect(element).toBeVisible()
	}
	async assertHistorytabIsHidden() {
		const element = await global.page.locator("data-testid=page-table-box-history tab")
		await expect(element).toBeHidden()
	}

	// Buttons
	async clickTohome() {
		await global.page.getByTestId("page-table-button-to home").click()
	}
	async clickNewgame() {
		await global.page.getByTestId("page-table-button-new game").click()
	}
}


module.exports = { Table }