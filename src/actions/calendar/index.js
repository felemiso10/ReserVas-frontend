import {
    TypeActionsCrud,
    getAllBookings,
    changeWeek,
    getAllPlanes,
    getClientes
} from './crud'

const Actions = {
    ...TypeActionsCrud
}

export {
    Actions,
    getAllBookings,
    changeWeek,
    getAllPlanes,
    getClientes
}