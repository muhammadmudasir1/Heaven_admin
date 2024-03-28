import i18next from 'i18next'

const useLanguage = () => {
    const setlang=(langCode)=>{
        i18next.changeLanguage(langCode)
        console.log("language is hit")
        
    }
    
    return setlang
}

export default useLanguage