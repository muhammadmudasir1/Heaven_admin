import React from 'react'
import CookieConsent from 'react-cookie-consent'

const Cookies = () => {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Sure Man!!"
                enableDeclineButton
                declineButtonText="Decline Man!!"
                declineCookieValue={false}
                cookieName="myAwesomeCookieName2"
                style={{ background: "#026CC4", height: '100px', alignItems: "center" }}
                buttonStyle={{ backgroundColor: "#00CED1"}}
                declineButtonStyle={{backgroundColor: "#00CED1"}}
                expires={150}
            >
                This website uses cookies to enhance the user experience.
                <span className=''>Osama is don 😎😎</span>
            </CookieConsent>
        </div>
    )
}

export default Cookies
