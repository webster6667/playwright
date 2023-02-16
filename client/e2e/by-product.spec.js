const { test, expect } = require('@playwright/test');
import {host, routes, users} from "./const"
import { signIn } from "./actions"


test.describe('product', () => {

  test('by', async ({ page }) => {
    await signIn(page, users.signed)
    await expect(page.locator('text=Выход').first()).toBeVisible();

    await page.goto(`${host}${routes.product}`);
    await expect(page.locator('text=Выход').first()).toBeVisible();

    await page.locator('text=Купить').waitFor()
    await page.locator('text=Купить').click()

    await expect(page.locator('text=Оплата прошла успешно')).toBeVisible({timeout: 1000});
  });
})
