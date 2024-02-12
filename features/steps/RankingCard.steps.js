const { Given, When, Then } = require('@cucumber/cucumber')
const { RankingCard } = require('./objects/RankingCard.object.js')
const { scenari } = require('../scenari.js')

const rankingCard = new RankingCard()

// Automated generation of functions from data-testid
