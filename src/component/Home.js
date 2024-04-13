import React from 'react'
import Tabbar from './Landingpage/Tabbar'
import Filtersearch from "./Landingpage/Filtersearch";
import Doubleslider from "./Landingpage/Doubleslider";
import Profilecontainer from "./Landingpage/Profilecontainer";
import MaskSlider from "./Landingpage/MaskSlider";
import NewsAndEvent from './Landingpage/NewsAndEvent';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>3DHeaven | Home</title>
        <meta name='description' content='3dheaven bietet praxisnahe Testberichte über digitale Fertigungsmethoden. Druckertuning, aktuelle Hypes auf dem 3D-Druckermarkt' />
        <link rel="canonical" href="https://www.3dheaven.de/" />
      </Helmet>
      <Tabbar />
      <Filtersearch />
      <Doubleslider />
      <Profilecontainer />
      <MaskSlider />
      <NewsAndEvent/>

    </>
  )
}

export default Home