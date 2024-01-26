import React, { useState, useEffect } from 'react';
import { CiStar } from 'react-icons/ci';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import PaginationClass from '../ComparisonComponet/PaginationClass';

const ScrollView = () => {

    const [CardPerPage, setCardPerPage] = useState(5);
    const [CurrentPage, setCurrentPage] = useState(1);

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
        <div className='flex flex-col items-center'>
            <div className='lg:grid lg:grid-cols-7 mt-14'>
                
                <div className='p-4 col-span-5 h-325px' style={{ backgroundImage: `url(${Cards.url})` }}>
                    {currentCard.map(Cards => {
                        return <NavLink to={"/product/all3dprinter"}   className='flex items-center my-4 shadow-for-app bg-white/95 rounded-lg '
                            style={
                                { boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }
                            }>
                            <div className='lg:w-1/3 bg-cover bg-center w-full h-[358.18px]' style={{ backgroundImage: `url(${Cards.url})` }}>
                                {/* <img src={ReviewList.url} alt="" className='h-full w-full '/> */}
                                {/* <div className='bg-cover bg-center bg-black w-[318.36px] h-[358.18px]' style={{ backgroundImage: `url(${ReviewList.url})` }} /> */}
                            </div>
                            <div className='lg:pl-8 w-3/5 '>
                                <h1 className='text-neutral-800 text-3xl font-semibold py-4'>{Cards.title}</h1>
                                <div className='flex pb-4'>
                                    {[...Array(5)].map((_, index) => (
                                        <CiStar key={index} size={50} className='text-amber-500' />
                                    ))}
                                </div>
                                <p className='pb-4 text-neutral-700 text-xl font-light '>{Cards.review}</p>
                                <div className='flex items-center pb-4'>
                                    <Link to={'../OneReview'} className='underline decoration-cyan-500 underline-offset-8 decoration-4 text-neutral-700 text-xl font-normal'>Read More</Link>
                                    <MdKeyboardDoubleArrowRight size={25} />
                                </div>
                            </div>
                        </NavLink>
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
    );
};

export default ScrollView;
