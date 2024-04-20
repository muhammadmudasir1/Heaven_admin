import React, { useEffect, useState, lazy, Suspense } from "react";

const CookieContent = lazy(() => import("./CookieContent"));

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
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <CookieContent
            handleAccept={handleAccept}
            handleReject={handleReject}
          />
        </Suspense>
      </div>
    );
  }

  return null;
};

export default Cookies;
