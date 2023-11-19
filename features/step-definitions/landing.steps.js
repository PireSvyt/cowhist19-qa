const { Given, When, Then } = require("@cucumber/cucumber");
const { LandingPage } = require("../page-objects/landing-page");
const env = require("../../.env.json")

const landingPage = new LandingPage();

Object.keys(env).forEach(k => {
  landingPage[k] = env[k]
})

Given("I opened the landing page", async () => {
  await landingPage.navigateToLandingPage();
});

When("I click the sign up call to action of the landing page", async () => {
  await landingPage.clickSignUp();
});
When("I click the sign in call to action of the landing page", async () => {
  await landingPage.clickSignIn();
});
When("I click the new table call to action of my tables", async () => {
  await landingPage.clickNewTable();
});

