const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class PlayerCard {

	// Buttons
	async clickRemoveplayer(parameter, by) {
		await global.page.locator('[data-testid="list-players-button-remove player"]['+by+'="'+parameter+'"]').click()
	}
}


module.exports = { PlayerCard }