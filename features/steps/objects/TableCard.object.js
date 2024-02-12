const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('TableCard') * 1000)

// Automated generation of functions from data-testid
class TableCard {}

module.exports = { TableCard }
