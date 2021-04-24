import Crud from './crud'

const initialState = {
    user: {
        username: '',
        name:'',
        password:'',
        email: '',
        nif: '',
        phone: '',
        address: '',
        date: ''
    },
    service: {
        servicename: '',
        username:'',
        price: '',
        horaInicio: '',
        horfin: ''
    },
    //El tipo de usuario puede ser tienda o cliente
    userType: 'cliente',
    isLoggedIn: false,
    error: '',
    token: null
}

const Managers = {
    ...Crud
}

export default (state = initialState, action = { type: '' }) => {
    const finded = Managers[action.type]
    return finded ? finded(state, action) : { ...state }
  }