import { Page } from "@playwright/test";

class BasePage {
   //thuộc tính
   page: Page;
   xpathDashboard = "#dashboard";

   // hàm khởi tạo
   constructor(page: Page) {
      this.page = page;
   }

   getXpathDashboard() {
      return this.xpathDashboard;
   }

   // method
   async navigateToUrl(url: string) {
      await this.page.goto(url);
   }
}
