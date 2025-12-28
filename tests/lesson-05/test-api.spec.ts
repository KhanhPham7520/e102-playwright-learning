import { test } from "@playwright/test";

test.describe("Lesson 05 - Example - API test", () => {
   test("Get list of articles", async ({ request }) => {
      const url = "https://conduit-api.bondaracademy.com/api/user";
      const response = await request.get(url);
      console.log(response);
      console.log(response.status());
   });
});
