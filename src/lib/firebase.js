import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API,
	authDomain: import.meta.env.VITE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_PROJECTID,
	storageBucket: import.meta.env.VITE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_APPID,
	measurementId: import.meta.env.VITE_MEASUREMENTID,
};

    const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signInUser = async (email, password) => {
	if (!email && !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const userStateListener = (callback) => {
	return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);