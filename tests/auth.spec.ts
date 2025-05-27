import { test as setup, expect } from "@playwright/test";

setup("Create customer 01 auth", async ({page, context}) => {
    const email = "customer@practicesoftwaretesting.com";
    const password = "welcome01";
    const customer01AuthFile = ".auth/customer01.json";

    await page.goto('https://practicesoftwaretesting.com/auth/login');

    await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
    await page.locator('[data-test="password"]').fill('welcome01');
    await page.locator('[data-test="login-submit"]').click();

    await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
    await context.storageState({ path : customer01AuthFile });
})