import {host, routes} from "./../const"

export const signIn = async (page, {email = '', password = ''}) => {
    await page.goto(`${host}${routes.login}`);

    await page.locator('[placeholder="Введите email..."]').fill(email);
    await page.locator('[placeholder="Введите пароль..."]').fill(password);
    await page.getByRole('button').click();
}