const { Given, When, Then } = require("@cucumber/cucumber");
const { TableModal } = require("../page-objects/table-modal");
const env = require("../../.env.json")

const tableModal = new TableModal();

Object.keys(env).forEach(k => {
    tableModal[k] = env[k]
})

When("I click the cancel call to action of the table modal", async () => {
    await tableModal.clickCancel()
});
When("I click the save table call to action", async () => {
    await tableModal.clickSave()
});

Then("the table modal should be open", async () => {
    await tableModal.assertModalIsVisible();
});
Then("the table modal should be closed", async () => {
    await tableModal.assertModalIsClosed();
});
