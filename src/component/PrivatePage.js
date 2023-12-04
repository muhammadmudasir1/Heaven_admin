import { Navigate, Outlet} from "react-router-dom"

const PrivatePage=()=>{
    const isLogin=true
    
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