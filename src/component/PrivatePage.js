import { Navigate, Outlet} from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PrivatePage=()=>{
    const {auth}=useAuth()
    console.log(auth)
    
    if(auth){
        return(
            <>
            <Outlet/>
            
            </>
        )
    }
    else{
        return <Navigate to={'/login'}/>
    }



}
export default PrivatePage