const { Given, When, Then } = require("@cucumber/cucumber");
const { AppBarMenu } = require("../page-objects/menu-component.js")
const env = require("../../.env.json")

const appBarMenu = new AppBarMenu();

Object.keys(env).forEach(k => {
    appBarMenu[k] = env[k]
})

Given ('I opened the appbar menu', async () => {
    await appBarMenu.navigateToAppBarMenu();
    await appBarMenu.assertMenuIsOpen()
});

When('I click the appbar menu', async () => {
    await appBarMenu.navigateToAppBarMenu();
});
When('I click away', async () => {
    await appBarMenu.clickAway();
});

Then('the appbar menu should be open', async () => {
    await appBarMenu.assertMenuIsOpen();
});
Then('the appbar menu should be closed', async () => {
    await appBarMenu.assertMenuIsClosed();
});
Then('the appbar menu should contain the documentation options', async () => {
    await appBarMenu.assertDocumentationOptionsAreAvailable();
});
Then('the appbar menu should not contain the authenticated user options', async () => {
    await appBarMenu.assertAuthenticatedOptionsAreHidden();
});
Then('the appbar menu should contain the authenticated user options', async () => {
    await appBarMenu.assertAuthenticatedOptionsAreAvailable();
});
