import { test, expect } from "@playwright/test";

test.describe("SUITE 2 : Data driven in a single test", async () => {
   test("Verify categories display", async ({ page }) => {
      await test.step("1. Go to ecommerce page", async () => {
         await page.goto("https://e-commerce.betterbytesvn.com/");
         await expect(page.getByRole("link", { name: "E-commerce site for automation testing" })).toBeVisible();
      });

      await test.step("2. Click open category, verify categories is visible", async () => {
         await page.getByRole("button", { name: "ALL CATEGORIES" }).click();
         const categories = ["API", "Playwright", "Uncategorized"];
         for (let i = 0; i < categories.length; i++) {
            await expect(
               page.getByRole("banner").getByRole("listitem").filter({ hasText: categories[i] })
            ).toBeVisible();
         }
      });
   });

   test.describe("SUITE 3 : Data driven with variable declaration", async () => {
      const categories = ["API", "Playwright", "Uncategorized"];

      for (let i = 0; i < categories.length; i++) {
         test(`Verify category ${categories[i]} display`, async ({ page }) => {
            //        page.locator("//input").focus();

            await test.step("1. Go to ecommerce page", async () => {
               await page.goto("https://e-commerce.betterbytesvn.com/");
               await expect(page.getByRole("link", { name: "E-commerce site for automation testing" })).toBeVisible();
            });

            await test.step("2. Click open category, verify categories is visible", async () => {
               await page.getByRole("button", { name: "ALL CATEGORIES" }).click();
               await expect(
                  page.getByRole("banner").getByRole("listitem").filter({ hasText: categories[i] })
               ).toBeVisible();
            });
         });
      }
   });
});
