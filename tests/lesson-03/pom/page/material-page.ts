import { Page } from "@playwright/test";

export class MaterialPage {
   // thuộc tính
   page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   async navigateToMaterialPage() {
      await this.page.goto("https://material.playwrightvn.com/");
   }

   async gotoPage(page: Page, pageName: string) {
      await this.page.locator(`//a[contains(text(), '${pageName}')]`).click();
   }
}
