const { Given, When, Then } = require('@cucumber/cucumber')
const { PlayerCard } = require('./objects/PlayerCard.object.js')
const { scenari } = require('../scenari.js')

const playerCard = new PlayerCard()

// Automated generation of functions from data-testid

// Buttons
When(
    'I click remove player {string} by {string} button from players',
    async (parameter, by) => {
        await playerCard.clickRemovePlayer(parameter, by)
    }
)
