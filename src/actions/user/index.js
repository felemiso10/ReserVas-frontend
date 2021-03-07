import {
    TypeActionsCrud,
    loginUser,
    changeUserLoginInfo,
    registerUser
} from './crud'


const Actions = {
    ...TypeActionsCrud
}

export {
    Actions,
    loginUser,
    changeUserLoginInfo,
    registerUser
}