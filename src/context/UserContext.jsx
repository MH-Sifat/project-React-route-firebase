import { createContext, useEffect, useState } from "react";
import React from 'react';
import app from '../firebase/firebase.config.'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({children}) => {

    const [loading,setLoading] = useState(true);

    const [user,setUser] = useState({})


    //create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //user login 
    const userLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    

    //Logout
    const logOut = ()=>{
        return signOut(auth)
        .then(()=>{

        }).catch(error=>{
            console.log(error);
        })

    }

    useEffect(()=>{
        const unsubscuibe =  onAuthStateChanged(auth,currentUser=>{
             setUser(currentUser);
             setLoading(false);
             console.log('auth changed',currentUser);
           })
           return()=>{
               unsubscuibe();
           }
       },[])

    const authInfo = {createUser,userLogin,logOut,user,loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
