import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { 
    signInApp, 
    signUpApp 
} from '../../authentication/firebase'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (!user){
            navigate('/signup')
            return
        }

        navigate('/')
        console.log("redirecting")
    }, [user])

    const HandleSubmitNewUser = async () => {
        console.log('handling signup')
        await dispatch(signUpApp(email, password))
        return
    }

    const handleSubmitExistingUser = async () => {
        console.log('handling signin')
        await dispatch(signInApp(email, password))
        console.log("user: ")
        console.log(user)
        if (user){
            navigate('/')
            console.log("redirecting")
        }
        else{
            navigate('/signup')
            setError('Invalid email or password')
        }
        return
    }

    return (
        <div>
            <div className='userFlowContainer'>
                <div className='userFlowContainerItems'>
                    <input
                        type="email"
                        value={email}
                        placeholder="email"
                        autoCorrect="false"
                        autoCapitalize="none"
                        inputMode="email"
                        className='signupInput'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        autoCorrect="false"
                        autoCapitalize="none"
                        className='signupInput'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className='userFlow' onClick={() => HandleSubmitNewUser()}>sign up</button>
                    <button className='userFlow' onClick={() => handleSubmitExistingUser()}>sign in</button>
                    <div className='error'>
                        {error}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
