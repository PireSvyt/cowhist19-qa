const { Given, When, Then } = require("@cucumber/cucumber");
const { GameModal } = require("../page-objects/game-modal");
const env = require("../../.env.json")

const gameModal = new GameModal();

Object.keys(env).forEach(k => {
    gameModal[k] = env[k]
})

When("I click the cancel call to action of the game modal", async () => {
    await gameModal.clickCancel()
});
When("I click the save game call to action", async () => {
    await gameModal.clickSave()
});

Then("the game modal should be open", async () => {
    await gameModal.assertModalIsVisible();
});
Then("the game modal should be closed", async () => {
    await gameModal.assertModalIsClosed();
});
