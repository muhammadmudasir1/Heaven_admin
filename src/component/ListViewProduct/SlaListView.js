import { useEffect, useState } from "react";
import Api from "../../api/Api";
import { Helmet } from "react-helmet";
import ListView from "./ListView";

const SlaListView = () => {
  const [Cards, setCards] = useState([]);
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const getHeader = async () => {
      try {
        const response = await Api.get(`api/setting/slaHeader`);
        setTitle(response.data.title)
        setDescription(response.data.description)
      } catch (error) {
        console.log(error);
      }
    };
    getHeader();
  }, []);

  useEffect(() => {
    const SLA = async () => {
      try {
        const response = await Api.get(`api/products/type/1`);
        setCards(response.data);
        setIsLoader(false);
      } catch (error) {
        console.log(error);
      }
    };
    SLA();
  }, []);




  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel="canonical" href="https://www.3dheaven.de/product/sla " />
      </Helmet>
      <div className='px-16 bg-[#00CED1] py-4'>
        <h1 className=' text-3xl font-bold text-white'>{title}</h1>
        <p className='text-white'>{description}</p>
      </div>

      <ListView Cards={Cards} isLoading={isLoader} />
    </>

  );
};

export default SlaListView;
