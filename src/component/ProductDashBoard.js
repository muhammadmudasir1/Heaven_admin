import ProductCard from "./ProductCard"
import plus from "../imges/plus.svg"
import { Link } from "react-router-dom"
import Api from "../api/Api"
import { useAuth } from "../context/AuthContext"
import useRefresh from "../hooks/useRefresh"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const ProductDashboard = () => {
    const { auth,setAuth } = useAuth()
    const refresh= useRefresh()
    const naviagate=useNavigate()
    const [currentProducttype,setCurrentProductType]=useState(1)

    const handleSearch = async (e) => {
        try {
            const { accessToken } = auth
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            }
            const response = await Api.get("api/user/test", config)
            console.log(response)
        } catch (error) {
            console.log(error)
            if (error.response?.status === 403) {
                const accessToken=await refresh()
                console.log(auth)
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
                const response = await Api.get("api/user/test", config)
                console.log(response)
            }
            else{
                setAuth(null)
                naviagate('/login')
            }
        }
    }
    return (
        <div className="px-10 h-full w-full">
            <div className="mr-5 h-12 w-full flex flex-row-reverse items-center">
                <div className=" mr-5 h-10 flex items-center ">

                    <input type=" text" className="h-full px-4 rounded-tl-full rounded-bl-full outline-none border-2 border-l-0 shadow-lg" placeholder="Search...... " />
                    <button
                        className="h-full rounded-tr-full rounded-br-full px-3 bg-customBlue text-white font-sans font-semibold hover:bg-sky-500 shadow-lg"
                        onClick={(handleSearch)}
                    >Search</button>
                </div>
            </div>
            <div className=" h-12 w-full">
                <button
                className={
                    `bg-gray-300 ${currentProducttype===1?'border-b-4 border-customBlue':" "}  px-10 py-3`}
                    onClick={(e)=>{
                        setCurrentProductType(1)
                    }}
                    >SLA</button>
                <button
                className={
                    `bg-gray-300 ${currentProducttype===2?'border-b-4 border-customBlue':" "}  px-10 py-3`}
                    onClick={(e)=>{
                        setCurrentProductType(2)
                    }}
                >FDM</button>
                <button
                className={
                    `bg-gray-300 ${currentProducttype===3?'border-b-4 border-customBlue':" "}  px-10 py-3`}
                    onClick={(e)=>{
                        setCurrentProductType(3)
                    }}
                >Leaser Cutter</button>
                <button
                className={
                    `bg-gray-300 ${currentProducttype===4?'border-b-4 border-customBlue':" "}  px-10 py-3`}
                    onClick={(e)=>{
                        setCurrentProductType(4)
                    }}
                >3D Scannar</button>

            </div>
            <div className="2xl:h-[700px] xl:h-[500px] w-full border-gray-200 border-2 p-2 overflow-scroll overflow-x-hidden ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            {/* <div className="w-full mt-5 flex flex-row-reverse">
                <Link to={'/dashboard/addProduct'} className=" 2xl:h-16 2xl:w-16 xl:h-12 xl:w-12 bg-customBlue rounded-full flex justify-center items-center">
                    <img src={plus} className="2xl:h-6 xl:h-4" />
                </Link>
            </div> */}
                <Link to={'/dashboard/addProduct'} className=" 2xl:h-16 2xl:w-16 xl:h-12 xl:w-12 bg-customBlue rounded-full flex justify-center items-center fixed bottom-4 right-6">
                    <img src={plus} className="2xl:h-6 xl:h-4" />
                </Link>

        </div>
    )
}
export default ProductDashboard