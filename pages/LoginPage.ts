import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
    }

    async gotoLoginPage() {
        await this.page.goto('/login');
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async verifyLoginSuccess(username: string) {
        const loggedInText = this.page.locator(`text=Logged in as ${username}`);
        await expect(loggedInText).toBeVisible();
    }

    async verifyInvalidLoginError() {
        await expect(
            this.page.locator('text=Your email or password is incorrect!')
        ).toBeVisible();
    }
}
