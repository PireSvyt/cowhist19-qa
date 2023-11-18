const playwright = require("playwright");
const { Before, After, BeforeAll, AfterAll } = require("@cucumber/cucumber");

BeforeAll(async () => {
  console.log("Launch Browser");
  global.browser = await playwright["chromium"].launch({ headless: true });
});

AfterAll(async () => {
  console.log("\r");
  console.log("Close Browser");
  await global.browser.close();
});

Before(async () => {
  //console.log("Create new context page")
  console.log("\r");
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async () => {
  //console.log("Close context and page")
  await global.context.close();
  await global.page.close();
});
