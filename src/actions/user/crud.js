import Api from '../../common/utilities/api'

const baseUrl = 'http://localhost:3002' //Aquí irá la URL del backend

const api = token =>
    new Api({
        baseUrl: baseUrl,
        defaultOptions: { headers: { Authorization: `Bearer ${token}` } }
    })

const TypeActionsCrud = {
    LOGIN_USER: 'LOGIN_USER',
    CHANGE_LOGIN_INFO: 'CHANGE_LOGIN_INFO'
}

const loginUser = () => ({
    type: TypeActionsCrud.LOGIN_USER,
    payload: api().get('/login')
})

const changeUserLoginInfo = (id, value) => ({
    type: TypeActionsCrud.CHANGE_LOGIN_INFO,
    payload: {
        id,
        value
    }
})

export {
    TypeActionsCrud,
    loginUser,
    changeUserLoginInfo
}
