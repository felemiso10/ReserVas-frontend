import {
    TypeActionsCrud,
    loginUser,
    changeUserLoginInfo,
    registerUser,
    registerStore,
    changeServiceInfo,
    newService,
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
    changeServiceInfo,
    newService,
    clearInput
}