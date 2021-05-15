import {
    TypeActionsCrud,
    getAllBookings,
    changeWeek,
    getAllPlanes,
    getClientes,
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
    getClientes,
    getCategories,
    citasVacias,
    getCitasEmpresa,
    getMyPlanes,
    getPlanById
}