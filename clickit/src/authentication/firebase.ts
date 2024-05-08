import {
    updateProfile,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
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

export const getCurrentUser = () => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: GET_USER_REQUEST,
        })
    }
}

export const signUpApp = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: SET_USER_REQUEST,
        })
        try {
            const newUser = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            )
            await updateProfile(newUser.user, {
                displayName: email,
            })
        } catch (error: any) {
            console.error(error)
            dispatch({
                type: SET_USER_FAILURE,
                payload: {
                    message: error.message,
                    status: 500,
                },
            })
        }
        return
    }
}

export const signInApp = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: GET_USER_REQUEST,
        })
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            dispatch({
                type: GET_USER_SUCCESS,
                payload: user.user,
            })
        } catch (error: any) {
            console.log(error)
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    message: error.message,
                    status: 500,
                },
            })
        }
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
