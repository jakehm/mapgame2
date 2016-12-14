import { combineReducers } from 'redux'
import UserReducer from './userReducer'

const rootReducer = combineReducers({
    currentUser: UserReducer,
})

export default rootReducer