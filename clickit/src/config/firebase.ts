import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSENGER_ID,
    appId: process.env.FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(config)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
