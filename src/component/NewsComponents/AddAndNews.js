import React, { useState, useEffect } from 'react';
import { CiStar } from 'react-icons/ci';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import PaginationClass from '../ComparisonComponet/PaginationClass';
import { useNavigate } from 'react-router-dom';
import Api from '../../api/Api';
import LoadingCard from '../LoadingCard';
import LoadingCardMobile from '../LoadingCardMobile';

const AddAndNews = () => {

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
                const response = await Api.get(`/api/news`);
                console.log(response.data);
                setCards(response.data)
                setIsLoader(false);
                setIsMobileLoader(false);
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
                <div className='flex flex-col items-center pt-20'>
                    <div className='lg:grid lg:grid-cols-7 p-5 '>
                        {isLoader ? (
                            <div>
                                <LoadingCard />
                                <LoadingCard />
                                <LoadingCard />
                                <LoadingCard />
                                <LoadingCard />
                            </div>) : (
                            <div className=' lg:col-span-5 h-full lg:pr-12' >
                                {currentCard.map(Cards => {
                                    return <div onClick={(e)=>{
                                        navigation(`/detail/${Cards.Id}`)
                                    }} className='flex items-center mb-6 shadow-for-app bg-white/95 rounded-xl cursor-pointer'
                                        style={
                                            { boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }
                                        }>
                                        <div className='lg:w-1/3 bg-cover bg-center rounded-l-xl w-full lg:h-[358.18px]' style={{ backgroundImage: `url(/api/${Cards.image})` }} />
                                        <div className='lg:pl-8 w-3/5 '>
                                            <h1 className='text-neutral-800 text-3xl font-semibold py-4'>{Cards.Title}</h1>
                                        </div>
                                    </div>
                                })}
                            </div>
                        )}
                        <div className='lg:bg-white lg:h-full lg:w-full lg:col-span-2 lg:shadow-lg lg:shadow-slate-600' style={{ boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }} />
                    </div>
                    {!isLoader && (
                        <PaginationClass
                            currentPage={CurrentPage}
                            cardsPerPage={CardPerPage}
                            totalcards={Cards}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            ) : (
                <div className=''>
                    {isMobileLoader ? (
                        <div>
                            <LoadingCardMobile />
                            <LoadingCardMobile />
                            <LoadingCardMobile />
                            <LoadingCardMobile />
                            <LoadingCardMobile />
                            <LoadingCardMobile />
                        </div>
                    ) : (
                        <>
                            {Cards.map((items, index) => {
                                return <>
                                    <div key={index} onClick={(e)=>{
                                        navigation(`/detail/${items.Id}`)
                                    }
                                    } className='grid grid-cols-3 m-4 rounded-xl' style={
                                        { boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }
                                    }>
                                        <div className='h-full w-full bg-cover bg-center col-span-1 rounded-l-xl' style={{ backgroundImage: `url(/api/${items.image})` }} />
                                        <div className='col-span-2 ml-2 flex flex-col items-start justify-center'>
                                            <h1 className='mt-5 text-xl font-bold'>{items.Title}</h1>
                                        </div>
                                    </div>

                                    {(index + 1) % 3 === 0 && index !== currentCard.length - 1 && <div key={``} className="h-12 bg-red-300" />}
                                </>
                            })}
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default AddAndNews;
