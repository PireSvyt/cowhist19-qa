const { Given, When, Then } = require('@cucumber/cucumber')
const { FeedbackContent } = require('./objects/FeedbackContent.object.js')
const { scenari } = require('../scenari.js')

const feedbackContent = new FeedbackContent()

// Automated generation of functions from data-testid

Then(
    'feedback content of feedback content should be {string}',
    async (value) => {
        await feedbackContent.assertTextFeedbackContentIs(value)
    }
)
