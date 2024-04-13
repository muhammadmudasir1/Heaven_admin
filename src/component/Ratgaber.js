import {useState,useEffect} from 'react'
import Tabbar from '../component/Landingpage/Tabbar'
import RatgaberBanner from './Ratgaber/RatgaberBanner'
import RatgaberView from './Ratgaber/RatgaberView'
import { Helmet } from 'react-helmet'
import Api from '../api/Api'

const Ratgaber = () => {
  const [title,setTitle]=useState(null)
  const [description,setDescription]=useState(null)
  useEffect(() => {
    const getHeader = async () => {
      try {
        const response = await Api.get(`api/setting/tutorialHeader`);
        // console.log(response.data)
        setTitle(response.data.title)
        setDescription(response.data.description)
      } catch (error) {
        console.log(error);
      }
    };
    getHeader();
  }, []);
  return (
    <div>
      <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <link rel="canonical" href="https://www.3dheaven.de/ratgaber" />
    </Helmet>
      <Tabbar/>
      <RatgaberBanner/>
      <RatgaberView/>
    </div>
  )
}

export default Ratgaber
