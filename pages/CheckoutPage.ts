import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly nameOnCardInput: Locator;
    readonly cardNumberInput: Locator;
    readonly cvcInput: Locator;
    readonly expiryMonthInput: Locator;
    readonly expiryYearInput: Locator;
    readonly payButton: Locator;
    readonly orderPlacedText: Locator;
    readonly checkoutButton: Locator;
    readonly placeOrderButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameOnCardInput = page.locator('input[name="name_on_card"]');
        this.cardNumberInput = page.locator('input[name="card_number"]');
        this.cvcInput = page.locator('input[name="cvc"]');
        this.expiryMonthInput = page.locator('input[name="expiry_month"]');
        this.expiryYearInput = page.locator('input[name="expiry_year"]');
        this.payButton = page.locator('button:has-text("Pay and Confirm Order")');
        this.orderPlacedText = page.locator('text=Order Placed!');
        this.checkoutButton = page.locator('a.check_out');
        this.placeOrderButton = page.getByRole('link', { name: 'Place Order' });

    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async clickPlaceOrder() {
        await this.placeOrderButton.click();
    }

    async fillCardDetails(name: string, cardNumber: string, cvc: string, month: string, year: string) {
        await this.nameOnCardInput.fill(name);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvcInput.fill(cvc);
        await this.expiryMonthInput.fill(month);
        await this.expiryYearInput.fill(year);
    }

    async submitOrder() {
        await this.payButton.click();
    }

    async verifyOrderSuccess() {
        await expect(this.orderPlacedText).toBeVisible();
    }
}
