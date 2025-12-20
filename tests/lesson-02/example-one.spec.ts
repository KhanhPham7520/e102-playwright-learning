import { test, expect } from "@playwright/test";

test("Login with valid account", async ({ page }) => {
   await test.step("1.Navigate to valid username or email address", async () => {
      expect(page).toHaveTitle(/Playwright practice site/);
   });

   await test.step("2. Login with valid username or email address", async () => {
      await page.locator("//input[@id='user_login']").fill("juli");
      await page.locator("//input[@id='user_pass']").fill("rPxq&xYdRp6C@ckom!2iK6^Y");
   });

   await test.step("3. Click into Login button", async () => {
      await page.locator("//input[@id='wp-submit']").click();
   });

   await test.step("4. Expect title Dashboard to be displayed correctly", async () => {
      let dashboardTitle = await page.getByText("Dashboard").innerText;
      expect(dashboardTitle, "Dashboard").toBeTruthy();
   });
});
