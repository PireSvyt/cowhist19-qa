const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { scenari } = require('../../scenari.js')

setDefaultTimeout(scenari.timeout('FeedbackContent') * 1000)

// Automated generation of functions from data-testid
class FeedbackContent {
    async assertTextFeedbackContentIs(value) {
        const element = await global.page
            .locator(
                "[data-testid='component-feedback content#text-feedback content']"
            )
            .innerText()
        await expect(element).toBe(value)
    }
}

module.exports = { FeedbackContent }
