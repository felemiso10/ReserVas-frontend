import { Actions } from '../../actions/user'
import { fullfilled, rejected, pending } from '../utils'

const loginUserFullFilled = (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    token: payload.token
    
})

const loginUserRejected = state => ({
    ...state,
    error: 'Error al iniciar sesión'
})

const changeUserLoginInfo = (state, { payload }) => {
    state.user[payload.id]= payload.value
    //console.log(payload)
    return {...state}
}

const registerUserFullFilled = (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    token: payload.token
})

const registerUserRejected = state => ({
    ...state,
    error: 'Error al registrar el usuario'
})

const registerStoreFullFiled = (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    token: payload.token
})

const registerStoreRejected = state => ({
    ...state,
    error: 'Error al registrar la empresa'
})

const changeServiceInfo = (state, { payload }) => {
    state.service[payload.id]= payload.value
    //console.log(payload)
    return {...state}
}

const newServiceFullFilled = (state, { payload }) => ({
    ...state  
})

const newServiceRejected = state => ({
    ...state,
    error: 'Error al crear la cita'
})

const Crud = {
    [fullfilled(Actions.LOGIN_USER)]: loginUserFullFilled,
    [rejected(Actions.LOGIN_USER)]: loginUserRejected,
    [Actions.CHANGE_LOGIN_INFO]: changeUserLoginInfo,
    [fullfilled(Actions.REGISTER_USER)]: registerUserFullFilled,
    [rejected(Actions.REGISTER_USER)]: registerUserRejected,
    [fullfilled(Actions.REGISTER_STORE)]: registerStoreFullFiled,
    [rejected(Actions.REGISTER_STORE)]: registerStoreRejected,
    [Actions.CHANGE_SERVICE_INFO]: changeServiceInfo,  
    [fullfilled(Actions.NEW_SERVICE)]: newServiceFullFilled,
    [rejected(Actions.NEW_SERVICE)]: newServiceRejected

}

export default Crud