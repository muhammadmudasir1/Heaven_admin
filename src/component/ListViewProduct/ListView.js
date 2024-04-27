import { useState } from "react";
import LoadingCard from "../LoadingCard";
import PaginationClass from "../ComparisonComponet/PaginationClass";
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useTranslation } from "react-i18next";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Api from "../../api/Api";
import LazyLoad from "react-lazyload";

const ListView = ({ Cards, isLoading }) => {
  const [CardPerPage] = useState(5);
  const [CurrentPage, setCurrentPage] = useState(1);
  const { width } = useWindowDimensions();
  const navigation = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const indexOfLastCard = CurrentPage * CardPerPage;
  const indexOfFirstCard = indexOfLastCard - CardPerPage;
  const currentCard = Cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (PageNumber) => {
    setCurrentPage(PageNumber);
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const cardPrint = (Cards, index) => {
    console.log(Cards.ProductImages[0]);
    return (
      <div key={index}>
        <div
          onClick={(e) => {
            const name = Cards.product_name.replaceAll(" ", "-");
            navigation(`/testberichte/${name}/${Cards.Id}`);
          }}
          className="lg:flex items-center mb-6 shadow-for-app bg-white/95 rounded-xl cursor-pointer mr-4 ml-4 lg:ml-0 lg:mr-0"
          style={{
            boxShadow:
              "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
          }}
        >
          <div className="rounded-l-xl lg:w-1/3 overflow-hidden w-full lg:h-[358.18px] p-4">
            <lazyload>
              <img
                className=" object-cover h-full w-full"
                src={`/api/${Cards.ProductImages[0].path}`}
                alt={Cards.ProductImages[0].altText}
                title={Cards.ProductImages[0].altText}
              />
            </lazyload>
          </div>
          <div className="lg:pl-8 lg:w-3/5 w-full">
            <h1 className="text-neutral-800 lg:text-3xl text-xl font-semibold py-4 lg:text-left text-center px-4 lg:px-0 ">
              {Cards.product_name}
            </h1>
            <div className="flex pb-4 lg:justify-start justify-center">
              {Cards.overall_rating > 0 &&
                [
                  ...Array.from(
                    { length: Cards.overall_rating },
                    (_, index) => index + 1
                  ),
                ].map((_, index) => (
                  <CiStar key={index} size={50} className="text-amber-500" />
                ))}
              {[
                ...Array.from(
                  { length: 5 - Cards.overall_rating },
                  (_, index) => index + 1
                ),
              ].map((_, index) => (
                <CiStar key={index} size={50} className="text-gray-500" />
              ))}
            </div>
            <p className="lg:pb-4 text-neutral-700 lg:text-xl text-base px-4 lg:px-2 lg:text-left text-center font-light lg:line-clamp-none line-clamp-3 ">
              {Cards.discription}
            </p>
            <div className="flex items-center lg:justify-start justify-center lg:pb-4 lg:mb-0 my-6">
              <p
                onClick={(e) => {
                  const name = Cards.product_name.replaceAll(" ", "-");
                  navigation(`/testberichte/${name}/${Cards.Id}`);
                }}
                className=" flex items-center pb-6 underline decoration-cyan-500 underline-offset-8 decoration-4 text-neutral-700 text-xl font-normal"
              >
                {t("Readmore")}
                <MdKeyboardDoubleArrowRight size={25} />
              </p>
            </div>
          </div>
        </div>
        {width < 600 && (index + 1) % 3 === 0 && (
          <div key={``} className=" h-[50px] bg-red-300 mb-4" />
        )}
      </div>
    );
  };

  return (
    <>
      <div className="flex w-full lg:px-8 mt-4">
        <div className="flex flex-col grow">
          {isLoading ? (
            <div className="w-full pr-6">
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </div>
          ) : (
            <div className="flex flex-col grow  lg:pr-12 lg:pl-6">
              {width > 600 ? currentCard.map(cardPrint) : Cards.map(cardPrint)}
            </div>
          )}
        </div>

        <div
          className="lg:block hidden lg:bg-white "
          
        >
          <div className="h-[600px] max-h-[600px] min-w-[200px] mb-8" style={{
            boxShadow:
              "-8px 0 15px rgba(203, 213, 225, 0.3), 0 8px 15px rgba(203, 213, 225, 0.3)",
          }}/>
          <div
            className="flex flex-col items-center justify-center bg-[#035091] px-2 w-[240px] py-4 rounded-xl"
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

      <div className="lg:flex hidden w-full  justify-center ">
        {!isLoading && (
          <PaginationClass
            currentPage={CurrentPage}
            cardsPerPage={CardPerPage}
            totalcards={Cards}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default ListView;
