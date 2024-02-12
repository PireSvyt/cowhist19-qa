const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('PlayerCard') * 1000)

// Automated generation of functions from data-testid
class PlayerCard {
    // Buttons
    async clickRemovePlayer(parameter, by) {
        await global.page
            .locator(
                "[data-testid='list-players#listitem-" +
                    parameter +
                    "#button-remove player']"
            )
            .click()
    }
}

module.exports = { PlayerCard }
