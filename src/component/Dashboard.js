import { Link, Outlet } from "react-router-dom"
import { FaPlus } from "react-icons/fa6"
import topFive from "../imges/topFive.svg"
import list from "../imges/list.svg"
import barChart from "../imges/barChart.svg"
import plus from "../imges/plus.svg"
import Logo from "../imges/logo.png"
import logoutIcon from "../imges/logout.svg"
import person from "../imges/person.svg"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Dashboard = () => {
    const {t}=useTranslation()
    const {logout}=useAuth()
    const navigate=useNavigate()
    const handleLogout=(e)=>{
        try {
            logout()
            navigate('/login')
            
        } catch (error) {
            console.log(error.reponse)
        }
    }
    



    return (
        <div className="grid grid-cols-6 h-screen">
            <div className=" bg-customBlue flex flex-col justify-between">
                <div>
                    <div className=" bg-sky-700 flex justify-center items-center p-4">
                        <img src={Logo} className=" w-2/12" />
                        <h1 className=" font-sans font-bold text-white">3D Heaven</h1>
                    </div>

                    <div className="flex flex-col mt-5 ">
                        <Link to={'product'} className=" flex items-center text-white font-sans font-bold text-lg py-3 hover:bg-sky-500">
                            <img src={plus} className=" w-4 ml-7" />
                            <p className="pl-2">{t('products')}</p>
                        </Link>
                        <Link to={'topFive'} className="flex items-center text-white font-sans font-bold text-lg py-3 hover:bg-sky-500">
                            <img src={topFive} className=" w-4 ml-7" />
                            <p className="pl-2">Top 5 {t('products')}</p>
                        </Link>
                        <Link to={'News'}className="flex items-center text-white font-sans font-bold text-lg py-3 hover:bg-sky-500">
                            <img src={list} className=" w-4 ml-7" />
                            <p className="pl-2">{t('news')}</p>
                        </Link>
                        <Link to={'analytics'}className="flex items-center text-white font-sans font-bold text-lg py-3 hover:bg-sky-500">
                            <img src={barChart} className=" w-4 ml-7" />
                            <p className="pl-2">Google Analytics</p>
                        </Link>
                    </div>

                </div>
                <div className="flex flex-col mt-5 ">
                    <Link className=" flex items-center text-white font-sans font-bold text-lg py-3 hover:text-gray-300">
                        <img src={person} className=" w-4 ml-7" />
                        <p className="pl-2">User Account</p>
                    </Link>
                    <button 
                    className=" flex items-center text-white font-sans font-bold text-lg py-3 hover:text-gray-300"
                    onClick={handleLogout}
                    >
                        <img src={logoutIcon} className=" w-4 ml-7" />
                        <p className="pl-2">{t("logout")}</p>
                    </button>
                </div>
            </div>
            <div className=" col-span-5">

                <Outlet/>
            </div>

        </div>
    )
}

export default Dashboard