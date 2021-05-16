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
        date: '',
        category:'',
        inicioJornada: '',
        finJornada: '',
        tiempoServicio: ''
    },
    service: {
        name: '', //(service)
        cliente:'', //username
        precio: '', //price
        horaInicio: '',
        horaFin: '',
        estado:''
    },
    //El tipo de usuario puede ser tienda o cliente
    userType: 'cliente',
    isLoggedIn: false,
    error: '',
    token: null,
    userLogged: {
        token: '',
        name: '',
        categoria: '',
        inicioJornada: '',
        finJornada: '',
        tiempoServicio: ''
    }
}

const Managers = {
    ...Crud
}

export default (state = initialState, action = { type: '' }) => {
    const finded = Managers[action.type]
    return finded ? finded(state, action) : { ...state }
  }