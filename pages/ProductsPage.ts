import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
    private readonly page: Page;
    private readonly searchInput: Locator;
    private readonly searchButton: Locator;
    private readonly searchedProductsSection: Locator;
    private addToCartButton: Locator;
    private continueShoppingButton: Locator;
    private viewCartButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.searchInput = page.locator('input[id="search_product"]');
        this.searchButton = page.locator('button[id="submit_search"]');
        this.searchedProductsSection = page.locator('text=SEARCHED PRODUCTS');
        this.addToCartButton = page.locator('text=Add to cart').first();
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
        this.viewCartButton = page.getByRole('link', { name: 'View Cart' })
    }

    async gotoProductsPage() {
        await this.page.goto('/products');
    }

    async searchProduct(productName: string) {
        await this.searchInput.fill(productName);
        await Promise.all([
            this.page.waitForResponse(resp =>
                resp.url().includes('/products') && resp.status() === 200
            ),
            this.searchButton.click(),
        ]);
    }

    async verifySearchResultsShown() {
        await expect(this.searchedProductsSection).toBeVisible();
    }

    async verifyRelevantProductsVisible(productName: string) {
        const productCards = this.page.locator('.features_items .productinfo p');
        await expect(productCards.first()).toContainText(productName, { ignoreCase: true });
    }

    async addProductToCart() {
        await this.addToCartButton.click();

    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();

    }

    async viewCart() {
        await this.viewCartButton.click();
    }
}
