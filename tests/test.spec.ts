import { test } from "@playwright/test";


test.describe("AUTH", () => {

    

    test("login pass", async ({ page }) => {
        await test.step("Navigate to login page", () => {
            //code
        })

        await test.step("Fill info and login", () => {
            //code
        })

    });

    test("login fail", async ({ page }) => {
        await test.step("Navigate to login page", () => {
            //code
        })

        await test.step("Fill info and login", () => {
            //code
        })

    });
})