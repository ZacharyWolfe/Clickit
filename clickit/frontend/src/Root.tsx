import React from 'react'
import { NavLink } from 'react-router-dom'
import Main from './authenticated/Main'
import { useAppDispatch, useAppSelector } from './store'
import useHandleAuthState from './hooks'
import AuthenticatedMain from './authenticated/Main'
import UnauthenticatedMain from './unauthenticated'
import Loading from './unauthenticated/loading'

const Root = () => {
    const loaded = useHandleAuthState()
    const user = useAppSelector((state) => state.user.user)

    console.log(loaded)
    console.log(user)

    return (
        <>
            {loaded ? (
                user ? (
                    <AuthenticatedMain />
                ) : (
                    <UnauthenticatedMain />
                )
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Root
