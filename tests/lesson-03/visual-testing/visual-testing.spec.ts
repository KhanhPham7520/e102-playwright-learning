import { expect, test } from "@playwright/test";

test.describe("SUITE 1: Visual testing", async () => {
   test("Verify capture screen - only view port", async ({ page }) => {
      await test.step("Step 1: Open e-commerce page", async () => {
         await page.goto("https://e-commerce.betterbytesvn.com/");
         await expect(page.getByRole("link", { name: "E-commerce site for automation testing" })).toBeVisible();
      });

      await test.step("Step 2: Verify home page display", async () => {
         await expect(page).toHaveScreenshot("home.png");
      });
   });
});
