const { Given, When, Then } = require("@cucumber/cucumber");
const { LandingPage } = require("../page-objects/landing-page");

const landingPage = new LandingPage();

Given("I am on landing page", async () => {
  await landingPage.navigateToLandingPage();
});

When("I click the sign up call to action of the landing page", async () => {
  await landingPage.clickSignUp();
});
When("I click the sign in call to action of the landing page", async () => {
  await landingPage.clickSignIn();
});
