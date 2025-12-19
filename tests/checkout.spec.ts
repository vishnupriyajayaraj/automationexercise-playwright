import { test } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { testUser } from '../test-data/userData';
import { CartPage } from '../pages/CartPage';
import { SignupPage } from '../pages/SignupPage';
import { LoginPage } from '../pages/LoginPage';
import { getRegisteredUser } from '../test-data/currentUser';
import { products } from '../test-data/products';
import { cardDetails } from '../test-data/cardDetails';

test.describe('Login to checkout _ E2E workflow', () => {

    test('User can login, add items, and checkout', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const productsPage = new ProductsPage(page);
        const checkoutPage = new CheckoutPage(page);
        const cartPage = new CartPage(page);
        const user = getRegisteredUser(); // get email & password stored after signup

        //User login
        await loginPage.gotoLoginPage();
        await signupPage.acceptCookiesIfPresent();

        await loginPage.enterEmail(user.userEmail);
        await loginPage.enterPassword(user.password);
        await loginPage.clickLogin();
        await loginPage.verifyLoginSuccess(user.userName);

        //Adding products to cart
        await productsPage.gotoProductsPage();
        await productsPage.searchProduct(products.firstItem);
        await productsPage.verifySearchResultsShown();
        await productsPage.verifyRelevantProductsVisible(products.firstItem);

        await productsPage.addProductToCart();
        await productsPage.viewCart();
        await cartPage.verifyProductsInCart(1);

        // Checkout
        await checkoutPage.clickCheckout();
        await checkoutPage.clickPlaceOrder();

        await checkoutPage.fillCardDetails(
            testUser.userName,
            cardDetails.cardNumber,
            cardDetails.cvc,
            cardDetails.expirationMonth,
            cardDetails.expirationYear
        );
        await checkoutPage.submitOrder();
        await checkoutPage.verifyOrderSuccess();
    });
});
