import { expect } from 'chai';
import 'mocha';
import { Builder, WebDriver } from 'selenium-webdriver';

import LoginPage from "../pageObjects/LoginPage";
import MainPage from "../pageObjects/MainPage";
import ItemPage from "../pageObjects/ItemPage";
import CartPage from "../pageObjects/CartPage";

describe('Order laptop', () => {
    let driver: WebDriver;
    let loginPage: LoginPage;
    let mainPage: MainPage;
    let itemPage: ItemPage;
    let cartPage: CartPage;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        loginPage = await new LoginPage(driver);
        mainPage = await new MainPage(driver);
        itemPage = await new ItemPage(driver);
        cartPage = await new CartPage(driver);
    });

    it('should login', async () => {
        const url: string = "https://www.demoblaze.com/";
        await loginPage.openURL(url);
        await loginPage.login("zenya", "password123");
        expect(await loginPage.checkLogin());
    }).timeout(10000);

    it('should open item page', async () => {
        const url: string = "https://www.demoblaze.com/";
        await mainPage.openLaptopItem();
        expect(await mainPage.getURL()).to.equal("https://www.demoblaze.com/prod.html?idp_=12");
    }).timeout(10000);

    it('should order item and open cart page', async () => {
        const url: string = "https://www.demoblaze.com/";
        await itemPage.orderItem();
        await itemPage.goToCart();
        expect(await itemPage.getURL()).to.equal("https://www.demoblaze.com/cart.html");
    }).timeout(10000);

    it('should confirm order', async () => {
        const url: string = "https://www.demoblaze.com/";
        await cartPage.makeOrder("Zenya", "Ukraine", "Kyiv", 123456789, "May", 2022);
        expect(await cartPage.checkOrderConfirmation()).to.equal(true);
    }).timeout(10000);


    after(async () => {
        await driver.quit();
    });
});