import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =() =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    const updateUserData = ( user, name , photo) =>{
        return updateProfile(user, {
            displayName: name ,
            photoURL: photo,
        })
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged (auth, user =>{
            setUser(user);
            setLoading(false)
        });
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        googleLogin,
        updateUserData
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;