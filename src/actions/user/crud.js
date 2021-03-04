import Api from '../../common/utilities/api'

const baseUrl = '' //Aquí irá la URL del backend

const api = token =>
    new Api({
        baseUrl: baseUrl,
        defaultOptions: { headers: { Authorization: `Bearer ${token}` } }
    })

const TypeActionsCrud = {
    //Aquí se definen las actions
}

/* Aquí se implementan las actions */

export {
    TypeActionsCrud
}
