import { useEffect, useState } from 'react'
import { auth } from '../config/firebase'
import { useAppDispatch } from '../store'
import { getCurrentUser } from '../authentication/firebase'

const useHandleAuthState = () => {
    const dispatch = useAppDispatch()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        // get current user on initial load if user is logged in
        auth.onAuthStateChanged(async (user) => {
            // section to get data needed for initial boot
            if (!loaded) {
            }

            if (user && user.displayName) {
                await dispatch(getCurrentUser())
                setLoaded(true)
            } else {
                setLoaded(true)
            }
        })
    }, [])

    return {
        loaded,
    }
}

export default useHandleAuthState
