import logo from "../../imges/logo.png"
import { useState,useEffect } from "react"
import Api from "../../api/Api"
import { useAuth } from "../../context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { CiGlobe } from "react-icons/ci";
import {FaCaretDown} from 'react-icons/fa'
import germanflag from "../../imges/germanflag.png"
import ukflag from "../../imges/ukflag.png"
import useLanguage from "../../hooks/useLanguage"


const LoginPage = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [error,setError]=useState(null)
    const {login} =useAuth()
    const {t}=useTranslation()
    const [showLang,setShowLang]=useState(false)
    const setlang=useLanguage()


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
                <h1 className=" text-5xl font-righteous text-customBlue mt-6 ">{t("welcome")}</h1>
                <form className="mt-6 flex flex-col items-center w-full"    onSubmit={handleSubmit}>
                    <div className="w-3/4">
                    <label>{t('emailAddress')}:</label>
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
                    <label>{t('password')}:</label>
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
                    <button type="submit" className="w-3/4 my-10  bg-customBlue hover:bg-sky-600 h-12 rounded-full font-sans font-bold text-lg text-white">{t('login')}</button>
                </form>
            
            </div>
            <div className="absolute top-4 right-4 ">
                <div className="flex bg-white items-center rounded-3xl">
                <CiGlobe className="text-2xl m-2"/> 
                <p className="m-2">Language</p>
                <FaCaretDown className="m-2 hover:text-customBlue "
                onClick={(e)=>setShowLang((prev)=>{
                    return !prev}
                )}
                />
                </div>
                {showLang?
                <ul className="bg-white mt-2 rounded-md shadow-md overflow-hidden">
                    <li className="px-2 py-1 hover:bg-sky-400 hover:text-white flex items-center"
                    onClick={(e)=>{
                        setlang("en")
                        setShowLang(false)
                    }}
                    >
                        <img src={ukflag} className="h-4 mr-2"/>
                        <p>English</p>
                        </li>
                    <li className="px-2 py-1 hover:bg-sky-400 hover:text-white flex items-center"
                    onClick={(e)=>{
                        setlang("de")
                        setShowLang(false)
                    }}
                    >
                        <img src={germanflag} className="h-4 mr-2"/>
                        German</li>
                </ul>
                :null
                }

            </div>
        </div>
    )
}
export default LoginPage