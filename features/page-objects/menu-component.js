const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class AppBarMenu {
  async navigateToAppBarMenu() {
    await global.page.click("data-testid=appbar-menu-button");
  }

  async assertMenuIsOpen() {
    const element = await global.page.locator(
      "data-testid=appbar-menu",
    );
    await expect(element).toBeVisible();
  }
  async assertMenuIsClosed() {
    const element = await global.page.locator(
      "data-testid=appbar-menu",
    );
    await expect(element).toBeHidden();
  }
  async assertDocumentationOptionsAreAvailable() {
    let element = await global.page.locator(
      "data-testid=appbar-menu-menuitem-documentation",
    );
    await expect(element).toBeVisible();
    element = await global.page.locator(
      "data-testid=appbar-menu-menuitem-about",
    );
    await expect(element).toBeVisible();
  }
  async assertAuthenticatedOptionsAreHidden() {
    let element = await global.page.locator(
      "data-testid=appbar-menu-menuitem-signout",
    );
    await expect(element).toBeHidden();
    element = await global.page.locator(
      "data-testid=appbar-menu-menuitem-account",
    );
    await expect(element).toBeHidden();
  }
  async assertAuthenticatedOptionsAreAvailable() {
    let element = await global.page.locator(
      "data-testid=appbar-menu-menuitem-signout",
    );
    await expect(element).toBeVisible();
    element = await global.page.locator(
      "data-testid=appbar-menu-menuitem-account",
    );
    await expect(element).toBeVisible();
  }  
}

module.exports = { AppBarMenu };
