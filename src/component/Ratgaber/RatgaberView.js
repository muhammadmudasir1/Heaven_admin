import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../../api/Api';
import PaginationClass from '../ComparisonComponet/PaginationClass';
import LoadingCard from '../LoadingCard';
import LoadingCardMobile from '../LoadingCardMobile';

const AddAndRatgaber = () => {

    const navigation = useNavigate();
    const [CardPerPage] = useState(5);
    const [CurrentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        console.log(CardPerPage)
    }, [CardPerPage])

    const [Cards, setCards] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
    const [isMobileLoader, setIsMobileLoader] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get(`/api/beginnersGuid`);
                console.log(response.data);
                setCards(response.data)
                setIsLoader(false);
                setIsMobileLoader(false);
                // console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const indexOfLastCard = CurrentPage * CardPerPage;
    const indexOfFirstCard = indexOfLastCard - CardPerPage;
    const currentCard = Cards.slice(indexOfFirstCard, indexOfLastCard)

    const handlePageChange = (PageNumber) => {
        setCurrentPage(PageNumber)
    }

    return (
        <>
            {!isMobile ? (
                <>
                    <div className='flex w-full px-8 mt-4'>
                        <div className="flex flex-col grow">
                            {isLoader ?
                                <div className="w-full pr-6">
                                    <LoadingCard />
                                    <LoadingCard />
                                    <LoadingCard />
                                    <LoadingCard />
                                </div>
                                :
                                <div className="flex flex-col grow  pr-12 pl-6">
                                    {currentCard.map((Cards) => {
                                        // console.log(Cards)
                                        return (
                                            <div
                                                onClick={(e) => {
                                                    const name = Cards.Title.replaceAll(' ', '-')
                                                    navigation(`/ratgaber/${name}/${Cards.guidId}`)
                                                }}
                                                className="flex items-center mb-6 shadow-for-app bg-white/95 rounded-xl cursor-pointer"
                                                style={{
                                                    boxShadow:
                                                        "-8px 0 15px rgba(203, 213, 225, 0.5), 0 8px 15px rgba(203, 213, 225, 0.5)",
                                                }}
                                            >
                                                <div className='lg:w-1/3 bg-cover bg-center rounded-l-xl w-full lg:h-[250px]'
                                                style={{ backgroundImage: `url(/api/${Cards.image})` }} />
                                                <div className='lg:pl-8 w-3/5 h-full'>
                                                    <h1 className='text-neutral-800 text-3xl font-semibold py-4'>{Cards.Title}</h1>
                                                    <p className='line-clamp-5'>{Cards.description && Cards.description}</p>

                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            }
                        </div>
                        <div className="lg:bg-white h-[600px] max-h-[600px] min-w-[200px] lg:shadow-lg lg:shadow-slate-600"
                            style={{
                                boxShadow:
                                    "-8px 0 15px rgba(203, 213, 225, 0.3), 0 8px 15px rgba(203, 213, 225, 0.3)",
                            }} />
                    </div>
                    <div className="flex w-full  justify-center">
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
            ) : (
                <div className='w-full'>
                    {isMobileLoader ? (
                        <div className='w-full'>
                            <LoadingCardMobile />
                            <LoadingCardMobile />
                            <LoadingCardMobile />
                            <LoadingCardMobile />
                        </div>
                    ) : (
                        <>
                            {Cards.map((items, index) => {
                                return <>
                                    <div key={index} onClick={(e) => {
                                        const name = items.Title.replaceAll(' ', '-')
                                        navigation(`/ratgaber/${name}/${items.guidId}`)
                                    }
                                    } className='grid grid-cols-3 m-4 rounded-xl p-4' style={
                                        { boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }
                                    }>
                                        <div className='h-full w-full bg-cover bg-center col-span-1 rounded-l-xl' style={{ backgroundImage: `url(/api/${items.image})` }} />
                                        <div className='col-span-2 ml-2 flex flex-col items-start justify-center'>
                                            <h1 className='mt-5 text-xl font-bold'>{items.Title}</h1>
                                        </div>
                                    </div>

                                    {(index + 1) % 3 === 0 && index !== currentCard.length - 1 && <div key={``} className="h-12" />}
                                </>
                            })}
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default AddAndRatgaber;
