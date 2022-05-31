import {By, WebDriver, Locator, until} from "selenium-webdriver";
import BasePage from "./BasePage";
import {expect} from "chai";

class MainPage extends BasePage{
    private laptopsCatalog: Locator = By.xpath("/html/body/div[5]/div/div[1]/div/a[3]");
    private laptopItem: Locator = By.xpath("//*[ text() = \"Dell i7 8gb\" ]");


    constructor(driver: WebDriver){
        super(driver);
    }

    async openLaptopItem(){
        try {
            await this.driver.findElement(this.laptopsCatalog).click();
        } catch (e) {
            await this.driver.findElement(this.laptopsCatalog).click();
        }

        await this.driver.wait(until.elementLocated(this.laptopItem), 2000);
        await this.driver.findElement(this.laptopItem).click();
    }

}

export default MainPage;