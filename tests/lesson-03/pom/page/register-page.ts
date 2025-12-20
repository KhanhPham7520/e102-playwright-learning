import { Page } from "@playwright/test";
import { MaterialPage } from "./material-page";

export class RegisterPage extends MaterialPage {
   xpathHeadingRegisterPage = "//h1[text()='User Registration']";
   xpathUsername = "//input[@id='username']";
   xpathEmail = "//input[@id='email']";

   getXpathOptionGender(gender: "Male" | "Female") {
      return `//input[@id='${gender.toLowerCase()}']`;
   }

   getXpathOptionHobby(hobby: "reading" | "traveling" | "cooking") {
      return `//input[@id='${hobby}']`;
   }

   xpathSelectCountry = "//select[@id='country']";
   xpathDateOfBirth = "//input[@id='dob']";
   xpathProfilePicture = "//input[@id='profile']";
   xpathBiography = "//textarea[@id='bio']";
   xpathNewsletter = "//input[@id='newsletter']";
   xpathBtnRegister = "//button[contains(text(), 'Register')]";

   constructor(page: Page) {
      super(page);
   }

   async getInfoNewestInTable() {
      const rows = this.page.locator("//tbody/tr");
      const numberOfRows = await rows.count();

      const lastRow = `//tbody/tr[${numberOfRows}]`;

      const userInfo = {
         username: await this.page.locator(`${lastRow}/td[2]`).textContent(),
         email: await this.page.locator(`${lastRow}/td[3]`).textContent(),
         information: await this.page.locator(`${lastRow}/td[4]`).textContent(),
      };

      return userInfo;
   }
}
