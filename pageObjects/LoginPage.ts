import {By, WebDriver, Locator, until} from "selenium-webdriver";
import BasePage from "./BasePage";

class LoginPage extends BasePage{
    private usernameInput: Locator = By.id("loginusername");
    private passwordInput: Locator = By.id("loginpassword");
    private loginBtn: Locator = By.id("login2");
    private submitBtn: Locator = By.xpath("//*[@id=\"logInModal\"]/div/div/div[3]/button[2]");
    private logoutBtn: Locator =  By.id("logout2");

    constructor(driver: WebDriver){
        super(driver);
    }

    async login(username: string, password: string){
        await this.driver.findElement(this.loginBtn).click();
        await this.driver.wait(until.elementLocated(this.usernameInput), 2000);
        await this.driver.findElement(this.usernameInput).sendKeys(username);
        await this.driver.findElement(this.passwordInput).sendKeys(password);
        await this.driver.findElement(this.submitBtn).click();
    }

    async checkLogin(): Promise<boolean>{
        return await this.driver.findElement(this.logoutBtn).isDisplayed();
    }
}

export default LoginPage;