import {
    TypeActionsCrud,
    loginUser,
    changeUserLoginInfo,
    registerUser,
    registerStore,
    clearInput
} from './crud'


const Actions = {
    ...TypeActionsCrud
}

export {
    Actions,
    loginUser,
    changeUserLoginInfo,
    registerUser,
    registerStore,
    clearInput
}