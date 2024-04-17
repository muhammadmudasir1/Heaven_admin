import {useState} from 'react'
import LoadingCard from '../LoadingCard';
import PaginationClass from '../ComparisonComponet/PaginationClass';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useTranslation } from 'react-i18next';

const ListView = ({ Cards, isLoading ,isNews}) => {
    const [CardPerPage, setCardPerPage] = useState(5);
    const [CurrentPage, setCurrentPage] = useState(1);
    const { width } = useWindowDimensions()
    const navigation=useNavigate()
    const { t } = useTranslation()

    const indexOfLastCard = CurrentPage * CardPerPage;
    const indexOfFirstCard = indexOfLastCard - CardPerPage;
    const currentCard = Cards.slice(indexOfFirstCard, indexOfLastCard);



    const handlePageChange = (PageNumber) => {
        setCurrentPage(PageNumber);
    };

    const cardPrint = (Cards, index) => {
        return (
            <>
                <div
                    onClick={(e) => {
                        const name = Cards.Title.replaceAll(' ', '-')
                        if(isNews){

                            navigation(`/news/${name}/${Cards.newsId}`)
                        }
                        else{
                            navigation(`/ratgaber/${name}/${Cards.guidId}`)

                        }
                    }}
                    className="lg:flex items-center mb-6 shadow-for-app bg-white/95 rounded-xl cursor-pointer mr-4 ml-4 lg:ml-0 lg:mr-0"
                    style={{
                        boxShadow:
                            "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
                    }}
                >
                    <div
                        className="rounded-l-xl lg:w-1/3 overflow-hidden w-full lg:h-[250px] p-4"
                    >
                        <img className=" object-cover h-full w-full"
                            src={`/api/${Cards.image}`}
                        />
                    </div>
                    <div className="lg:pl-8 lg:w-3/5 w-full ">
                        <h1 className="text-neutral-800 lg:text-3xl text-xl font-semibold py-4 lg:text-left text-center px-4 lg:px-0 ">
                            {Cards.Title}
                        </h1>
                        
                        <p className="lg:pb-4 text-neutral-700 lg:text-xl text-base px-4 lg:px-2 lg:text-left text-center font-light lg:line-clamp-none line-clamp-3 ">
                            {Cards.description && Cards.description}
                        </p>
                        
                    </div>
                </div>
                {width < 600 && (index + 1) % 3 === 0 && <div key={``} className=" h-[50px] bg-red-300 mb-4" />}
            </>
        );
    }

    return (
        <>
            <div className="flex w-full lg:px-8 mt-4">
                <div className="flex flex-col grow">
                    {isLoading ?
                        <div className="w-full pr-6">
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                        </div>
                        :
                        <div className="flex flex-col grow  lg:pr-12 lg:pl-6">
                            {
                                width > 600 ?
                                    currentCard.map(cardPrint)
                                    : Cards.map(cardPrint)
                            }
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
    )
}

export default ListView