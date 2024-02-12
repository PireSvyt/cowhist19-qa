const { expect } = require('@playwright/test')
const { setDefaultTimeout } = require('@cucumber/cucumber')
const { Given, When, Then } = require('@cucumber/cucumber')

const { scenari } = require('./scenari.js')

const { Home } = require('./steps/objects/Home.object.js')
const { Landing } = require('./steps/objects/Landing.object.js')
const { SignInModal } = require('./steps/objects/SignInModal.object.js')
const { MyTables } = require('./steps/objects/MyTables.object.js')
const { TableModal } = require('./steps/objects/TableModal.object.js')
const { Table } = require('./steps/objects/Table.object.js')
const { Appbar } = require('./steps/objects/Appbar.object.js')

const home = new Home()
const landing = new Landing()
const signInModal = new SignInModal()
const myTables = new MyTables()
const tableModal = new TableModal()
const table = new Table()
const appbar = new Appbar()

setDefaultTimeout(scenari.timeout('reducers') * 1000)

When('I sign in with {string} - RED', async (scenario) => {
    await home.navigateToPage()
    await home.assertPageIsVisible()
    await landing.clickSignIn()
    await signInModal.inputFill(scenari['sign in'][scenario]().inputs)
    await signInModal.clickProceed()
    await signInModal.assertModalIsHidden()
    await home.assertMyHomeIsVisible()
})

When('I create a table with {string} - RED', async (scenario) => {
    await home.navigateToPage()
    await myTables.assertMyTablesIsVisible()
    if (
        await myTables.assertTablesContainsItem(
            scenari['table'][scenario]().inputs.Name,
            'text'
        )
    ) {
        // Table exist = same as "I open table {string} - RED"
    } else {
        // Table is to create
        await myTables.clickNewTable()
        await tableModal.inputFill(scenari['table'][scenario]().inputs)
        await tableModal.clickSave()
        await tableModal.assertModalIsHidden()
        await table.assertPageIsVisible()
        await table.assertAnalyticsTabIsVisible()
        await table.assertHistoryTabIsHidden()
        await appbar.assertTextTitleIs(scenari['table'][scenario]().inputs.Name)
    }
})

When('if existing, I delete a table with {string} - RED', async (scenario) => {
    await home.navigateToPage()
    await home.assertPageIsVisible()
    let itemCount = await global.page
        .locator("div[data-testid='component-my tables#list-tables']")
        .getByText(scenari['table'][scenario]().inputs.Name)
        .count()
    if (itemCount === 1) {
        // Table exist = same as "I open table {string} - RED"

        // Delete table
        console.log('\nTODO Delete table')
    } else {
        // Inexisting table
        console.log('\nTable does not exist ;)')
        await myTables.assertMyTablesIsVisible
    }
})

When('I open table {string} - RED', async (scenario) => {
    console.log('\nTODO Open table')
})

When('I invite player {string} - RED', async (scenario) => {
    await tableModal.clickInvitePlayer()
    await inviteModal.assertModalIsVisible()
    await inviteModal.inputFill(scenari['invite'][scenario]().inputs)
    await inviteModal.checkboxFill(scenari['invite'][scenario]().checkboxes)
    await inviteModal.clickInvite()
    await inviteModal.assertModalIsHidden()
    await tableModal.assertModalIsVisible()
    await tableModal.assertPlayersContainsItem(
        scenari['invite'][scenario]().inputs.Pseudo,
        'text'
    )
})
