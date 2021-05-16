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
    realizarCancelacion,
    addHoras
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
    realizarCancelacion,
    addHoras
}