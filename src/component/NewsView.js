import { useEffect, useState } from 'react'
import NewsBanner from './NewsComponents/NewsBanner'
import Tabbar from './Landingpage/Tabbar'
import AddAndNews from './NewsComponents/AddAndNews'
import Api from '../api/Api'
import { Helmet } from 'react-helmet'

const NewsView = () => {
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  useEffect(() => {
    const getHeader = async () => {
      try {
        const response = await Api.get(`api/setting/newsHeader`);
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
        <meta name='description' content={description} />
        <link rel="canonical" href="https://www.3dheaven.de/news" />
      </Helmet>
      <Tabbar />
      <NewsBanner />
      <AddAndNews />
    </div>
  )
}

export default NewsView
