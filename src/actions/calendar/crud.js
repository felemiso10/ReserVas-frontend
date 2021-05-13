import Api from '../../common/utilities/api'

const baseUrl = 'http://localhost:8080' //Aquí irá la URL del backend

const api = token =>
    new Api(baseUrl, token)

const TypeActionsCrud = {
    GET_ALL_BOOKINGS: 'GET_ALL_BOOKINGS',
    CHANGE_WEEK: 'CHANGE_WEEK',
    GET_ALL_PLANES: 'GET_ALL_PLANES',
    GET_CATEGORIES: 'GET_CATEGORIES',
    GET_CITAS_VACIAS: 'GET_CITAS_VACIAS',
    GET_MY_PLANES: 'GET_MY_PLANES'
}

const getAllBookings = () => ({
    type: TypeActionsCrud.GET_ALL_BOOKINGS,
    payload: api().get('/reservasUsuario')
})

const changeWeek = (fechaLunes) => ({
    type: TypeActionsCrud.CHANGE_WEEK,
    payload: { fechaLunes }
})

const getAllPlanes = (token) => ({
    type: TypeActionsCrud.GET_ALL_PLANES,
    payload: api(token).get('/plans')
})

const getMyPlanes = (data,token) => ({
    type: TypeActionsCrud.GET_MY_PLANES,
    payload: api(token).get('/users/'+data+'/plans')
})

const getCategories = (category,token) => ({
    type: TypeActionsCrud.GET_CATEGORIES,
    payload: api(token).get('/'+category.category+'/stores')
})

const citasVacias = (nombreUser,token) => ({
    type: TypeActionsCrud.GET_CITAS_VACIAS,
    payload: api(token).get('/stores/services/available/' + nombreUser.empresaName)
})

const getCitasEmpresa = (data,token) => ({
    type: TypeActionsCrud.GET_ALL_BOOKINGS,
    payload: api(token).get('/stores/'+data+'/services')
})

export {
    TypeActionsCrud,
    getAllBookings,
    changeWeek,
    getAllPlanes,
    getCategories,
    citasVacias,
    getCitasEmpresa,
    getMyPlanes
}