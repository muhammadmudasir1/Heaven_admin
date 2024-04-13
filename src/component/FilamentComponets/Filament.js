import React, { useState } from 'react'
import Tabbar from '../Landingpage/Tabbar'
import Banner from '../SingleReviewComponents/Banner'
import FilamentView from './FilamentView'
import { Helmet } from 'react-helmet'
import Api from '../../api/Api'
import { useEffect } from 'react'

const Filament = () => {
  const [title,setTitle]=useState(null)
  const [description,setDescription]=useState(null)


  useEffect(() => {
    const getHeader = async () => {
      try {
        const response = await Api.get(`api/setting/filamentHeader`);
        setTitle(response.data.title)
        setDescription(response.data.description)
      } catch (error) {
        console.log(error);
      }
    };
    getHeader();
  }, []);

  return (
    <>
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <link rel="canonical" href="https://www.3dheaven.de/filament" />
    </Helmet>
    <Tabbar/>
    <div className='px-16 bg-[#008080] py-4'>
      <h1 className=' text-3xl font-bold text-white'>{title}</h1>
      <p className='text-white'>{description}</p>
    </div>
    {/* <Banner/> */}
    <FilamentView/>
    </>
  )
}

export default Filament
