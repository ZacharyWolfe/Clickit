

import * as user from '../actions/user'
import { UnknownAction } from '@reduxjs/toolkit'
import { Sku } from './cart'

export type User = {
    // PERSONAL INFO
    firstName: string
    lastName: string

    // CONTACT INFO
    email: string
    password: string
    phone: string

    // ADDRESS INFO
    address: string
    city: string
    state: string
    country: string
    zipcode: string

    // OPTIONAL INFO
    age?: number
    gender?: string
    middleInitial?: string

    // USER INFO
    totalSpent: number
    numPurchases: number
    cart: Map<Sku[], number>
    purchases: Map<Sku[], number>

    // MISC
    id: string
    userSince: string
    onboarded: boolean
    photoURL: string
}

export type UserState = {
    user?: User
    loading: boolean
    error?: Error
}

const InitialState: UserState = {
    user: undefined,
    error: undefined,
    loading: false,
}

export default (state = InitialState, action: UnknownAction): UserState => {
    switch (action.type) {
        case user.GET_USER_REQUEST:
        case user.SET_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case user.GET_USER_SUCCESS:
        case user.SET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload as User,
                loading: false,
                error: undefined,
            }
        case user.GET_USER_FAILURE:
        case user.SET_USER_FAILURE:
            return {
                ...state,
                error: action.payload as Error,
                loading: false,
            }
        default:
            return state
    }
}
