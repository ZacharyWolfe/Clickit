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

const FIREBASE_API_KEY              = "AIzaSyB_Utd6rMWhDKqxlYk_nN3QLdATIPXMllY"
const FIREBASE_AUTH_DOMAIN          = "clickit-6d6ab.firebaseapp.com"
const FIREBASE_DATABASE_URL         = "https://clickit-6d6ab-default-tdb.firebaseio.com"
const FIREBASE_PROJECT_ID           = "clickit-6d6ab"
const FIREBASE_STORAGE_BUCKET       = "clickit-6d6ab.appspot.com"
const FIREBASE_MESSENGER_ID         = "542887559087"
const FIREBASE_APP_ID               = "1:542887559087:web:b3912754d93bc2afd0b95a"
const FIREBASE_MEASUREMENT_ID       = "G-62XQ0QSQ7Q" 

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
