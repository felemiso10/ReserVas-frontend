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
    RESERVAR_PLAN: 'RESERVAR_PLAN',
    RESERVAR_SERVICIO: 'RESERVAR_SERVICIO',
    CANCELAR_SERVICIO: 'CANCELAR_SERVICIO',
    ADD_HORAS:'ADD_HORAS',
    ADD_INFO_USER: 'ADD_INFO_USER',
    GENERAR_CITAS: 'GENERAR_CITAS'
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
    payload: api().post('/registerUser', {body: user})
})

const registerStore = (user) => ({
    type: TypeActionsCrud.REGISTER_USER,
    payload: api().post('/registerStore', {body: user})
})

//Preguntar por esto 
const newService = (user) => ({
    type: TypeActionsCrud.NEW_SERVICE,
    payload: api().post('/RESERVAR')
})

const reservaPlan = (datos) => ({
    type: TypeActionsCrud.NEW_SERVICE,
    payload: api(datos.token).post('/plans/'+datos.id+'/reserve/'+datos.name)
})

const reservaServicio = (datos) => ({
    type: TypeActionsCrud.NEW_SERVICE,
    payload: api(datos.token).post('/services/'+datos.id+'/reserve/'+datos.name)
})

const realizarCancelacion = (datos) => ({
    type: TypeActionsCrud.NEW_SERVICE,
    payload: api(datos.token).post('/plans/'+datos.id+'/cancel')
})

const clearInput = () => ({
    type: TypeActionsCrud.CLEAR_INPUT,
})

const addHoras = (datos) => ({
    type: TypeActionsCrud.ADD_HORAS,
    payload: api(datos.token).post('/establishTimetable/' +datos.username, {body:{inicioJornada:datos.inicioJornada, finJornada:datos.finJornada, tiempoServicio:datos.tiempoServicio}})
})

const addInfoUser = (datos) => ({
    type: TypeActionsCrud.ADD_INFO_USER,
    payload: {
        datos
    }
})

const generarCitas = (infoEmpresa, fecha, token) => ({
    type: TypeActionsCrud.GENERAR_CITAS,
    payload: api(token).post('/generateDay/' + infoEmpresa.name, {body: {
        nombre: infoEmpresa.name,
        direccion: infoEmpresa.direccion,
        precio: null,
        fecha: fecha
    }})
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
    reservaServicio,
    realizarCancelacion,
    addHoras,
    addInfoUser,
    generarCitas
}