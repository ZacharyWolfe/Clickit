import React from 'react'
import { useAppSelector } from './store'
import useHandleAuthState from './hooks'
import AuthenticatedMain from './authenticated/Main'
import UnauthenticatedMain from './unauthenticated'
import Loading from './unauthenticated/loading'
import './globals.css'
import { User } from './reducers/user'

const Root = () => {
    const loaded = useHandleAuthState()
    const user = useAppSelector((state) => state.user.user as User)

    return (
        <div className='outerdiv'>
            {loaded ? (
                user ? (
                    <AuthenticatedMain />
                ) : (
                    <UnauthenticatedMain />
                )
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Root
