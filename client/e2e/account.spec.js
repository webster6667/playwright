const { test, expect } = require('@playwright/test');
import {users} from "./const"
import { signIn, signUp } from "./actions"


test.describe('sign-in', () => {

  test('validation', async ({ page }) => {
    await signIn(page, users.notSigned)

    await expect(page.locator('text=Выход').first()).toBeHidden();
  });

  test('authorization', async ({ page }) => {
    await signIn(page, users.signed)

    await expect(page.locator('text=Выход').first()).toBeVisible();
  });

})

test.describe('sign-up', () => {

  test('signing', async ({ page }) => {
    const signingUser = users.toSignUp
    await signUp(page, signingUser)
    await signIn(page, signingUser)

    await expect(page.locator('text=Выход').first()).toBeVisible();
  });

})