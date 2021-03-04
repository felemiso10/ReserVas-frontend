import Crud from './crud'

const initialState = {
    user: {
        name:'',
        password:''
    },
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