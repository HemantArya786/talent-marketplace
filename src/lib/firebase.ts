import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD5mskxpp5sQmL2l1tAGbjJdCu5FgbEoHs",
    authDomain: "gtmotion-aimarketplace.firebaseapp.com",
    projectId: "gtmotion-aimarketplace",
    storageBucket: "gtmotion-aimarketplace.firebasestorage.app",
    messagingSenderId: "373379724044",
    appId: "1:373379724044:web:b88dec422d96783d7a4f29",
    measurementId: "G-ZWPFHX67P3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }

export default app;

