import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import Api from "../../api/Api";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import LoadingCard from "../LoadingCard";
import ComparisionCard from "./ComparisionCard";
import CouponPopUp from "./CouponPopUp";
import PaginationClass from "./PaginationClass";
import SelectedCard from "./SelectedCard";

const StickyComparisonBar = (setIsSticky) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsSticky]);
};

const ComparisionTabbar = ({ productType, setProductType }) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  return width > 600 ? (
    <ul className="flex pmb-5 items-center justify-center ">
      <div className="flex w-3/4 justify-around text-xl h-full">
        <li
          className={`py-3 cursor-pointer px-2 list-none ${productType == 1 && "active"
            }`}
          onClick={(e) => {
            setProductType(1);
          }}
        >
          <p>{t("SLA")}</p>
        </li>
        <li
          className={`py-3 cursor-pointer px-2 list-none ${productType == 2 && "active"
            }`}
          onClick={(e) => {
            setProductType(2);
          }}
        >
          <p>{t("fdm")}</p>
        </li>
        <li
          className={`py-3 cursor-pointer px-2 list-none ${productType == 3 && "active"
            }`}
          onClick={(e) => {
            setProductType(3);
          }}
        >
          <p>{t("laserCutter")}</p>
        </li>
        <li
          className={`py-3 cursor-pointer px-2 list-none ${productType == 4 && "active"
            }`}
          onClick={(e) => {
            setProductType(4);
          }}
        >
          <p>{t("3DScanner")}</p>
        </li>
      </div>
    </ul>
  ) : (
    <select
      className="w-full py-2 px-2 text-center"
      value={productType}
      onChange={(e) => {
        setProductType(e.target.value);
      }}
    >
      <option className="text-center" value={1}>
        {t("SLA")}
      </option>
      <option className="text-center" value={2}>
        {t("fdm")}
      </option>
      <option className="text-center" value={3}>
        {t("laserCutter")}
      </option>
      <option className="text-center" value={4}>
        {t("3DScanner")}
      </option>
    </select>
  );
};

const CompareScrollandAdd = ({ reload }) => {
  const [cards, setCards] = useState([]);
  const [cardPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();
  const [openCouponCArd, setOpenCouponCard] = useState(false);
  const [CouponCardLocation, setCouponCardLocation] = useState(0);
  const [coupons, setCoupons] = useState([]);
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  const [productType, setProductType] = useState(1);
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const checkEmail = (email) => {
    const regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regularExpression.test(email);
  };
  const emailApi = async () => {
    if (checkEmail(email)) {
      try {
        const response = await Api.post("/api/setting/addNewsLetters", email);
        console.log(response.data);
        setEmail("");
        alert("News Letter Subscribe");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Enter Correct Email");
    }
  };


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    let manufacturersParams = queryParams.get("manufacturers");
    manufacturersParams = JSON.parse(decodeURIComponent(manufacturersParams));
    let productsParams = queryParams.get("products");
    productsParams = JSON.parse(decodeURIComponent(productsParams));
    let priceParams = queryParams.get("price");
    priceParams = JSON.parse(decodeURIComponent(priceParams));
    if (priceParams == 1) {
      priceParams = 500;
    } else if (priceParams == 2) {
      priceParams = 1000;
    } else if (priceParams == 3) {
      priceParams = 1500;
    } else if (priceParams == 4) {
      priceParams = 2000;
    } else if (priceParams == 5) {
      priceParams = 2500;
    }

    const fetchData = async () => {
      console.log("Reloaded")
      setSelectedCards([]);
      setIsloading(true);
      setCards([]);
      const response = await Api.post("/api/products/filter", {
        manufacturers: manufacturersParams,
        products: productsParams,
        price: priceParams,
        productType,
      });

      setCards(response.data);
      setIsloading(false);
    };
    try {
      fetchData();
    } catch (error) {
      setIsloading(false);
      console.log(error);
    }
    return () => {
      setIsloading(false);
    };
  }, [location.search, productType, reload]);

  const handleCouponCard = (CouponCard, CouponYOffset, coupon) => {
    setOpenCouponCard(CouponCard);
    setCouponCardLocation(CouponYOffset);
    setCoupons(coupon);
  };

  const handleCloseCouponCard = () => {
    setOpenCouponCard(false);
    setCouponCardLocation(0);
    setCoupons([]);
  };
  const handleComparison = () => {
    let ids = selectedCards.map((card) => {
      return card.Id;
    });

    ids = encodeURIComponent(JSON.stringify(ids));

    navigation(`/comparision?products=${ids}`);
  };

  StickyComparisonBar(setIsSticky);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCard = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (PageNumber) => {
    setCurrentPage(PageNumber);
  };

  const handleCheckboxChange = (data) => {
    let isSelected = false;
    selectedCards.forEach((prev) => {
      if (prev.Id == data.Id) {
        isSelected = true;
      }
    });
    if (selectedCards.length <= 4) {
      setSelectedCards((prevSelectedCards) => {
        if (isSelected) {
          const temp = prevSelectedCards.filter((card) => {
            return card.Id !== data.Id;
          });
          return [...temp];
        } else {
          if (prevSelectedCards.length >= 4) {
            alert("Max Limit for Compare Cards is 4");
            return prevSelectedCards;
          }
          return [...prevSelectedCards, data];
        }
      });
    }
  };

  return (
    <>

      <ComparisionTabbar setProductType={setProductType} productType={productType} />

      <div className="mb-12">
        <div className="p-5 flex h-full ">
          <div className="grow flex flex-col items-center justify-between pr-12">
            <div className="w-full ml-5 relative">
              {isLoading ? (
                <>
                  <LoadingCard />
                  <LoadingCard />
                  <LoadingCard />
                </>
              ) : (
                currentCard.map((card, Index) => {
                  return (
                    <ComparisionCard
                      key={card.Id}
                      card={card}
                      selectedcards={selectedCards}
                      handleCheckboxChange={handleCheckboxChange}
                      handleCouponCard={handleCouponCard}
                    />
                  );
                })
              )}
              {openCouponCArd && (
                <CouponPopUp
                  offset={CouponCardLocation}
                  Coupon={coupons}
                  close={handleCloseCouponCard}
                />
              )}
            </div>
            <div>
              <PaginationClass
                currentPage={currentPage}
                cardsPerPage={cardPerPage}
                totalcards={cards}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className={`${width > 600 ? "lg:min-w-[200px] lg:min-h-[600px]" : "hidden"}`}
              style={{
                boxShadow:
                  "-8px 0 15px rgba(203,213,225,0.5), 0 8px 15px rgb(203,213,225,0.5)",
              }}
            />
            <div className="order-3o flex items-center justify-center py-8">
              <div
                className="flex flex-col items-center justify-center 
                        bg-[#035091] 
                        px-2 
                        w-[240px] 
                        py-4
                        rounded-xl
                        py-20"
              >
                <h1 className="text-2xl font-bold text-white pb-12 text-center">
                  Subscribe to <br /> NewsLetter{" "}
                </h1>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  className="
                            mb-4 mx-2 w-full py-4 
                            border-t-transparent 
                            border-x-transparent 
                            border-b-white 
                            border-b-2 px-4
                            bg-transparent outline-none
                            text-xl text-white font-normal items-center"
                />
                <button
                  className="bg-[#00CED1] rounded-2xl py-4 w-full text-lg font-semibold"
                  onClick={emailApi}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedCards.length > 0 && selectedCards.length <= 4 && (
        <div
          className={`bg-black bg-opacity-40 z-10 w-full flex items-center py-4 px-8 mt-2 fixed bottom-0 ${isSticky ? "sticky w-full z-20" : ""
            } `}
        >
          {width > 600 ? (
            <>
              {selectedCards.map((CheckedCard) => {
                return <SelectedCard key={CheckedCard.id} data={CheckedCard} />;
              })}
              <button
                onClick={handleComparison}
                className="lg:border-hidden lg:h-16 lg:px-4 bg-customBlue hover:bg-sky-500 flex items-center justify-center rounded-md cursor-pointer text-white"
              >
                {t("compare")}
              </button>
            </>
          ) : (
            <>
              <div className="w-full grid grid-cols-2 gap-2">
                {selectedCards.map((CheckedCard) => {
                  return (
                    <SelectedCard key={CheckedCard.id} data={CheckedCard} />
                  );
                })}
              </div>
              <div className="w-full flex justify-center">
                <button
                  onClick={handleComparison}
                  className="border-hidden md:h-16 h-10 md:px-4 px-1 bg-customBlue hover:bg-sky-500 flex items-center justify-center rounded-md cursor-pointer text-white mx-2"
                >
                  {t("compare")}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default CompareScrollandAdd;
