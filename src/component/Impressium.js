import React, { useEffect, useState } from "react";
import Api from "../api/Api";
import Tabbar from "./Landingpage/Tabbar";

const Impressium = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get("/api/setting/imprint");
        console.log(response.data[0].review);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Tabbar />
      <div>
        {data &&
        <div className='py-10 px-2 w-full' dangerouslySetInnerHTML={{ __html: data[0].review }} />
         } 
      </div>
    </>
  );
};

export default Impressium;
