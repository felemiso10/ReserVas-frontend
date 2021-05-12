import Api from '../../common/utilities/api'

const baseUrl = 'http://localhost:3002' //Aquí irá la URL del backend

const api = token =>
    new Api({
        baseUrl: baseUrl,
        defaultOptions: { headers: { Authorization: `Bearer ${token}` } }
    })

const TypeActionsCrud = {
    GET_ALL_BOOKINGS: 'GET_ALL_BOOKINGS',
    CHANGE_WEEK: 'CHANGE_WEEK',
    GET_ALL_PLANES: 'GET_ALL_PLANES',
    GET_CATEGORIES: 'GET_CATEGORIES'
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

const getCategories = (category) => ({
    type: TypeActionsCrud.GET_CATEGORIES,
    payload: api().get('/Gimnasio/store')
})

export {
    TypeActionsCrud,
    getAllBookings,
    changeWeek,
    getAllPlanes,
    getCategories
}