const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('RankingCard') * 1000)

// Automated generation of functions from data-testid
class RankingCard {}

module.exports = { RankingCard }
