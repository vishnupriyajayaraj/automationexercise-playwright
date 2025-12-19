import { Page, Locator } from '@playwright/test';

export class SignupPage {
    private readonly page: Page;

    private readonly cookiesButton: Locator;
    private readonly userNameInput: Locator;
    private readonly userEmailInput: Locator;
    private readonly signupButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.cookiesButton = this.page.locator('button:has-text("Consent")');
        this.userNameInput = this.page.locator('input[data-qa="signup-name"]');
        this.userEmailInput = this.page.locator('input[data-qa="signup-email"]');
        this.signupButton = this.page.locator('button[data-qa="signup-button"]');
    }

    async gotoSignupPage() {
        await this.page.goto('/login');
    }

    async acceptCookiesIfPresent() {

        if (await this.cookiesButton.isVisible()) {
            await this.cookiesButton.click();
        }
    }

    async enterUserName(name: string) {
        await this.userNameInput.fill(name);
    }

    async enterUserEmail(email: string) {
        await this.userEmailInput.fill(email);
    }

    async clickSignup() {
        await this.signupButton.click();
    }
}