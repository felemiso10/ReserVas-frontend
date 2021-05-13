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
    reservaPlan,
    reservaServicio,
    realizarCancelacion
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
    reservaPlan,
    reservaServicio,
    realizarCancelacion
}