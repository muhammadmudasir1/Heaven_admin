import React, { useEffect, useState } from "react";
import Api from "../api/Api";
import Tabbar from "./Landingpage/Tabbar";

const DataPrivacy = () => {
  const [privacy, setPrivacy] = useState(null);

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
          <div dangerouslySetInnerHTML={{ __html: privacy.review }} />
        </>
      );
  }
};
export default DataPrivacy;
