/**
 * @file     firebase.ts
 * @author   Zachary Wolfe (zw224021@ohio.edu)
 * @brief    A file to configure the Firebase SDK and export basic Firebase services
 * @date     May 13, 2024
 * @version  1.0
*/

import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    browserLocalPersistence,
} from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'

const config = {
    apiKey:             process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:         process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:          process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:      process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSENGER_ID,
    appId:              process.env.REACT_APP_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(config)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export const db = getFirestore(app)

/**
 * @brief Set the persistence of the auth object to local storage
 * @details Allows the user session to persist even after the browser is closed
*/
auth.setPersistence(browserLocalPersistence)