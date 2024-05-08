// import { 
//     FIREBASE_API_KEY, 
//     FIREBASE_APP_ID, 
//     FIREBASE_AUTH_DOMAIN, 
//     FIREBASE_MESSENGER_ID, 
//     FIREBASE_PROJECT_ID, 
//     FIREBASE_STORAGE_BUCKET 
// } from '@env'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'



const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSENGER_ID,
    appId: FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(config)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
