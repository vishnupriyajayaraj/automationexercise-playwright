import { test } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { SignupPage } from '../pages/SignupPage';
import { products } from '../test-data/products';

test.describe('Add to Cart & Cart Management', () => {

    test('User can add multiple products, update quantity and remove items', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const signupPage = new SignupPage(page);

        await productsPage.gotoProductsPage();

        await signupPage.acceptCookiesIfPresent();

        await productsPage.searchProduct(products.firstItem);
        await productsPage.verifySearchResultsShown();
        await productsPage.verifyRelevantProductsVisible(products.firstItem);

        await productsPage.addProductToCart();
        await productsPage.clickContinueShopping();

        await productsPage.searchProduct(products.secondItem);
        await productsPage.verifySearchResultsShown();
        await productsPage.verifyRelevantProductsVisible(products.secondItem);

        await productsPage.addProductToCart();
        await productsPage.viewCart();

        await cartPage.verifyProductsInCart(2);
        await cartPage.removeFirstProduct();
        await cartPage.verifyCartIsNotEmpty();
    });

});
