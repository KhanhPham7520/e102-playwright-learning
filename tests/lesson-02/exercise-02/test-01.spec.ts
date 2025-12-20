import { test, expect } from "@playwright/test";

test.describe("Exercise 01", () => {
   test("Test 02 - Product page", async ({ page }) => {
      await page.goto("https://example.com");

      await expect(page).toHaveTitle(/Example/);
   });
});
