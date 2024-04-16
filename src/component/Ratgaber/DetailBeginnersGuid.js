import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../api/Api";
import Tabbar from "../Landingpage/Tabbar";
import NonEditableEditor from "../Editor/NonEditableEditor";

const DetailBeginnersGuid = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await Api.get(`/api/beginnersGuid/${id}`);
        setData(result.data);
        console.log("reuslt check");
        console.log(result.data);
        setIsLoading(false);
        console.log("reuslt checked");
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Tabbar />
      <div
        className="lg:pt-9 lg:pb-24 lg:px-8 lg:w-full bg-stone-50 mx-4 rounded-xl my-8 px-4 py-3"
        id="review"
      >
        {isLoading ? (
          <div className="py-10 bg-gray-100 w-full h-96 animate-pulse px-4">
            <div className="w-full h-12 bg-gray-200 rounded-2xl animate-pulse " />
            <div className="w-full mt-8">
              <div className="w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse " />
              <div className="w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse " />
              <div className="w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse " />
              <div className="w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse " />
              <div className="w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse " />
              <div className="w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse " />
              <div className="w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse " />
              <div className="w-full h-6 mt-2 bg-gray-200 rounded-2xl animate-pulse " />
            </div>
          </div>
        ) : (
          <>
            <img src={`/api/${data.image}`} alt="ponka" className="w-full" />
            <h1 className="text-2xl py-2 font-bold lg:text-4xl lg:py-2 lg:font-bold">
              {data.Title}
            </h1>
            <NonEditableEditor text={data.body} />
            {/* <div className='py-10 bg-stone-100 w-full' dangerouslySetInnerHTML={{ __html: data.body }} /> */}
          </>
        )}
      </div>
    </>
  );
};

export default DetailBeginnersGuid;
