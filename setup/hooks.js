const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

BeforeAll(async () => {
    console.log('Launch Browser')
    global.browser = await playwright['chromium'].launch({ headless: true })
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
})

AfterAll(async () => {
    console.log('\r')
    console.log('Close Browser')
    await global.page.close()
    await global.context.close()
    await global.browser.close()
})

Before(async () => {
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
})

After(async () => {
    await global.context.close()
    await global.page.close()
    process.stdout.write(' / ')
})
