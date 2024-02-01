import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PaginationClass from "../ComparisonComponet/PaginationClass";
import Api from "../../api/Api";

const SLAView = () => {
  const [CardPerPage, setCardPerPage] = useState(5);
  const [CurrentPage, setCurrentPage] = useState(1);

  const navigation = useNavigate();

  useEffect(() => {
    console.log(CardPerPage);
  }, [CardPerPage]);

  const [Cards, setCards] = useState([
  ]);

  useEffect(() => {
    const SLA = async () => {
      try {
        const response = await Api.get(`api/products/type/1`);
        setCards(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    SLA();
  }, []);

  const indexOfLastCard = CurrentPage * CardPerPage;
  const indexOfFirstCard = indexOfLastCard - CardPerPage;
  const currentCard = Cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (PageNumber) => {
    setCurrentPage(PageNumber);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-7 p-5 w-full">
        <div className="col-span-5 h-325px pr-12 pl-6">
          {currentCard.map((Cards) => {
            return (
              <div
                onClick={(e) => {
                  navigation(`/productreview/${Cards.Id}`);
                }}
                className="flex items-center mb-6 shadow-for-app bg-white/95 rounded-lg cursor-pointer"
                style={{
                    boxShadow:
                      "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
                  }}
              >
                <div
                  className="rounded-l-xl lg:w-1/3 bg-cover bg-center w-full h-[358.18px]"
                  style={{
                    backgroundImage: `url(/${Cards.ProductImages[0].path})`,
                  }}
                ></div>
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
                    {[...Array.from({ length: 5-Cards.overall_rating }, (_, index) => index + 1)].map((_, index) => (
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
                    <Link
                      to={"../OneReview"}
                      className="underline decoration-cyan-500 underline-offset-8 decoration-4 text-neutral-700 text-xl font-normal"
                    >
                      Read More
                    </Link>
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
      <PaginationClass
        currentPage={CurrentPage}
        cardsPerPage={CardPerPage}
        totalcards={Cards}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SLAView;
