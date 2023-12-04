import { Navigate, Outlet} from "react-router-dom"

const PrivatePage=()=>{
    const isLogin=false
    
    if(isLogin){
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