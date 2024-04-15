/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [loading , setLoading] = useState(true)


    const [user,setUser]=useState(null)

   const createUser = (email,password)=>{

    setLoading(true)

    return createUserWithEmailAndPassword(auth,email,password)
   }

   const updatePhotoAndName = (name,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
   }

   const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

    const googleLogin = ()=>{
        setLoading(true)
      return  signInWithPopup(auth, provider)
    }

    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logout = ()=>{
        signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser =>{

            setUser(currentUser)
            setLoading(false)

        });

        return ()=>{
            unsubscribe()
        }


    },[])




    const authInfo ={googleLogin,githubLogin,user,logout,createUser,updatePhotoAndName,login,loading}

    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;