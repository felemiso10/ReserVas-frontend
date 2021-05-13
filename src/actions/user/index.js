import {
    TypeActionsCrud,
    loginUser,
    logoutUser,
    changeUserLoginInfo,
    registerUser,
    registerStore,
    changeServiceInfo,
    newService,
    clearInput,
    reservaPlan
} from './crud'


const Actions = {
    ...TypeActionsCrud
}

export {
    Actions,
    loginUser,
    logoutUser,
    changeUserLoginInfo,
    registerUser,
    registerStore,
    changeServiceInfo,
    newService,
    clearInput,
    reservaPlan
}