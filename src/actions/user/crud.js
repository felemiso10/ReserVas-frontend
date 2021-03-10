import Api from '../../common/utilities/api'

const baseUrl = 'http://localhost:3002' //Aquí irá la URL del backend

const api = token =>
    new Api({
        baseUrl: baseUrl,
        defaultOptions: { headers: { Authorization: `Bearer ${token}` } }
    })

const TypeActionsCrud = {
    LOGIN_USER: 'LOGIN_USER',
    CHANGE_LOGIN_INFO: 'CHANGE_LOGIN_INFO',
    REGISTER_USER: 'REGISTER_USER'
}

const loginUser = (user) => ({
    type: TypeActionsCrud.LOGIN_USER,
    payload: api().post('/login', {body: user})
})

const changeUserLoginInfo = (id, value) => ({
    type: TypeActionsCrud.CHANGE_LOGIN_INFO,
    payload: {
        id,
        value
    }
})

const registerUser = () => ({
    type: TypeActionsCrud.REGISTER_USER,
    payload: api().get('/register')
})

export {
    TypeActionsCrud,
    loginUser,
    changeUserLoginInfo,
    registerUser
}