import Api from "../api/Api"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"


const useRefresh =() => {
    const {setAuth}=useAuth()
    const navigate=useNavigate()

    const refresh=async()=>{
        try {
            const response=await Api.get('api/user/refresh',
            {
                withCredentials:true
            })
            setAuth(prev=>{
                return {...prev,accessToken:response.data.accessToken}
            }) 
            return response.data.accessToken
            
        } catch (error) {
            if (error.response?.status === 403){
                setAuth(null)
                navigate("/login")
                console.log(error)

            }
        }
    }
    return refresh
}

export default useRefresh