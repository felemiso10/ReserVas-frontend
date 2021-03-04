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

const Crud = {
    [fullfilled(Actions.LOGIN_USER)]: loginUserFullFilled,
    [rejected(Actions.LOGIN_USER)]: loginUserRejected,
    [Actions.CHANGE_LOGIN_INFO]: changeUserLoginInfo
}

export default Crud

