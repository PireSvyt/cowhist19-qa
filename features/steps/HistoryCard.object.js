const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class HistoryCard {

	// Buttons
	async clickDeletegame() {
		await global.page.getByTestId("component-table history-listitem-game-button-delete game").click()
	}
}


module.exports = { HistoryCard }