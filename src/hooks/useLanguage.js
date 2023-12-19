import React, { useState } from 'react'
import i18next from 'i18next'

const useLanguage = () => {
    const setlang=(langCode)=>{
        i18next.changeLanguage(langCode)
        
    }
    
    return setlang
}

export default useLanguage