import { createContext, useContext, useState } from "react";
import Api from "../api/Api";

const AuthContext =createContext();

const AuthProvider=({children})=>{
    
    const [auth,setAuth]=useState()

    const login= (UserData)=>{
        setAuth(UserData)
        console.log(UserData)
        localStorage.setItem('auth',JSON.stringify(UserData))
    }

    const logout=()=>{
        setAuth(null)
        localStorage.removeItem('auth')
        Api.delete('/api/user/',{
            withCredentials:true
        })
    }
    
    const value={
        login,
        logout,
        auth,
        setAuth
    }

    return <AuthContext.Provider value={value} >{children} </AuthContext.Provider>

}

export const useAuth = ()=>{
   const {login,logout,auth,setAuth}= useContext(AuthContext)
   return {login,logout,auth,setAuth}
}

export default AuthProvider
