import { combineReducers } from 'redux'

import user from './user'
import calendar from './calendar'

const reservasReducer = combineReducers({
    user,
    calendar
})

export default reservasReducer