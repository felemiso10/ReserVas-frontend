import Api from '../../common/utilities/api'

const baseUrl = 'http://localhost:3002' //Aquí irá la URL del backend

const api = token =>
    new Api({
        baseUrl: baseUrl,
        defaultOptions: { headers: { Authorization: `Bearer ${token}` } }
    })

const TypeActionsCrud = {
    GET_ALL_BOOKINGS: 'GET_ALL_BOOKINGS',
    CHANGE_WEEK: 'CHANGE_WEEK'
}

const getAllBookings = () => ({
    type: TypeActionsCrud.GET_ALL_BOOKINGS,
    payload: api().get('/reservasUsuario')
})

const changeWeek = (fechaLunes) => ({
    type: TypeActionsCrud.CHANGE_WEEK,
    payload: { fechaLunes }
})

const getAllPlanes = () => ({
    type: TypeActionsCrud.GET_ALL_PLANES,
    payload: api().get('/allplanes')
})

export {
    TypeActionsCrud,
    getAllBookings,
    changeWeek,
    getAllPlanes
}