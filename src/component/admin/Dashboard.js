import { Link, Outlet } from "react-router-dom"
import topFive from "../../imges/topFive.svg"
import list from "../../imges/list.svg"
import barChart from "../../imges/barChart.svg"
import plus from "../../imges/plus.svg"
import Logo from "../../imges/logo.png"
import logoutIcon from "../../imges/logout.svg"
import person from "../../imges/person.svg"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import useLanguage from "../../hooks/useLanguage"
import germanflag from "../../imges/germanflag.png"
import ukflag from "../../imges/ukflag.png"
import { useState } from "react"
import { CiGlobe } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa"

const Dashboard = () => {
    const { t } = useTranslation()
    const { logout } = useAuth()
    const navigate = useNavigate()
    const [showLang, setShowLang] = useState(false)
    const setlang = useLanguage()
    const { auth } = useAuth()


    const handleLogout = (e) => {
        try {
            logout()
            navigate('/login')

        } catch (error) {
            console.log(error.reponse)
        }
    }




    return (
        <div className="grid grid-cols-6 h-screen fixed">
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
                        {
                            auth && auth.role < 3 &&
                            <Link to={'topFive'} className="flex items-center text-white font-sans font-bold text-lg py-3 hover:bg-sky-500">
                                <img src={topFive} className=" w-4 ml-7" />
                                <p className="pl-2">Top 5 {t('products')}</p>
                            </Link>

                        }
                        <Link to={'News'} className="flex items-center text-white font-sans font-bold text-lg py-3 hover:bg-sky-500">
                            <img src={list} className=" w-4 ml-7" />
                            <p className="pl-2">{t('news')}</p>
                        </Link>
                        <Link to={'beginnersGuid'} className="flex items-center text-white font-sans font-bold text-lg py-3 hover:bg-sky-500">
                            <img src={barChart} className=" w-4 ml-7" />
                            <p className="pl-2">Beginners Guid</p>
                        </Link>
                    </div>

                </div>
                <div className="flex flex-col mt-5 ">
                    <Link to={'users'}
                        className=" flex items-center text-white font-sans font-bold text-lg py-3 hover:text-gray-300">
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

                <Outlet />
            </div>
            <div className="absolute top-2 right-6 ">
                <div className="flex bg-white items-center rounded-3xl border-2"
                    onClick={(e) => setShowLang((prev) => {
                        return !prev
                    }
                    )}
                >
                    <CiGlobe className="text-2xl m-2" />
                    <p className="m-2">Language</p>
                    <FaCaretDown className="m-2 hover:text-customBlue "
                    />
                </div>
                {showLang ?
                    <ul className="bg-white mt-2 rounded-md shadow-md overflow-hidden">
                        <li className="px-2 py-1 hover:bg-sky-400 hover:text-white flex items-center"
                            onClick={(e) => {
                                setlang("en")
                                setShowLang(false)
                            }}
                        >
                            <img src={ukflag} className="h-4 mr-2" />
                            <p>English</p>
                        </li>
                        <li className="px-2 py-1 hover:bg-sky-400 hover:text-white flex items-center"
                            onClick={(e) => {
                                setlang("de")
                                setShowLang(false)
                            }}
                        >
                            <img src={germanflag} className="h-4 mr-2" />
                            German</li>
                    </ul>
                    : null
                }

            </div>

        </div>
    )
}

export default Dashboard