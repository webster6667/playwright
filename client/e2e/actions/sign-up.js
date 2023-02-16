import {host, routes} from "./../const"

export const signUp = async (page, {email = '', password = ''}) => {
    await page.goto(`${host}${routes.registration}`);

    await page.locator('[placeholder="Введите email..."]').fill(email);
    await page.locator('[placeholder="Введите пароль..."]').fill(password);
    await page.getByRole('button').click();
}