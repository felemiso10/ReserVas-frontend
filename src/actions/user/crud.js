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
    REGISTER_USER: 'REGISTER_USER',
    REGISTER_STORE: 'REGISTER_STORE',
    CHANGE_SERVICE_INFO: 'CHANGE_SERVICE_INFO',
    NEW_SERVICE: 'NEW_SERVICE',
    CLEAR_INPUT: 'CLEAR_INPUT',
    ADD_HORAS:'ADD_HORAS'
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
    payload: api().post('/login', {body: user})
})

const clearInput = () => ({
    type: TypeActionsCrud.CLEAR_INPUT,
})

const addHoras = (user,name) => ({
    type: TypeActionsCrud.ADD_HORAS,
    payload: api().post('/establishTimeTable/' +name, {body:user})
})


export {
    TypeActionsCrud,
    loginUser,
    changeUserLoginInfo,
    registerUser,
    registerStore,
    changeServiceInfo,
    newService,
    clearInput,
    addHoras
}