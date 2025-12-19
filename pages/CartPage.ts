import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    private page: Page;
    private cartRows: Locator;
    private removeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartRows = page.locator('tr[id^="product-"]');
        this.removeButton = page.locator('.cart_quantity_delete').first();
    }

    async waitForCartPage() {
        await this.page.waitForURL('**/view_cart');
    }

    async verifyProductsInCart(expectedCount: number) {
        await expect(this.cartRows).toHaveCount(expectedCount);
    }

    async removeFirstProduct() {
        await this.removeButton.click();
    }

    async verifyCartIsNotEmpty() {
        await expect(this.cartRows.first()).toBeVisible();
    }
}
