/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

   

    const googleLogin = ()=>{
      return  signInWithPopup(auth, provider)
    }

    const githubLogin = ()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const logout = ()=>{
        signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser =>{

            setUser(currentUser)

        });

        return ()=>{
            unsubscribe()
        }


    },[])




    const authInfo ={googleLogin,githubLogin,user,logout}

    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;