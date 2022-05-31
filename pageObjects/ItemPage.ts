import {By, WebDriver, Locator, until} from "selenium-webdriver";
import BasePage from "./BasePage";

class ItemPage extends BasePage{
    private orderBtn: Locator = By.xpath("//*[@id=\"tbodyid\"]/div[2]/div/a");
    private cart: Locator = By.xpath("//*[@id=\"cartur\"]");


    constructor(driver: WebDriver){
        super(driver);
    }

    async orderItem(){
        await this.driver.wait(until.elementLocated(this.orderBtn), 2000);
        await this.driver.findElement(this.orderBtn).click();
        await this.driver.wait(until.alertIsPresent(), 2000);
        await this.driver.switchTo().alert().accept();
    }

    async goToCart(){
        await this.driver.findElement(this.cart).click();
    }

}

export default ItemPage;