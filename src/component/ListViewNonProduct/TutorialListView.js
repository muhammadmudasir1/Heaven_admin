import { useEffect, useState } from "react";
import Api from "../../api/Api";
import { Helmet } from "react-helmet";
import ListView from "./ListView";
import Tabbar from "../Landingpage/Tabbar";

const TutorialListView = () => {
  const [Cards, setCards] = useState([]);
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const getHeader = async () => {
      try {
        const response = await Api.get(`api/setting/tutorialHeader`);
        setTitle(response.data.title)
        setDescription(response.data.description)
      } catch (error) {
        console.log(error);
      }
    };
    getHeader();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await Api.get(`/api/beginnersGuid`);
            setCards(response.data)
            setIsLoader(false);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
}, []);




  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel="canonical" href="https://www.3dheaven.de/ratgaber" />
      </Helmet>
      <Tabbar/>
      <div className='px-16 bg-[#F2F4F3] py-4'>
        <h1 className=' text-3xl font-bold '>{title}</h1>
        <p className=''>{description}</p>
      </div>

      <ListView Cards={Cards} isLoading={isLoader} isNews={false}/>
    </>

  );
};

export default TutorialListView;
