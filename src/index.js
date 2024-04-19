import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App';
import "./style.css"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import langApi from "i18next-http-backend"

i18n
  .use(initReactI18next)
  .use(langApi)
  .use(LanguageDetector)
  .init({
    fallbackLng:"en",
    detection:{
        order: ['htmlTag','cookie', 'localStorage', 'sessionStorage', ],

    },
    backend:{
        loadPath:'/assets/locales/{{lng}}/translation.json'
    },
    react:{useSuspense:false}

  })
  .catch((error) => {
    console.error('Error initializing i18n:', error);
  });



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
)