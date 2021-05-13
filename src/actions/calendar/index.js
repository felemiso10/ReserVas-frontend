import {
    TypeActionsCrud,
    getAllBookings,
    changeWeek,
    getAllPlanes,
    getCategories,
    citasVacias,
    getCitasEmpresa,
    getMyPlanes,
    getPlanById
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
    getMyPlanes,
    getPlanById
}