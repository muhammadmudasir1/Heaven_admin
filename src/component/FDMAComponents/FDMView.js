import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PaginationClass from "../ComparisonComponet/PaginationClass";
import Api from "../../api/Api";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import LoadingCard from "../LoadingCard";
import { useTranslation } from "react-i18next";

const FDMView = () => {
  const navigation = useNavigate();
  const { width } = useWindowDimensions()
  const [CardPerPage, setCardPerPage] = useState(5);
  const [CurrentPage, setCurrentPage] = useState(1);
  const {t}=useTranslation()
  useEffect(() => {
    console.log(CardPerPage);
  }, [CardPerPage]);

  const [Cards, setCards] = useState([
  ]);
  const [isLoader, setIsLoader] = useState(true);
  
  useEffect(() => {
    const FDM = async () => {
      try {
        const response = await Api.get(`api/products/type/2`);
        setCards(response.data);
        setIsLoader(false);
      } catch (error) {
        console.log(error);
      }
    };
    FDM();
  }, []);

  const indexOfLastCard = CurrentPage * CardPerPage;
  const indexOfFirstCard = indexOfLastCard - CardPerPage;
  const currentCard = Cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (PageNumber) => {
    setCurrentPage(PageNumber);
  };


  return (
    width > 600 ?
      <div className="flex flex-col items-center">
        {isLoader ? (<LoadingCard />) : (
          <div className="grid grid-cols-7 p-5 w-full">

            <div className="col-span-5 h-325px pr-12 pl-6">
              {currentCard.map((Cards) => {
                return (
                  <div
                    onClick={(e) => {
                      const name=Cards.product_name.replaceAll(' ','-')
                      navigation(`/productreview/${name}/${Cards.Id}`);
                    }}
                    className="flex items-center mb-6 shadow-for-app bg-white/95 rounded-xl cursor-pointer"
                    style={{
                      boxShadow:
                        "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
                    }}
                  >
                    <div
                      className="lg:w-1/3 bg-cover bg-center w-full h-[358.18px] rounded-l-xl"
                      style={{ backgroundImage: `url(/api/${Cards.ProductImages[0].path})`, }}
                    >
                    </div>
                    <div className="lg:pl-8 w-3/5 ">
                      <h1 className="text-neutral-800 text-3xl font-semibold py-4">
                        {Cards.product_name}
                      </h1>
                      <div className="flex pb-4">
                        {Cards.overall_rating > 0 && [...Array.from({ length: Cards.overall_rating }, (_, index) => index + 1)].map((_, index) => (
                          <CiStar
                            key={index}
                            size={50}
                            className="text-amber-500"
                          />
                        ))}
                        {[...Array.from({ length: 5 - Cards.overall_rating }, (_, index) => index + 1)].map((_, index) => (
                          <CiStar
                            key={index}
                            size={50}
                            className="text-gray-500"
                          />
                        ))}
                      </div>
                      <p className="pb-4 text-neutral-700 text-xl font-light ">
                        {Cards.discription}
                      </p>
                      <div className="flex items-center pb-4">
                        <p
                          onClick={(e) => {
                            const name=Cards.product_name.replaceAll(' ','-')
                            navigation(`/productreview/${name}/${Cards.Id}`);
                          }}
                          className="underline decoration-cyan-500 underline-offset-8 decoration-4 text-neutral-700 text-xl font-normal"
                        >
                          {t('Readmore')}
                        </p>
                        <MdKeyboardDoubleArrowRight size={25} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="lg:bg-white lg:h-full lg:w-full lg:col-span-2 lg:shadow-lg lg:shadow-slate-600"
              style={{
                boxShadow:
                  "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
              }}
            />
          </div>
        )}
        {!isLoader && (
          <PaginationClass
            currentPage={CurrentPage}
            cardsPerPage={CardPerPage}
            totalcards={Cards}
            onPageChange={handlePageChange}
          />
        )}
      </div>
      : <div>
        {Cards.map((items, index) => {
          return <>
            <div key={index} className='grid grid-cols-3 m-4 rounded-xl' style={
              { boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }
            }>
              <div className='h-full w-full bg-cover bg-center col-span-1 rounded-l-xl' style={{ backgroundImage: `url(/api/${items.ProductImages[0].path})` }} />
              <div className='col-span-2 ml-2 flex flex-col items-start justify-center'>
                <h1 className='mt-5 text-xl font-bold pr-2 line-clamp-2'>{items.product_name}</h1>
                <div className='flex pt-2'>
                  {items.overall_rating > 0 && [...Array.from({ length: items.overall_rating }, (_, index) => index + 1)].map((_, index) => (
                    <CiStar
                      key={index}
                      size={25}
                      className="text-amber-500"
                    />
                  ))}
                  {[...Array.from({ length: 5 - items.overall_rating }, (_, index) => index + 1)].map((_, index) => (
                    <CiStar
                      key={index}
                      size={25}
                      className="text-gray-500"
                    />
                  ))}
                </div>
                <p className='line-clamp-3 pt-2 pr-2  text-neutral-700'>{items.discription}</p>
                <div className='flex items-center py-2 mb-2'>
                  <p 
                  onClick={(e) => {
                    const name=items.product_name.replaceAll(' ','-')
                    navigation(`/productreview/${name}/${items.Id}`);
                  }}
                  className='underline decoration-cyan-500 underline-offset-8 decoration-4 text-neutral-700 font-normal '>{t('Readmore')}</p>
                  <MdKeyboardDoubleArrowRight size={20} />
                </div>
              </div>
            </div>

            {(index + 1) % 3 === 0 && index !== currentCard.length - 1 && <div key={``} className="h-12 bg-red-300" />}
          </>
        })}
      </div>

  );
};

export default FDMView;
