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

const Crud = {
    [fullfilled(Actions.LOGIN_USER)]: loginUserFullFilled,
    [rejected(Actions.LOGIN_USER)]: loginUserRejected,
    [Actions.CHANGE_LOGIN_INFO]: changeUserLoginInfo,
    [fullfilled(Actions.REGISTER_USER)]: registerUserFullFilled,
    [rejected(Actions.REGISTER_USER)]: registerUserRejected,
}

export default Crud