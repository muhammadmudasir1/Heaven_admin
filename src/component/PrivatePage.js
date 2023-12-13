import { Navigate, Outlet} from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import useRefresh from "../hooks/useRefresh"
import { useEffect } from "react"

const PrivatePage=()=>{
    const refresh=useRefresh()
    const {auth}=useAuth()
    console.log(auth)
    
    useEffect(()=>{
        if(!auth){
            refresh()
        }
    },[])


        return(
            <>
            <Outlet/>
            
            </>
        )
    



}
export default PrivatePage