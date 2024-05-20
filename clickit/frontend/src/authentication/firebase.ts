import {
    updateProfile,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    getAuth,
} from 'firebase/auth'
import { auth } from '../config/firebase'
import { AppDispatch } from '../store'
import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,

    SET_USER_REQUEST,
    SET_USER_SUCCESS,
    SET_USER_FAILURE,
    
    CLEAR_USER_ERRORS,
} from '../actions/user'
import { authRequestWithDispatch } from '../actions/api'
import { User } from '../reducers/user'
import { Sku } from '../reducers/cart'

export const getCurrentUser = () => {
    return (dispatch: AppDispatch) => {
        return authRequestWithDispatch({
            dispatch,
            endpoint: 'get_current_user',
            types: [GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE],
        })
    }
}

export const signUpApp = (
    email: string,
    password: string,
) => {
    return async (dispatch: AppDispatch) => {
        dispatch({ 
            type: SET_USER_REQUEST 
        })
        try {
            const userPromise = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            )

            const user = userPromise.user
            const newUser: User = {
                // PERSONAL INFO
                firstName: "",
                lastName: "",

                // CONTACT INFO
                email: email,
                password: password,
                phone: "",

                // ADDRESS INFO
                address: "",
                city: "",
                state: "",
                country: "",
                zipcode: "",

                // USER INFO
                totalSpent: 0,
                numPurchases: 0,
                purchases: new Map<Sku[], number>(),

                // MISC
                id: user.uid,
                onboarded: false,
                userSince: (new Date().toISOString()),
                cart: new Map<Sku[], number>(),
                photoURL: '',
            }

            console.log (newUser.userSince)

            await updateProfile(
                userPromise.user, 
                { displayName: email }
            )
        } catch (err: any) {
            dispatch({
                type: SET_USER_FAILURE,
                payload: {
                    message: err.message,
                    status: 500,
                },
            })
            return
        }

        return authRequestWithDispatch({
            dispatch,
            endpoint: 'create_user',
            method: 'POST',
            types: [SET_USER_REQUEST, SET_USER_SUCCESS, SET_USER_FAILURE],
            data: {
                email,
                onboarded: false,
            },
        })
    }
}

export const signInApp = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch({ type: GET_USER_REQUEST })
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err: any) {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    message: err.message,
                    status: 500,
                },
            })
        }
        return
    }
}

export const signOutApp = () => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: SET_USER_REQUEST,
            payload: undefined,
        })
        try {
            await signOut(auth)
        } catch (error: any) {
            console.error(error)
        }
    }
}

export const sendPassResetEmail = (email: string) => {}

export const updateEmail = (email: string) => {}

export const updatePassword = (password: string) => {}

export const resetUserErrors = () => {
    return (dispatch: AppDispatch) => {
        dispatch({ type: CLEAR_USER_ERRORS })
    }
}
