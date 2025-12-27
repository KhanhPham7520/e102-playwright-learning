import { test, expect } from "@playwright/test";
import { MaterialPage } from "./material-page";
import { RegisterPage } from "./register-page";

test.describe("Test with POM", () => {
   let materialPage: MaterialPage;
   let registerPage: RegisterPage;

   let date: string = "2000-02-29";
   let username: string = "Playwright Viet Nam";
   let email: string = "playwrightvietnam@gmail.com";
   let description: string = "Đây là lớp Playwright K11";
   let hobby: "reading" | "traveling" | "cooking" = "cooking";
   let gender: "Male" | "Female" = "Female";
   let filePath: string = "tests/lesson-02/exercise/lesson-05.txt";
   let country: "usa" | "canada" | "uk" | "australia" = "usa";

   test.beforeEach(async ({ page }) => {
      const materialPage = new MaterialPage(page);
      await materialPage.navigateToMaterialPage();
   });

   test("Test 01 - Register page", async ({ page }) => {
      const registerPage = new RegisterPage(page);

      await test.step("Click on Register Page", async () => {
         // await materialPage.gotoPage("Register Page");
         await expect(page.locator("")).toBeVisible();
      });

      await test.step("Fill information to all fields", async () => {
         await page.locator("").fill(username);
         await page.locator("").fill(email);
         // await page.locator(getXpathOptionGender(gender)).check();
         // await page.locator(getXpathOptionHobby(hobby)).check();
      });
   });
});
