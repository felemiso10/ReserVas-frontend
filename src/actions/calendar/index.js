import {
    TypeActionsCrud,
    getAllBookings,
    changeWeek,
    getAllPlanes,
    getCategories,
    citasVacias,
    getCitasEmpresa,
    getMyPlanes
} from './crud'

const Actions = {
    ...TypeActionsCrud
}

export {
    Actions,
    getAllBookings,
    changeWeek,
    getAllPlanes,
    getCategories,
    citasVacias,
    getCitasEmpresa,
    getMyPlanes
}