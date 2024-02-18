import React, { useState, useEffect } from 'react';
import { CiStar } from 'react-icons/ci';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import PaginationClass from '../ComparisonComponet/PaginationClass';
import { useNavigate } from 'react-router-dom';

const AddAndNews = () => {

    const navigate = useNavigate();
    const [CardPerPage, setCardPerPage] = useState(5);
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

    const [Cards, setCards] = useState([
        {

            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

            title: 'Two Trees SK-1',

            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ${<br />} Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione ${<br />} repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos.`
        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

            title: 'Two Trees SK-1',

            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ${<br />} Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione ${<br />} repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos.`
        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

            title: 'Two Trees SK-1',

            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ${<br />} Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione ${<br />} repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos.`
        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

            title: 'Two Trees SK-1',

            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ${<br />} Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione ${<br />} repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos.`
        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

            title: 'Two Trees SK-1',

            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ${<br />} Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione ${<br />} repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos.`
        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

            title: 'Two Trees SK-1',

            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ${<br />} Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione ${<br />} repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos.`
        },
        {
            url: 'https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg',

            title: 'Two Trees SK-1',

            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ${<br />} Sit laudantium possimus cupiditate atque totam molestias consequuntur ratione ${<br />} repellat fugiat autem voluptates ut ex rerum dolores numquam temporibus dolorem, alias eos.`
        },
    ]);

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

                        <div className=' lg:col-span-5 h-full lg:pr-12' >
                            {currentCard.map(Cards => {
                                return <div onClick={(e) => { navigate(`/productreview/${1}/allmostimportant`) }} className='flex items-center mb-6 shadow-for-app bg-white/95 rounded-xl cursor-pointer'
                                    style={
                                        { boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }
                                    }>
                                    <div className='lg:w-1/3 bg-cover bg-center rounded-l-xl w-full lg:h-[358.18px]' style={{ backgroundImage: `url(${Cards.url})` }} />
                                    <div className='lg:pl-8 w-3/5 '>
                                        <h1 className='text-neutral-800 text-3xl font-semibold py-4'>{Cards.title}</h1>
                                        <p className='pb-4 text-neutral-700 text-xl font-light line-clamp-6'>{Cards.review}</p>
                                        <div className='flex items-center pb-4'>
                                            <Link to={'/product/all3dprinter/singlereview'} className='underline decoration-cyan-500 underline-offset-8 decoration-4 text-neutral-700 text-xl font-normal'>Read More</Link>
                                            <MdKeyboardDoubleArrowRight size={25} />
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className='lg:bg-white lg:h-full lg:w-full lg:col-span-2 lg:shadow-lg lg:shadow-slate-600' style={{ boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }} />
                    </div>
                    <PaginationClass
                        currentPage={CurrentPage}
                        cardsPerPage={CardPerPage}
                        totalcards={Cards}
                        onPageChange={handlePageChange}
                    />
                </div>
            ) : (
                <div className=''>
                    {Cards.map((items, index) => {
                        return <>
                            <div key={index} className='grid grid-cols-3 m-4 rounded-xl' style={
                                { boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }
                            }>
                                <div className='h-full w-full bg-cover bg-center col-span-1 rounded-l-xl' style={{ backgroundImage: `url(${items.url})` }} />
                                <div className='col-span-2 ml-2 flex flex-col items-start justify-center'>
                                    <h1 className='mt-5 text-xl font-bold'>{items.title}</h1>
                                    <p className='line-clamp-3 pt-2  text-neutral-700'>{items.review}</p>
                                    <div className='flex items-center py-2 mb-2'>
                                        <Link to={'/product/all3dprinter/singlereview'} className='underline decoration-cyan-500 underline-offset-8 decoration-4 text-neutral-700 font-normal '>Read More</Link>
                                        <MdKeyboardDoubleArrowRight size={20} />
                                    </div>
                                </div>
                            </div>

                            {(index + 1) % 3 === 0 && index !== currentCard.length - 1 && <div key={``} className="h-12 bg-red-300" />}
                        </> 
                    })}
                </div>
            )}
        </>
    );
};

export default AddAndNews;
