import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LandingPageImage from "../../imges/LandingPageImage.webp";
import Api from "../../api/Api";
const NewsAndEvent = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const checkEmail = (email) => {
        const regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regularExpression.test(email);
    };
    const emailApi = async () => {
        if (checkEmail(email)) {
            try {
                const response = await Api.post("/api/setting/addNewsLetters", email);
                console.log(response.data);
                setEmail("");
                alert("News Letter Subscribe");
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Enter Correct Email");
        }
    };
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center bg-[#F5F2F9] my-8 ">
            <div className="px-8  py-4 order-2 lg:order-1 flex justify-center flex-col lg:block items-center">
                <h1 className="text-neutral-800 lg:text-5xl text-xl lg:text-left text-center font-bold font-[Roboto] ">
                    {t("newsBannarHeading")}
                </h1>
                <button
                    onClick={(e) => {
                        navigate("/news");
                    }}
                    className="text-neutral-800 mt-4 bg-cyan-500 rounded-xl lg:px-6 lg:py-3 px-3 py-2 lg:text-2xl text-xl font-medium font-[Roboto]"
                >
                    News & Events
                </button>
            </div>
            <img
                src={LandingPageImage}
                className="lg:h-44 h-32 order-1 lg:order-2 mt-3 lg:mt-0 lg:px-4"
                alt="3d-Printer Image"
                title="3d Printer"
            />

            <div className="order-3 lg:hidden flex items-center justify-center py-8">
                <div
                    className="flex flex-col items-center justify-center 
                        bg-[#035091] 
                        px-2 
                        w-[280px] 
                        py-4
                        rounded-xl"
                >
                    <h1 className="text-2xl font-bold text-white pb-12 text-center">
                        Subscribe to <br /> NewsLetter{" "}
                    </h1>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Your email address"
                        className="
                            mb-4 mx-2 w-full py-4 
                            border-t-transparent 
                            border-x-transparent 
                            border-b-white 
                            border-b-2 px-4
                            bg-transparent outline-none
                            text-xl text-white font-normal items-center"
                    />
                    <button
                        className="bg-[#00CED1] rounded-2xl py-4 w-full text-lg font-semibold"
                        onClick={emailApi}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsAndEvent;
