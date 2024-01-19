import React, { useEffect, useState } from 'react'
import imges from '../../imges/coupon.svg'
import imges1 from '../../imges/EBay_logo.png'
import { Checkbox } from "@material-tailwind/react"
import PaginationClass from './PaginationClass'
import {  NavLink } from 'react-router-dom'

const CompareScrollandAdd = () => {
    const [cardPerPage,setCardPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCards, setSelectedCards] = useState([]);
    // const [totalCards, setTotalCards]=useState()
    useEffect(()=>{
        console.log(cardPerPage)
    },[cardPerPage])

    const [cards,setcards] = useState([
        {
            Index: "1",
            Index: "",
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

        setSelectedCards(prevSelectedCards => {
            if (prevSelectedCards.includes(index)) {
                return prevSelectedCards.filter(item => item !== index);
            } else {
                return [...prevSelectedCards, index];
            }
        });
    };

    return (
        <>
            <div className='grid grid-cols-8 my-5 relative'>
                <div className='col-span-6 flex flex-col items-center mx-6 my-5'>
                    {currentCard.map((cards, Index) => {
                        const isChecked = selectedCards.includes(Index);
                        return <div key={Index} className='flex shadow-for-app shadow-slate-700 items-center justify-start rounded-lg my-4 w-full py-12'>
                            <div className='rounded-l-md'>
                                <img src={cards.img} alt="" className='rounded-l-md' />
                            </div>
                            <div className='flex items-center '>
                                <div className='px-8 pr-16'>
                                    <h1 className='text-neutral-800 text-2xl font-semibold font-[Roboto] my-5'>{cards.title}</h1>
                                    <div className='px-2'>
                                        <ul className=' list-disc'>
                                            <li>Print Volume: {cards.volume}</li>
                                            <li>Print Speed: {cards.Speed}</li>
                                            <li>Filament Compatibility: {cards['Filament Compatibility']}</li>
                                            <li>Printing Accuracy XY Resolution: {cards['Printing Accuracy XY Resolution']}</li>
                                        </ul>
                                    </div>
                                    <button className='flex items-center bg-gray-200 my-2 px-4 py-2 rounded-md'>
                                        <img src={imges} alt="" />
                                        <h1 className='mx-2'>{cards.coupon}</h1>
                                    </button>
                                    <div className='flex items-center pt-8'>
                                        <Checkbox size={40} checked={isChecked} onChange={() => handleCheckboxChange(Index)} />
                                        <h1 class=" text-black text-sm font-light font-['Roboto']">Add to Comparison</h1>
                                    </div>
                                </div>
                                <div className='w-[1px] h-60 bg-black' />
                                <div className='pl-20 flex flex-col items-center'>
                                    <h1>{cards.price}</h1>
                                    <h1 className='text-black text-lg font-bold font-[Roboto]'>{cards['Offical Price']}</h1>
                                    <div className='py-2 '>
                                        <div className='flex border-2 border-blue-500 rounded-md py-1 my-1 px-2'>
                                            <img src={imges1} alt="" />
                                            <h1>{cards.price}</h1>
                                        </div>
                                        <div className='flex border-2 border-blue-500 rounded-md py-1 my-1 px-2'>
                                            <img src={imges1} alt="" />
                                            <h1>{cards.price}</h1>
                                        </div>
                                        <div className='flex border-2 border-blue-500 rounded-md py-1 my-1 px-2'>
                                            <img src={imges1} alt="" />
                                            <h1>{cards.price}</h1>
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
                <div className='col-span-2 shadow-for-app shadow-slate-700 mx-4' />
            </div>
            {selectedCards.length > 0 && selectedCards.length <= 4 && (
                <div className='absolute bg-slate-600/30 z-10 w-full flex items-center py-2 px-4 -bottom-[240.5vh]'>
                    {selectedCards.map((selectedIndex) => (
                        <div key={selectedIndex} className='flex items-center mx-2 bg-white'>
                            <div className='w-20'><img src={cards[selectedIndex].img} alt="" className='bg-cover' /></div>
                            <div className='px-2'>
                                <h1 className='text-neutral-800 text-base font-semibold font-[Roboto]'>{cards[selectedIndex].title}</h1>
                                <h1 className='text-neutral-800 text-sm font-semibold font-[Roboto]'>{cards[selectedIndex].price}</h1>
                            </div>
                        </div>
                    ))}
                    <NavLink to={'../CompareResult'} className='border-hidden h-8 px-4 bg-sky-700 flex items-center justify-center rounded-md '>Comparision</NavLink>
                </div>
            )}
        </>
    )
}

export default CompareScrollandAdd