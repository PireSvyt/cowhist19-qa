const { Given, When, Then } = require('@cucumber/cucumber')
const { TableCard } = require('./objects/TableCard.object.js')
const { scenari } = require('../scenari.js')

const tableCard = new TableCard()

// Automated generation of functions from data-testid
