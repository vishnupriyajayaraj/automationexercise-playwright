import { Page, Locator, expect } from '@playwright/test';
import { UserData } from '../test-data/userData';

export class AccountInfoPage {
    private readonly page: Page;

    private readonly titleMrRadio: Locator;
    private readonly titleMrsRadio: Locator;
    private readonly passwordInput: Locator;
    private readonly daysSelect: Locator;
    private readonly monthsSelect: Locator;
    private readonly yearsSelect: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly addressInput: Locator;
    private readonly stateInput: Locator;
    private readonly cityInput: Locator;
    private readonly zipcodeInput: Locator;
    private readonly mobileNumberInput: Locator;
    private readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.titleMrRadio = page.locator('#id_gender1');
        this.titleMrsRadio = page.locator('#id_gender2');
        this.passwordInput = page.locator('input[data-qa="password"]');

        this.daysSelect = page.locator('select[data-qa="days"]');
        this.monthsSelect = page.locator('select[data-qa="months"]');
        this.yearsSelect = page.locator('select[data-qa="years"]');

        this.firstNameInput = page.locator('input[data-qa="first_name"]');
        this.lastNameInput = page.locator('input[data-qa="last_name"]');
        this.addressInput = page.locator('input[data-qa="address"]');
        this.stateInput = page.locator('input[data-qa="state"]');
        this.cityInput = page.locator('input[data-qa="city"]');
        this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');

        this.createAccountButton = page.locator('button[data-qa="create-account"]');
    }

    async verifyPageLoaded() {
        await expect(
            this.page.getByText('Enter Account Information', { exact: true })
        ).toBeVisible();
    }

    async fillAccountInformation(user: UserData) {
        if (user.title === 'Mr') {
            await this.titleMrRadio.check();
        } else {
            await this.titleMrsRadio.check();
        }

        await this.passwordInput.fill(user.password);

        await this.daysSelect.selectOption(user.day);
        await this.monthsSelect.selectOption(user.month);
        await this.yearsSelect.selectOption(user.year);

        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.addressInput.fill(user.address);
        await this.stateInput.fill(user.state);
        await this.cityInput.fill(user.city);
        await this.zipcodeInput.fill(user.zipcode);
        await this.mobileNumberInput.fill(user.mobileNumber);
    }

    async createAccount() {
        await this.createAccountButton.click();
    }
}
