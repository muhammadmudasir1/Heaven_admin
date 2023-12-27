import React from 'react'
import Tabbar from './Landingpage/Tabbar'
import Filtersearch from "./Landingpage/Filtersearch";
import Doubleslider from "./Landingpage/Doubleslider";
import Profilecontainer from "./Landingpage/Profilecontainer";
import MaskSlider from "./Landingpage/MaskSlider";

const Home = () => {
  return (
    <>
      <Tabbar />
      <Filtersearch />
      <Doubleslider />
      <Profilecontainer />
      <MaskSlider />

    </>
  )
}

export default Home