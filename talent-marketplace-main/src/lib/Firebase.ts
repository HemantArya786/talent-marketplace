import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "ai-marketplace-ad5d4.firebaseapp.com",
    projectId: "ai-marketplace-ad5d4",
    storageBucket: "ai-marketplace-ad5d4.firebasestorage.app",
    messagingSenderId: "117612578723",
    appId: "1:117612578723:web:75684c631e1edf949bfc16",
    measurementId: "G-Y8NRQZQ7VG"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}

export default app;