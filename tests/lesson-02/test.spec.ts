import { test } from "@playwright/test";

//https://material.playwrightvn.com/
//https://material.playwrightvn.com/01-xpath-register-page.html
test.describe("Test 01 - Input value", async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/");
    })


    test("Test 01", async ({ page }) => {
        await test.step("Navigate to user registration", async () => {
            await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html")
        })

        await test.step("Fill info", async () => {
            await page.locator("//input[@id='username']").fill("khanhpham"); // input

            //      await page.locator("//input[@id='username']").clear();
        })

        await test.step("Radio, checkbox", async () => {
            await page.locator("//input[@id='female']").uncheck();
            await page.locator("//input[@id='reading']").check();
            await page.locator("//input[@id='reading']").uncheck();

            //       await page.locator("//input[@id='male']").setChecked(true);
        })
    })

    test("Test 02 - Click action", async ({ page }) => {
        await test.step("Navigate to mouse test", async () => {
            await page.goto("https://material.playwrightvn.com/018-mouse.html");
        });

        await test.step("Test click", async () => {
            await page.locator("//div[@id='clickArea']").dblclick(); // double click
        });
    })

    test("Test 03 - Drag and Drop", async ({ page }) => {
        await test.step("Navigate to drag and drop page", async () => {
            await page.goto("https://material.playwrightvn.com/05-xpath-drag-and-drop.html");
        })

        await test.step("Drag and drop", async () => {
            const sourceElement = "//div[@id='piece-1']";
            const targetElement = "//div[@data-piece='1']";

            //drag and drop
            await page.dragAndDrop(sourceElement, targetElement);

            //mouse
            // await page.locator(sourceElement).hover();
            // await page.mouse.down();
            // await page.locator(targetElement).hover();
            // await page.mouse.up();
        })

    })

    await test("Test 04 - Upload file", async ({ page }) => {

        await test.step("Navigate to registration page", async () => {
            await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        })

        await test.step("Input file", async () => {
            await page.locator("//input[@id='profile']").scrollIntoViewIfNeeded();
            await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-02/data.txt");
        });
    })

    test("Test 05 - Iframe interaction", async ({ page }) => {

        await test.step("Navigate to registration page", async () => {
            await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        })

        await test.step("Switch to iframe", async () => {
            const iframeLocator = await page.getByTitle("Example Iframe");
            await iframeLocator.frameLocator("//h1[text()='Example Domain']");
        })
    });
})
