import React, { useEffect, useState } from "react";
import LazyLoad from 'react-lazyload'


const Cookies = () => {
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
              className="w-full lg:h-[280px] h-[515px] px-6 rounded-xl flex flex-col items-start justify-center bg-white mx-8 mb-8 z-50"
              style={{
                boxShadow:
                  "-8px 0 15px rgba(0, 0, 0, 0.5), 0 8px 15px rgba(0, 0, 0, 0.5)",
              }}
            >
              <h1 className="text-2xl font-bold py-3">We use cookies</h1>
              <p className="text-gray-400 text-xl py-3">
                If you click ‘accept’, we and third-party providers will process
                your personal data and store information (e.g., through cookies
                on your device). In accordance with Art. 49 para. 1 lit. a GDPR,
                your consent also includes the transfer to third countries
                (e.g., the USA). See our privacy policy for more details.
              </p>
              <div className="flex">
                <button
                  type="button"
                  onClick={handleAccept}
                  className="hover:underline decoration-4 decoration-blue-500 text-lg text-[#444444] mr-6"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={handleReject}
                  className=" hover:underline decoration-4 decoration-blue-500 text-lg text-[#444444]"
                >
                  Decline
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
