import React, { useEffect, useState } from "react";
import Api from "../api/Api";
import Tabbar from "./Landingpage/Tabbar";
import useWindowDimensions from "../hooks/useWindowDimensions";

const DataPrivacy = () => {
  const [privacy, setPrivacy] = useState(null);
  const { width } = useWindowDimensions(window.innerWidth < 800);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await Api.get("/api/setting/dataprivacy");
        console.log(response.data);
        setPrivacy(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);
  if (privacy) {
    return (
      <>
        <Tabbar />
        {width < 800 ? (
          <div dangerouslySetInnerHTML={{ __html: privacy.review }} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: privacy.review }} />
        )}
      </>
    );
  }
};
export default DataPrivacy;
