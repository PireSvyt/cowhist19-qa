const { expect } = require("@playwright/test")
const { Given, When, Then } = require("@cucumber/cucumber")
const { AxeBuilder } = require('@axe-core/playwright')

Then("usability is acceptable", async () => {
    const accessibilityScanResults = await new AxeBuilder( await global.page ).analyze();
    await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
    });
    expect(accessibilityScanResults.violations).toEqual([]);
})