import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
import { AccountInfoPage } from '../pages/AccountInfoPage';
import { testUser } from '../test-data/userData';
import { setRegisteredUser } from '../test-data/currentUser';
import fs from 'fs';

test.describe('New user signup', () => {

    test('User can signup successfully', async ({ page }) => {
        const signupPage = new SignupPage(page);
        const accountInfoPage = new AccountInfoPage(page);

        await signupPage.gotoSignupPage();
        await signupPage.acceptCookiesIfPresent();
        await signupPage.enterUserName(testUser.userName);
        await signupPage.enterUserEmail(testUser.userEmail);
        await signupPage.clickSignup();

        await accountInfoPage.verifyPageLoaded();
        await accountInfoPage.fillAccountInformation(testUser);
        await accountInfoPage.createAccount();

        await expect(
            page.getByText('Account Created!', { exact: true })
        ).toBeVisible();

        // Store registered user for later tests
        setRegisteredUser(testUser);
        fs.writeFileSync('registeredUser.json', JSON.stringify(testUser, null, 2));

    });
});
