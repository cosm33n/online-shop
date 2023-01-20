import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8NkdK9EfrU0yHsKD-ldk1V4Q5rrPTmcc',
  authDomain: 'crwn-clothing-db-58e60.firebaseapp.com',
  projectId: 'crwn-clothing-db-58e60',
  storageBucket: 'crwn-clothing-db-58e60.appspot.com',
  messagingSenderId: '789738835809',
  appId: '1:789738835809:web:5618e8ab20787e650dff20',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
