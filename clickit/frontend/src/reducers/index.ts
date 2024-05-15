import { combineReducers } from 'redux'
import user from './user'
import cart from './cart'

export type Error = {
    message: string
    status: number
}

export default combineReducers({
    user: user,
    cart: cart,
})
