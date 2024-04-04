import React, { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import "./cookie.css";
const Cookies = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [isHover, setIsHover] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        }

        const handleHover = () => {
            setIsHover(true);
        }

        window.addEventListener("resize", handleResize);
        document.addEventListener("mouseenter", handleHover);
        document.addEventListener("mouseleave", () => setIsHover(false));

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mouseenter", handleHover);
            document.removeEventListener("mouseleave", () => setIsHover(false));
        };
    }, []);
    return (
        <>
            {!isMobile ? (
                <div>
                    <CookieConsent
                        location="bottom"
                        buttonText="Accept all"
                        enableDeclineButton
                        declineButtonText="Decline"
                        declineCookieValue={false}
                        cookieName="myAwesomeCookieName2"
                        style={{
                            backgroundColor: "white",
                            // display: "flex",
                            // flexDirection: "column",
                            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.9)",
                            borderRadius: "40px",
                            margin: "20px",
                            marginRight: "20px",
                            height: "280px",
                            width: "1200px",
                            alignItems: "center",
                            placeItems: "center",
                            padding: "12px"
                        }}
                        buttonStyle={isHover ? {
                            backgroundColor: "white",
                            color: "black",
                        } : {
                            backgroundColor: "white",
                            color: "black",
                            textDecorationLine: "underline",
                            textDecorationColor: "#00CED1",
                            textDecorationThickness: "3px",
                            fontSize: "20px",
                            padding: "12px",
                        }}

                        declineButtonStyle={isHover ? {
                            backgroundColor: "white",
                            color: "black",
                        } : {
                            backgroundColor: "white",
                            color: "black",
                            textDecorationLine: 'underline',
                            textDecorationColor: "#00CED1",
                            textDecorationThickness: "3px",
                            fontSize: "20px",

                        }}
                        expires={150}
                    >
                        <div className='flex-col px-8 '>
                            <h1 className='font-bold text-xl text-black pt-4'>We Use Cookies</h1>
                            <p className='text-gray-400 pt-4'>If you click ‘accept’, we and third-party providers will process your personal data and store information e.g: through cookies on your device. In accordance with Art. 49 para. 1 lit. a GDPR, your consent also includes the transfer to third countries, eg: the. USA. Data protection declaration.See our <a href="http://" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400'>privacy policy</a></p>
                        </div>

                    </CookieConsent>
                </div>
            ) : (
                <div>
                    <CookieConsent
                        location="bottom"
                        buttonText="Accept all"
                        enableDeclineButton
                        declineButtonText="Decline"
                        declineCookieValue={false}
                        cookieName="myAwesomeCookieName2"
                        style={{
                            backgroundColor: "white",
                            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.9)",
                            borderRadius: "40px",
                            margin: "20px",
                            marginRight: "20px",
                            height: "515px",
                            width: "329px",
                            alignItems: "center",
                            placeItems: "center",
                        }}
                        buttonStyle={isHover ? {
                            backgroundColor: "white",
                            color: "black",
                        } : {
                            backgroundColor: "white",
                            color: "black",
                            textDecorationLine: "underline",
                            textDecorationColor: "#00CED1",
                            textDecorationThickness: "3px",
                            fontSize: "20px",
                            padding: "12px",
                        }}

                        declineButtonStyle={isHover ? {
                            backgroundColor: "white",
                            color: "black",
                        } : {
                            backgroundColor: "white",
                            color: "black",
                            textDecorationLine: 'underline',
                            textDecorationColor: "#00CED1",
                            textDecorationThickness: "3px",
                            fontSize: "20px",

                        }}
                        expires={150}
                    >
                        <div className='flex-col px-8 w-full h-full'>
                            <h1 className='font-bold text-xl text-black pt-4'>We Use Cookies</h1>
                            <p className='text-gray-400 pt-4'>If you click ‘accept’, we and third-party providers will process your personal data and store information e.g: through cookies on your device. In accordance with Art. 49 para. 1 lit. a GDPR, your consent also includes the transfer to third countries, eg: the. USA. Data protection declaration.See our <a href="http://" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400'>privacy policy</a></p>
                        </div>

                    </CookieConsent>
                </div>
            )}
        </>
    )
}

export default Cookies
