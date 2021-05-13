import Api from '../../common/utilities/api'

const baseUrl = 'http://localhost:8080' //Aquí irá la URL del backend

const api = token =>
    new Api(baseUrl, token)

const TypeActionsCrud = {
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    CHANGE_LOGIN_INFO: 'CHANGE_LOGIN_INFO',
    REGISTER_USER: 'REGISTER_USER',
    REGISTER_STORE: 'REGISTER_STORE',
    CHANGE_SERVICE_INFO: 'CHANGE_SERVICE_INFO',
    NEW_SERVICE: 'NEW_SERVICE',
    CLEAR_INPUT: 'CLEAR_INPUT',
    RESERVAR_PLAN: 'RESERVAR_PLAN'
}


const loginUser = (user) => ({
    type: TypeActionsCrud.LOGIN_USER,
    payload: api().post('/login', {body: {nombreUser: user.name, password: user.password}})
})

const logoutUser = () => ({
    type: TypeActionsCrud.LOGOUT_USER
})

const changeUserLoginInfo = (id, value) => ({
    type: TypeActionsCrud.CHANGE_LOGIN_INFO,
    payload: {
        id,
        value
    }
})

const changeServiceInfo = (id, value) => ({
    type: TypeActionsCrud.CHANGE_SERVICE_INFO,
    payload: {
        id,
        value
    }
})

const registerUser = (user) => ({
    type: TypeActionsCrud.REGISTER_USER,
    payload: api().post('/register', {body: user})
})

const registerStore = (user) => ({
    type: TypeActionsCrud.REGISTER_USER,
    payload: api().post('/register', {body: user})
})

//Preguntar por esto 
const newService = (user) => ({
    type: TypeActionsCrud.NEW_SERVICE,
    payload: api().post('/RESRVAR')
})

const reservaPlan = (datos) => ({
    type: TypeActionsCrud.NEW_SERVICE,
    payload: api(datos.token).post('/plans/'+datos.id+'/reserve/'+datos.name)
})

const clearInput = () => ({
    type: TypeActionsCrud.CLEAR_INPUT,
})

export {
    TypeActionsCrud,
    loginUser,
    logoutUser,
    changeUserLoginInfo,
    registerUser,
    registerStore,
    changeServiceInfo,
    newService,
    reservaPlan,
    clearInput,
    
}