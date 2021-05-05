import {
    TypeActionsCrud,
    getAllBookings,
    changeWeek,
    getAllPlanes
} from './crud'

const Actions = {
    ...TypeActionsCrud
}

export {
    Actions,
    getAllBookings,
    changeWeek,
    getAllPlanes
}