// import { Email } from '@mui/icons-material';
import { MdEmail } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import manu_profile from "../../imges/manu_profile.png";
import Api from "../../api/Api";

const StickyFooter = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { t } = useTranslation();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const emailApi = async () => {
    console.log("email is api is called")
    if (validateEmail(email)) {
      try {
        const response = await Api.post("/api/setting/addNewsLetters", { email });
        console.log(response.data);
        setEmail("");
        alert("News Letter Subscribed");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Enter Valid Email")
    }
  };

  return (
    <div className="bg-customBlue w-full lg:py-8">

        <div className="lg:grid lg:grid-cols-3 flex flex-col gap-x-10 items-center relative">

          <div className="w-full bg-[#00CED1] lg:p-0 p-3 lg:mt-0 mt-4 order-4 lg:order-1 flex lg:flex-col justify-center items-center lg:w-96 h-full lg:rounded-xl lg:ml-16">
            <div
              className="lg:w-52 lg:pt-16 lg:h-52 w-20 h-20 rounded-full bg-center bg-cover"
              style={{ backgroundImage: `url(${manu_profile})` }}
            />
            <div className="px-4">

            <h1 className="lg:block lg:text-2xl text-lg text-white font-normal lg:py-5">
              Manuel Strauss
            </h1>
            <h1 className="hidden lg:block font-normal font-[Roboto]">
              3D printer enthusiat
            </h1>
            <h1 className=" font-normal font-[Roboto]">abc@email.com</h1>
            </div>
            <div className="flex gap-2 items-center lg:hidden">
              <IoLogoInstagram size={30} />
              <FaLinkedinIn size={30} />
              <FaYoutube size={30} />
            </div>
          </div>

          <div className="mx-4 lg:ml-16 col-span-2 lg:block lg:order-2">
            <h1 className="text-neutral-100 lg:text-5xl font-bold text-2xl pt-4">
              Quick links
            </h1>
            <div className="lg:flex grid grid-cols-3 py-4 lg:py-8">
              <div className="lg:pr-40 flex flex-col">
                <Link to={"/"} className={`lg:text-2xl text-white mb-3`}>
                  {t("HomePage")}
                </Link>
                <Link to={"/news"} className={`lg:text-2xl text-white mb-3`}>
                  News
                </Link>
                <Link
                  to={"/ComparisonPage"}
                  className={`lg:text-2xl text-white mb-3`}
                >
                  {t("BestDeals")}
                </Link>
                
              </div>
              <div className="lg:pr-8 flex flex-col">
                
                <Link
                  to={"/product/sla"}
                  className={`lg:text-2xl text-white mb-3`}
                >
                  {t("SLA")}
                </Link>
                <Link
                  to={"/product/fdm"}
                  className={`lg:text-2xl text-white mb-3`}
                >
                  {t("fdm")}
                </Link>
                <Link
                  to={"/product/scanner"}
                  className={`lg:text-2xl text-white mb-3`}
                >
                  {t("3DScanner")}
                </Link>
                
              </div>
              <div className="lg:pr-8 flex flex-col">
              <Link
                  to={"/product/cutter"}
                  className={`lg:text-2xl text-white mb-3`}
                >
                  {t("laserCutter")}
                </Link>
                <Link
                  to={"/dataprivacy"}
                  className={`lg:text-2xl text-white mb-3`}
                >
                  Data Privacy
                </Link>
                <Link to={"/impressium"} className={`lg:text-2xl text-white mb-3`}>
                  Impressium
                </Link>
              </div>
            </div>

            <div className="min-h-12  lg:mb-6 flex justify-center lg:justify-start ">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email address"
                className="bg-[#eeeeee] border-[2px] border-white 
                            rounded h-full lg:w-[420px]  mr-2 lg:py-4 py-2 px-1 lg:px-4 text-customBlue lg:text-xl text-lg outline-none"
              />
              <button
                type="submit"
                className="flex justify-center items-center bg-[#00CED1] w-[60px] text-lg rounded lg:hidden"
                onClick={emailApi}
              >
                <MdEmail className="text-lg h-8 w-8 text-white" />
              </button>

              <button
                type="submit"
                onClick={emailApi}
                className="text-[#2775C0]
                            items-center bg-[#00CED1] 
                            lg:block hidden lg:w-[250px] lg:h-full rounded lg:py-4 lg:px-4 lg:text-xl font-semibold"
              >
                Subscribe Newsletter
              </button>
            </div>

            <div className="hidden lg:flex lg:justify-between pr-16 ">
          <h1 className="lg:block hidden text-neutral-100 text-4xl font-bold ">
              Our channels
            </h1>
            <div className="flex">

            <IoLogoInstagram size={50} className="text-white ml-2" />
            <FaLinkedinIn size={50} className="text-white ml-2" />
            <FaYoutube size={50} className="text-white ml-2" />
            </div>
          </div>

            
          </div>
          
          
        </div>
    </div>
  );
};

export default StickyFooter;