const { Given, When, Then } = require("@cucumber/cucumber");
const { TableModal } = require("../page-objects/table-modal");
const env = require("../../.env.json")

const tableModal = new TableModal();

Object.keys(env).forEach(k => {
    tableModal[k] = env[k]
})

Then("the table modal should be open", async () => {
    await tableModal.assertModalIsVisible();
});
Then("the table modal should be closed", async () => {
    await tableModal.assertModalIsClosed();
});
