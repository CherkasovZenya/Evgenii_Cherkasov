import {By, WebDriver, Locator, until} from "selenium-webdriver";
import BasePage from "./BasePage";

class CartPage extends BasePage{
    private placeOrderBtn: Locator = By.xpath("//*[@id=\"page-wrapper\"]/div/div[2]/button");
    private nameInput: Locator = By.id("name");
    private countryInput: Locator = By.id("country");
    private cityInput: Locator = By.id("city");
    private cardInput: Locator = By.id("card");
    private monthInput: Locator = By.id("month");
    private yearInput: Locator = By.id("year");
    private purchaseBtn: Locator = By.xpath("//*[@id=\"orderModal\"]/div/div/div[3]/button[2]");
    private confirmationMessage: Locator = By.xpath("//*[ text() = \"Thank you for your purchase!\" ]");


    constructor(driver: WebDriver){
        super(driver);
    }

    async makeOrder(name: string, country: string, city: string, card: number, month: string, year: number) {
        await this.driver.wait(until.elementLocated(this.placeOrderBtn), 2000);
        await this.driver.findElement(this.placeOrderBtn).click();

        await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.nameInput)), 2000);
        await this.driver.findElement(this.nameInput).sendKeys(name);
        await this.driver.findElement(this.countryInput).sendKeys(country);
        await this.driver.findElement(this.cityInput).sendKeys(city);
        await this.driver.findElement(this.cardInput).sendKeys(card);
        await this.driver.findElement(this.monthInput).sendKeys(month);
        await this.driver.findElement(this.yearInput).sendKeys(year);

        await this.driver.findElement(this.purchaseBtn).click();
    }

    async checkOrderConfirmation() {
        try {
            await this.driver.wait(until.elementLocated(this.confirmationMessage), 2000);
            return true;
        } catch (e){
            return false;
        }
    }



}

export default CartPage;