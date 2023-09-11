import { createContext, useEffect, useState } from "react";
import React from 'react';
import app from './../firebase/firebase.init'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider()



    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //verify email

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)

    }

    //update user name

    const updateUserName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name, })
    }

    //user login 
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // fotget password

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)

    }


    // Google LogIn

    const handleGoogleLogIn = () => {
        return signInWithPopup(auth, googleProvider)

    }


    //Logout
    const logOut = () => {
        return signOut(auth)
            .then(() => {

            }).catch(error => {
                console.log(error);
            })

    }

    useEffect(() => {
        const unsubscuibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth changed', currentUser);
        })
        return () => {
            unsubscuibe();
        }
    }, [])

    const authInfo = { createUser, forgetPassword, handleGoogleLogIn, updateUserName, verifyEmail, userLogin, logOut, user, loading }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
