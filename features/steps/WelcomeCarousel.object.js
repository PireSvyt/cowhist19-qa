const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { paths } = require("../paths.js")

setDefaultTimeout(3 * 1000)

// Automated generation of functions from data-testid
class WelcomeCarousel {

	// Component carousel
	async assertCarouselIsVisible() {
		const element = await global.page.getByTestId("component-carousel")
		await expect(element).toBeVisible()
	}
	async assertCarouselIsHidden() {
		const element = await global.page.getByTestId("component-carousel")
		await expect(element).toBeHidden()
	}

	// Box page 1 visibility
	async assertPage1IsVisible() {
		const element = await global.page.locator("data-testid=component-carousel-box-page 1")
		await expect(element).toBeVisible()
	}
	async assertPage1IsHidden() {
		const element = await global.page.locator("data-testid=component-carousel-box-page 1")
		await expect(element).toBeHidden()
	}

	// Box page 2 visibility
	async assertPage2IsVisible() {
		const element = await global.page.locator("data-testid=component-carousel-box-page 2")
		await expect(element).toBeVisible()
	}
	async assertPage2IsHidden() {
		const element = await global.page.locator("data-testid=component-carousel-box-page 2")
		await expect(element).toBeHidden()
	}

	// Box page 3 visibility
	async assertPage3IsVisible() {
		const element = await global.page.locator("data-testid=component-carousel-box-page 3")
		await expect(element).toBeVisible()
	}
	async assertPage3IsHidden() {
		const element = await global.page.locator("data-testid=component-carousel-box-page 3")
		await expect(element).toBeHidden()
	}
}


module.exports = { WelcomeCarousel }