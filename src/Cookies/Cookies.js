import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LazyLoad from 'react-lazyload'


const Cookies = () => {
  const { t } = useTranslation()
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    const isAccepted = getCookie("cookieConsent");
    setAccept(isAccepted === "accepted");
  }, []);

  const handleAccept = () => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie =
      "cookieConsent=accepted; expires=" +
      expirationDate.toUTCString() +
      "; path=/";
    setAccept(true);
  };

  const handleReject = () => {
    document.cookie = "cookieConsent=rejected; path=/";
    setAccept(true);
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  if (!accept) {
    return (
      <>
          <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center">
      {/* <LazyLoad> */}
            <div
              className="w-full px-4 py-4 rounded-xl flex flex-col items-start justify-center bg-white mx-4 mb-4 z-50"
              style={{
                boxShadow:
                  "-4px 0 10px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h1 className="text-xl font-semibold ">{t('cookie_bannar_heading')}</h1>
              <p className="text-gray-400 text-base pt-1 pb-3 ">
                {t('cookie_bannar_text')}
              </p>
              <div className="flex">
                <button
                  type="button"
                  onClick={handleAccept}
                  className="hover:underline decoration-4 decoration-blue-500 text-base text-[#444444] mr-6"
                >
                  {t('accept')}
                </button>
                <button
                  type="button"
                  onClick={handleReject}
                  className=" hover:underline decoration-4 decoration-blue-500 text-base text-[#444444]"
                >
                  {t('reject')}
                </button>
              </div>
            </div>
              {/* </LazyLoad> */}
          </div>
      </>  
    );
  }
  
  return null;
};

export default Cookies;