const { Given, When, Then } = require("@cucumber/cucumber");
const { SignupModal } = require("../page-objects/signup-modal.js");
const { random_id } = require("../utils/toolkit.js");

const signupModal = new SignupModal();

Given("I opened the sign up modal", async () => {
  await signupModal.navigateToSignupModal();
});
Given(
  "I set the sign up modal login field with an erroneous email",
  async () => {
    await signupModal.typeLogin(random_id() + "@email");
  },
);

When("I click the cancel call to action of the sign up modal", async () => {
  await signupModal.clickCancel();
});
When("I click the sign up call to action of the sign up modal", async () => {
  await signupModal.clickSignUp();
});

Then("the sign up modal should be open", async () => {
  await signupModal.assertModalIsVisible();
});
Then("the sign up modal should be closed", async () => {
  await signupModal.assertModalIsClosed();
});
Then("the sign up modal pseudo field should be in error", async () => {
  await signupModal.assertFieldPseudoIsError();
});
Then("the sign up modal pseudo field should not be in error", async () => {
  await signupModal.assertFieldPseudoIsNotError();
});
Then("the sign up modal login field should be in error", async () => {
  await signupModal.assertFieldLoginIsError();
});
Then("the sign up modal login field should not be in error", async () => {
  await signupModal.assertFieldLoginIsNotError();
});
Then("the sign up modal password field should be in error", async () => {
  await signupModal.assertFieldPasswordIsError();
});
Then("the sign up modal password field should not be in error", async () => {
  await signupModal.assertFieldPasswordIsNotError();
});
Then("the sign up modal password repeat field should be in error", async () => {
  await signupModal.assertFieldPasswordRepeatIsError();
});
Then(
  "the sign up modal password repeat field should not be in error",
  async () => {
    await signupModal.assertFieldPasswordRepeatIsNotError();
  },
);
