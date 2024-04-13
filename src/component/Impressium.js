import React, { useEffect, useState } from "react";
import Api from "../api/Api";
import Tabbar from "./Landingpage/Tabbar";

const Impressium = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get("/api/setting/imprint");
        console.log(response.data);
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
        {data ? (
          <div dangerouslySetInnerHTML={{ __html: data.review }}/>
        ) : (
          <h1>Loading data</h1>
        )}
      </div>
    </>
  );
};

export default Impressium;
