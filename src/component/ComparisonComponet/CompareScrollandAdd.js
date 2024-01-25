import React, { useEffect, useState } from 'react'
import imges from '../../imges/coupon.svg'
import imges1 from '../../imges/EBay_logo.png'
import { Checkbox } from "@material-tailwind/react"
import PaginationClass from './PaginationClass'
import { NavLink } from 'react-router-dom'

const StickyComparisonBar = (setIsSticky) => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

const CompareScrollandAdd = () => {
    const [cardPerPage, setCardPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isSticky, setIsSticky] = useState(false);

    StickyComparisonBar(setIsSticky);
    // const [totalCards, setTotalCards]=useState()
    useEffect(() => {
        console.log(cardPerPage)
    }, [cardPerPage])

    const [cards, setcards] = useState([
        {
            Index: "1",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "2",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "3",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "4",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "5",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "6",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "7",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "8",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "9",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges"

        },
        {
            Index: "10",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "11",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "12",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "13",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },
        {
            Index: "14",
            img: "https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg",
            "title": "Anycubic Photon Mono 1",
            "volume": "XYZm/s",
            "Speed": "XYZm/s",
            "Filament Compatibility": "XYZm/s",
            "Printing Accuracy XY Resolution": "XYZm/s",
            "coupon": "coupon",
            price: "Official Price",
            "Offical Price": "219.00 Euro",
            ebaylogo: "imges",
            price: "139 Euro"

        },])

    const indexOfLastCard = currentPage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentCard = cards.slice(indexOfFirstCard, indexOfLastCard)


    const handlePageChange = (PageNumber) => {
        setCurrentPage(PageNumber)
    }

    const handleCheckboxChange = (index) => {
        // Check if the card is already selected
        const isSelected = selectedCards.includes(index);

        // If selected, remove it; otherwise, add it to the selectedCards array
        setSelectedCards((prevSelectedCards) =>
            isSelected
                ? prevSelectedCards.filter((cardIndex) => cardIndex !== index)
                : [...prevSelectedCards, index]
        );
    };

    return (
        <>
            <div className='grid grid-cols-8'>
                <div className='col-span-6 flex flex-col items-center px-6 mt-16'>
                    {currentCard.map((cards, Index) => {
                        const isChecked = selectedCards.includes(Index);
                        return <div key={cards.Index} className='flex shadow-for-app items-end justify-start rounded-lg my-2 w-full py-8' style={{ boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }}>
                            <div className='rounded-l-md w-1/3 h-full pr-8'>
                                <div className={`bg-cover bg-center h-full w-full `} style={{ backgroundImage: `url(${cards.img})` }} />
                            </div>
                            <div className='flex items-center flex-grow pl-4'>
                                <div className=' pr-20 w-3/5 '>
                                    <h1 className='text-neutral-800 text-2xl font-semibold font-[Roboto] my-5'>{cards.title}</h1>
                                    <div className='px-2'>
                                        <ul className=''>
                                            <div className='flex items-center'>
                                                <li className=' text-lg font-bold pr-2 list-disc'>Print Volume: </li>
                                                <li>{cards.volume}</li>
                                            </div>
                                            <div className='flex items-center'>
                                                <li className=' text-lg font-bold pr-2 list-disc'>Print Speed: </li>
                                                <li>{cards.Speed}</li>
                                            </div>
                                            <div className='flex items-center'>
                                                <li className=' text-lg font-bold pr-2 list-disc'>Filament Compatibility: </li>
                                                <li>{cards['Filament Compatibility']}</li>
                                            </div>
                                            <div className='flex items-center'>
                                                <li className=' text-lg font-bold pr-2 list-disc'>Printing Accuracy XY Resolution: </li>
                                                <li>{cards['Printing Accuracy XY Resolution']}</li>
                                            </div>
                                        </ul>
                                    </div>
                                    <button className='flex items-center bg-gray-200 my-2 px-4 py-2 rounded-md'>
                                        <img src={imges} alt="" />
                                        <h1 className='mx-2'>{cards.coupon}</h1>
                                    </button>
                                    <div className='flex items-center pt-8'>
                                        <Checkbox size={60} checked={selectedCards.includes(cards.Index)} onChange={() => handleCheckboxChange(cards.Index)} className='px-8 py-8'/>
                                        <h1 class=" text-lg font-light">Add to Comparison</h1>
                                    </div>
                                </div>
                                <div className='w-[1px] h-72 bg-black' />
                                <div className=' flex flex-col items-end pr-14 w-2/5 h-full'>
                                    <div className='flex flex-col items-center'>
                                        <h1 className=' font-bold text-xl'>{cards.price}</h1>
                                        <h1 className='text-black text-xl font-bold font-[Roboto]'>{cards['Offical Price']}</h1>
                                        <div className=''>
                                            <div className='flex border-2 items-center justify-evenly border-blue-500 rounded-md py-2 px-6 my-2' >
                                                <img src={imges1} alt="" className='h-full pr-2' />
                                                <h1 className='pl-2 text-lg font-bold'>{cards.price}</h1>
                                            </div>
                                            <div className='flex border-2 items-center justify-evenly border-blue-500 rounded-md py-2 px-6 my-2' >
                                                <img src={imges1} alt="" className='h-full pr-2' />
                                                <h1 className='pl-2 text-lg font-bold'>{cards.price}</h1>
                                            </div>
                                            <div className='flex border-2 items-center justify-evenly border-blue-500 rounded-md py-2 px-6 my-2' >
                                                <img src={imges1} alt="" className='h-full pr-2' />
                                                <h1 className='pl-2 text-lg font-bold'>{cards.price}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                    <div>
                        <PaginationClass
                            currentPage={currentPage}
                            cardsPerPage={cardPerPage}
                            totalcards={cards}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
                <div className='col-span-2 shadow-for-app shadow-slate-600 mx-4' style={{ boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }} />
            </div>
            {selectedCards.length > 0 && selectedCards.length <= 4 && (
                <div className={`bg-slate-600/30 z-10 w-full flex items-center py-4 px-4 mt-2 ${isSticky ? 'sticky w-full z-20' : ''} `}>
                    {selectedCards.map((selectedIndex) => (
                        <div key={selectedIndex} className='flex items-center mx-2 bg-white'>
                            <div className='w-20'><img src={cards[selectedIndex].img} alt="" className='bg-cover' /></div>
                            <div className='px-2'>
                                <h1 className='text-neutral-800 text-base font-semibold font-[Roboto]'>{cards[selectedIndex].title}</h1>
                                <h1 className='text-neutral-800 text-sm font-semibold font-[Roboto]'>{cards[selectedIndex].price}</h1>
                            </div>
                        </div>
                    ))}
                    <NavLink
                        to={{
                            pathname: '/CompareResult',
                            state: {
                                selectedCards: selectedCards.map((index) =>
                                    cards.find((card) => card.Index === index)
                                ),
                            },
                        }}
                        className='border-hidden h-8 px-4 bg-sky-700 flex items-center justify-center rounded-md'
                    >
                        Comparison
                    </NavLink>

                </div>
            )}
        </>
    )
}
export default CompareScrollandAdd