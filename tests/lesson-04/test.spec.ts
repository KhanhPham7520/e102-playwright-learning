import { test } from "@playwright/test";

test("Test config", async ({ page }) => {
   await page.goto("/my-account/");
});