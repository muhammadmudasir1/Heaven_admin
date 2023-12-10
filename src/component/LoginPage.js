import logo from "../imges/logo.png"
import { useState,useEffect } from "react"
import Api from "../api/Api"
import { useAuth } from "../context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"


const LoginPage = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [error,setError]=useState(null)
    const {login} =useAuth()
    const naviagate=useNavigate()
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response=await Api.post('api/user/login',{email,password})
            login(response.data)
            console.log(response.data)
            naviagate('/dashboard/product')

            
        } catch (error) {
            console.log(error)
            error.response?.status===400?
                setError("Invalid Email Or Password")
            :setError("Login Failed")
        }
    }

    useEffect(()=>{
        setError(null)
    },[email,password])
    
    return (
        <div className=" w-screen h-screen bg-gradient flex justify-center items-center">
            <div className=" w-1/3  bg-white shadow-xl rounded-xl border-black border-[1px] flex flex-col items-center">
                <div className="flex items-center justify-center pt-8">
                    <img src={logo} className=" w-12"></img>
                    <h2 className=" text-2xl font-sans font-bold">3D Heaven</h2>
                </div>
                <h1 className=" text-5xl font-righteous text-customBlue mt-6 ">WELCOME!</h1>
                <form className="mt-6 flex flex-col items-center w-full"    onSubmit={handleSubmit}>
                    <div className="w-3/4">
                    <label>Username/E-mail Address:</label>
                    <input
                        type="text"
                        id="username"
                        className="w-full h-12 border border-gray-300 rounded-2xl bg-gray-200 px-3 mt-1 shadow-sm text-center"
                        placeholder="Enter Username or Email Address here"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />

                    </div>
                    <div className="w-3/4 mt-5">
                    <label>Password:</label>
                    <input
                        type="password"
                        id="pasword"
                        className="w-full h-12 border border-gray-300 rounded-2xl bg-gray-200 px-3 mt-1 shadow-sm text-center"
                        placeholder="Enter Password here"
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                    </div>
                    {error?
                    <p className=" mt-2  text-center text-red-500">{error}</p>:null}
                    <button type="submit" className="w-3/4 my-10  bg-customBlue hover:bg-sky-600 h-12 rounded-full font-sans font-bold text-lg text-white">Login</button>
                </form>
            
            </div>
        </div>
    )
}
export default LoginPage