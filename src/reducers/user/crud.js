import { Actions } from '../../actions/user'
import { fullfilled, rejected, pending } from '../utils'

const loginUserFullFilled = (state, { payload }) => {
    return {
        ...state,
        isLoggedIn: true,
        userLogged: {
            token: payload.token,
            name: state.user.name
        }
    }
}

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

const clearInput = (state) => {
    state.user.name = ""
    state.user.password = ""
    state.user.username = ""
    state.user.email = ""
    state.user.date = ""
    state.user.address = ""
    state.user.surname = ""
    return{...state}
}

const Crud = {
    [fullfilled(Actions.LOGIN_USER)]: loginUserFullFilled,
    [rejected(Actions.LOGIN_USER)]: loginUserRejected,
    [Actions.CHANGE_LOGIN_INFO]: changeUserLoginInfo,
    [fullfilled(Actions.REGISTER_USER)]: registerUserFullFilled,
    [rejected(Actions.REGISTER_USER)]: registerUserRejected,
    [fullfilled(Actions.REGISTER_STORE)]: registerStoreFullFiled,
    [rejected(Actions.REGISTER_STORE)]: registerStoreRejected,
    [Actions.CLEAR_INPUT]: clearInput
}

export default Crud