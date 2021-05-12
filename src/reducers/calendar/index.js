import Crud from './crud'

const initialState = {
    selectedDate: {
        lunes: {
            fecha: '',
            bookings: []
        },
        martes: {
            fecha: '',
            bookings: []
        },
        miercoles: {
            fecha: '',
            bookings: []
        },
        jueves: {
            fecha: '',
            bookings: []
        },
        viernes: {
            fecha: '',
            bookings: []
        },
        sabado: {
            fecha: '',
            bookings: []
        },
        domingo: {
            fecha: '',
            bookings: []
        }
    },
    allBookings: [],
    allPlanes:[]
}

const Managers = {
    ...Crud
}

export default (state = initialState, action = { type: '' }) => {
    const finded = Managers[action.type]
    return finded ? finded(state, action) : { ...state }
}