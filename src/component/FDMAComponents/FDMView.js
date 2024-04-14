import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiStar } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Api from "../../api/Api";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import PaginationClass from "../ComparisonComponet/PaginationClass";
import LoadingCard from "../LoadingCard";
import LoadingCardMobile from "../LoadingCardMobile";
import { Helmet } from "react-helmet";

const FDMView = () => {
  const navigation = useNavigate();
  const { width } = useWindowDimensions()
  const [CardPerPage, setCardPerPage] = useState(5);
  const [CurrentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation()
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)

  useEffect(() => {
    const getHeader = async () => {
      try {
        const response = await Api.get(`api/setting/fdmHeader`);
        setTitle(response.data.title)
        setDescription(response.data.description)
      } catch (error) {
        console.log(error);
      }
    };
    getHeader();
  }, []);


  useEffect(() => {
    console.log(CardPerPage);
  }, [CardPerPage]);

  const [Cards, setCards] = useState([
  ]);
  const [isLoader, setIsLoader] = useState(true);
  const [isMobileLoader, setIsMobileLoader] = useState(true)
  useEffect(() => {
    const FDM = async () => {
      try {
        const response = await Api.get(`api/products/type/2`);
        console.log(response.data)
        setCards(response.data);
        setIsLoader(false);
        setIsMobileLoader(false);
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

  const cardPrint=(Cards,index)=>{
    return (
      <>
      <div
        onClick={(e) => {
          const name = Cards.product_name.replaceAll(' ', '-')
          navigation(`/productreview/${name}/${Cards.Id}`);
        }}
        className="lg:flex items-center mb-6 shadow-for-app bg-white/95 rounded-xl cursor-pointer mr-4 ml-4 lg:ml-0 lg:mr-0"
        style={{
          boxShadow:
            "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
        }}
      >
        <div
          className="rounded-l-xl lg:w-1/3 overflow-hidden w-full lg:h-[358.18px] p-4"
        >
          <img className=" object-cover h-full w-full"
            src={`/api/${Cards.ProductImages[0].path}`}
            alt={Cards.ProductImages[0].altText}
            title={Cards.ProductImages[0].altText}
          />
        </div>
        {/* style={{ backgroundImage: `url(/api/${Cards.ProductImages[0].path})`, }} */}
        <div className="lg:pl-8 lg:w-3/5 w-full">
          <h1 className="text-neutral-800 lg:text-3xl text-xl font-semibold py-4 lg:text-left text-center px-4 lg:px-0 ">
            {Cards.product_name}
          </h1>
          <div className="flex pb-4 lg:justify-left justify-center">
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
          <p className="lg:pb-4 text-neutral-700 lg:text-xl text-base px-4 lg:px-2 lg:text-left text-center font-light lg:line-clamp-none line-clamp-3 ">
            {Cards.discription}
          </p>
          <div className="flex items-center lg:justify-start justify-center lg:pb-4 lg:mb-0 my-6">
            <p
              onClick={(e) => {
                const name = Cards.product_name.replaceAll(' ', '-')
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
      {width<600 && (index + 1) % 3 === 0 && <div key={``} className=" h-[50px] bg-red-300 mb-4" />}
      </>
    );
  }


  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel="canonical" href="https://www.3dheaven.de/fdm " />
      </Helmet>
      {
        // width > 600 ?
          <>
            <div className='px-16 bg-[#00CED1] py-4'>
              <h1 className=' text-3xl font-bold text-white'>{title}</h1>
              <p className='text-white'>{description}</p>
            </div>
            <div className="flex w-full lg:px-8 mt-4">
              <div className="flex flex-col grow">
                {isLoader ?
                  <div className="w-full pr-6">
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                  </div>
                  :
                  <div className="flex flex-col grow  lg:pr-12 lg:pl-6">
                    {
                      width>600?
                      currentCard.map(cardPrint)
                      :Cards.map(cardPrint)
                    }
                  {/* {currentCard.map((Cards) => {
                      return (
                        <div
                          onClick={(e) => {
                            const name = Cards.product_name.replaceAll(' ', '-')
                            navigation(`/productreview/${name}/${Cards.Id}`);
                          }}
                          className="lg:flex items-center mb-6 shadow-for-app bg-white/95 rounded-xl cursor-pointer"
                          style={{
                            boxShadow:
                              "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
                          }}
                        >
                          <div
                            className="rounded-l-xl lg:w-1/3 overflow-hidden w-full lg:h-[358.18px] p-4"
                          >
                            <img className=" object-cover h-full w-full"
                              src={`/api/${Cards.ProductImages[0].path}`}
                              alt={Cards.ProductImages[0].altText}
                              title={Cards.ProductImages[0].altText}
                            />
                          </div>
                          {/* style={{ backgroundImage: `url(/api/${Cards.ProductImages[0].path})`, }} */}
                          {/* <div className="lg:pl-8 lg:w-3/5 w-full">
                            <h1 className="text-neutral-800 lg:text-3xl text-xl font-semibold py-4 lg:text-left text-center ">
                              {Cards.product_name}
                            </h1>
                            <div className="flex pb-4 lg:justify-left justify-center">
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
                            <p className="lg:pb-4 text-neutral-700 lg:text-xl text-base px-4 lg:px-2 lg:text-left text-center font-light lg:line-clamp-none line-clamp-3 ">
                              {Cards.discription}
                            </p>
                            <div className="flex items-center lg:justify-start justify-center lg:pb-4 lg:mb-0 my-6">
                              <p
                                onClick={(e) => {
                                  const name = Cards.product_name.replaceAll(' ', '-')
                                  navigation(`/productreview/${name}/${Cards.Id}`);
                                }}
                                className="underline decoration-cyan-500 underline-offset-8 decoration-4 text-neutral-700 text-xl font-normal"
                              >
                                {t('Readmore')}
                              </p>
                              <MdKeyboardDoubleArrowRight size={25} />
                            </div>
                          </div>
                        </div> */}
                      {/* ); */}
                    {/* })}  */}
                  </div>
                }
              </div>
              <div className="lg:block hidden lg:bg-white h-[600px] max-h-[600px] min-w-[200px] lg:shadow-lg lg:shadow-slate-600"
                style={{
                  boxShadow:
                    "-8px 0 15px rgba(203, 213, 225, 0.3), 0 8px 15px rgba(203, 213, 225, 0.3)",
                }} />

            </div>
            <div className="lg:flex hidden w-full  justify-center ">
              {!isLoader && (
                <PaginationClass
                  currentPage={CurrentPage}
                  cardsPerPage={CardPerPage}
                  totalcards={Cards}
                  onPageChange={handlePageChange}
                />
              )}


            </div>
          </>
          // : <div>
            // {isMobileLoader ? (
              // <div>
              //   <LoadingCardMobile />
              //   <LoadingCardMobile />
              //   <LoadingCardMobile />
              //   <LoadingCardMobile />
              // </div>) : (
              // <>
              //   {Cards.map((items, index) => {
              //     return <>
              //       <div key={index} className='grid grid-cols-3 m-4 rounded-xl' style={
              //         { boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }
              //       }>
              //         {/* <div className='h-full w-full bg-cover bg-center col-span-1 rounded-l-xl' 
              //     style={{ backgroundImage: `url(/api/${items.ProductImages[0].path})` }} /> */}
              //         <div
              //           className="col-span-1 rounded-l-xl overflow-hidden w-full h-full]"
              //         >
              //           <img className=" object-cover h-full w-full"
              //             src={`/api/${items.ProductImages[0].path}`}
              //             alt={items.ProductImages[0].altText}
              //             title={items.ProductImages[0].altText}
              //           />
              //         </div>
              //         <div className='col-span-2 ml-2 flex flex-col items-start justify-center'>
              //           <h1 className='mt-5 text-xl font-bold pr-2 line-clamp-2'>{items.product_name}</h1>
              //           <div className='flex pt-2'>
              //             {items.overall_rating > 0 && [...Array.from({ length: items.overall_rating }, (_, index) => index + 1)].map((_, index) => (
              //               <CiStar
              //                 key={index}
              //                 size={25}
              //                 className="text-amber-500"
              //               />
              //             ))}
              //             {[...Array.from({ length: 5 - items.overall_rating }, (_, index) => index + 1)].map((_, index) => (
              //               <CiStar
              //                 key={index}
              //                 size={25}
              //                 className="text-gray-500"
              //               />
              //             ))}
              //           </div>
              //           <p className='line-clamp-3 pt-2 pr-2  text-neutral-700'>{items.discription}</p>
              //           <div className='flex items-center py-2 mb-2'>
              //             <p
              //               onClick={(e) => {
              //                 const name = items.product_name.replaceAll(' ', '-')
              //                 navigation(`/productreview/${name}/${items.Id}`);
              //               }}
              //               className='underline decoration-cyan-500 underline-offset-8 decoration-4 text-neutral-700 font-normal '>Read More</p>
              //             <MdKeyboardDoubleArrowRight size={20} />
              //           </div>
              //         </div>
              //       </div>

              //       {(index + 1) % 3 === 0 && index !== currentCard.length - 1 && <div key={``} className="h-12 bg-red-300" />}
              //     </>
              //   })}
              // </>
            // )}
          // </div>
      }
    </>

  );
};

export default FDMView;
