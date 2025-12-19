import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { getRegisteredUser } from '../test-data/currentUser';
import { testUser } from '../test-data/userData';

test.describe('Authentication Login', () => {
    let loginPage: LoginPage;
    let signupPage: SignupPage;
    let user: ReturnType<typeof getRegisteredUser>;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        signupPage = new SignupPage(page);
        user = getRegisteredUser();

        await loginPage.gotoLoginPage();
        await signupPage.acceptCookiesIfPresent();
    });

    test('User attempts to login with invalid credentials', async () => {
        await loginPage.enterEmail(user.userEmail);
        await loginPage.enterPassword(testUser.invalidPassword);
        await loginPage.clickLogin();

        await loginPage.verifyInvalidLoginError();
    });

    test('User can login successfully', async () => {
        await loginPage.enterEmail(user.userEmail);
        await loginPage.enterPassword(user.password);
        await loginPage.clickLogin();

        await loginPage.verifyLoginSuccess(user.userName);
    });
});
