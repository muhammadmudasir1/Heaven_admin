import React, { useEffect, useState } from "react";
import Api from "../api/Api";
import Tabbar from "./Landingpage/Tabbar";

const DataPrivacy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const Fetchdata = async () => {
      try {
        const response = await Api.get("/api/setting/dataprivacy");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    Fetchdata();
  }, []);
  if (data) {
      return (
      <>
          <Tabbar />
          {/* <div> */}
          {data.length > 0 &&
          <div className='py-10 px-2 w-full' dangerouslySetInnerHTML={{ __html:data[0].review }} />
        // <NonEditableEditor text={data[0].review}/> 
         } 

          {/* </div> */}
        </>
      );
  }
};
export default DataPrivacy;
