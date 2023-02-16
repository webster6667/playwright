export const host = 'http://localhost:3000'

export const routes = {
    login: '/login',
    registration: '/registration',
    product: '/product'
}

export const users = {
    signed: {
        email: 'webster1@mail.ru',
        password: '123456'
    },
    notSigned: {
        email: 'webster10@mail.ru',
        password: '123456'
    },
    toSignUp: {
        email: `webster${Date.now()}@mail.ru`,
        password: '123456'
    },
}