import { auth } from '../config/firebase'
import { AppDispatch } from '../store'
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from './user'

type RequestWithDispatchParameters = {
    dispatch: AppDispatch
    endpoint: string
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    types: [requestType: string, successType: string, errorType: string]
    data?: Record<string, any>
    headers?: Record<string, string>
}

export const requestWithDispatch = async ({
    dispatch,
    endpoint,
    method = 'GET',
    types,
    data,
    headers = { 'Content-Type': 'application/json' },
}: RequestWithDispatchParameters) => {
    const fetchURL = process.env.REACT_APP_API_URL
    console.log(fetchURL)

    try {
        console.log(`starting request: ${endpoint}`)
        dispatch({ type: GET_USER_REQUEST })
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
            method,
            headers,
            ...(method !== 'GET' && data ? { body: JSON.stringify(data) } : {}),
        })

        if (response.ok) {
            const responseJSON = await response.json()
            dispatch({ type: GET_USER_SUCCESS, payload: responseJSON })
            console.log("responseJSON: ")
            console.log(responseJSON)
            console.log(`request success`)
            return
        }

    } catch (err: any) {
        console.log(`request failure: ${err}`)
        dispatch({
            type: GET_USER_FAILURE,
            payload: { message: err, status: 500 },
        })
    }

    return
}

export const authRequestWithDispatch = async ({
    dispatch,
    endpoint,
    method = 'GET',
    types,
    data,
    headers = { 'Content-Type': 'application/json' },
}: RequestWithDispatchParameters) => {
    const userToken = await auth.currentUser?.getIdToken()
    console.log(`userToken: ${userToken}`)
    const combinedHeaders = { ...headers, Authorization: `Bearer ${userToken}` }
    return requestWithDispatch({
        dispatch,
        endpoint,
        method,
        types,
        data,
        headers: combinedHeaders,
    })
}
