import React, { useState } from 'react'
import { signInApp, signUpApp } from '../authentication/firebase'
import { useAppDispatch } from '../store'

const UnauthenticatedMain = () => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmitNewUser = () => {
        console.log('handling signup')
        dispatch(signUpApp(email, password))
    }

    const handleSubmitExistingUser = () => {
        console.log('handling signin')
        dispatch(signInApp(email, password))
    }

    return (
        <div>
            <input
                type="email"
                value={email}
                placeholder="email"
                autoCorrect="false"
                autoCapitalize="none"
                inputMode="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                placeholder="password"
                autoCorrect="false"
                autoCapitalize="none"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={() => handleSubmitNewUser()}>sign up</button>
            <button onClick={() => handleSubmitExistingUser()}>sign in</button>
        </div>
    )
}

export default UnauthenticatedMain
