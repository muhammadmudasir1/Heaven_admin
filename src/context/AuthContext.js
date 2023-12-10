import { createContext, useContext, useState } from "react";

const AuthContext =createContext();

const AuthProvider=({children})=>{
    
    const [auth,setAuth]=useState()

    const login= (UserData)=>{
        setAuth(UserData)
    }

    const logout=()=>{
        setAuth(null)
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
