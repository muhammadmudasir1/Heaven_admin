import React, { useEffect, useState } from 'react'
import imges from '../../imges/coupon.svg'
import imges1 from '../../imges/EBay_logo.png'

import PaginationClass from './PaginationClass'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import ComparisionCard from './ComparisionCard'

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
    const navigation = useNavigate();

    const handleComparison = () => {
        let search = "";
        const selectedCardsData = selectedCards.map(index => cards[index]);
        selectedCardsData.forEach((card, index) => {
            console.log(`Card ${index + 1} details:`);
            console.log(card);
            search += `cp${index + 1}=${card.Index}&`;
        });

        navigation(`/comparision?${search}`, { selectedCardsData });
    };

    StickyComparisonBar(setIsSticky);
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
        const isSelected = selectedCards.includes(index);
        if (selectedCards.length<=4){



            setSelectedCards((prevSelectedCards) =>{
                if(isSelected) {
                    const temp=prevSelectedCards.filter((cardIndex) => {
                        return cardIndex !== index
                    })
                    return [...temp]
                }
                else{
                    if(prevSelectedCards.length>=4){
                        console.log("Previous Card " + prevSelectedCards.length)
                        alert("Max Limit for Compare Cards is 4")
                        return prevSelectedCards
                    }
                    return [...prevSelectedCards, index]

                }   
                    
                    
            }
            );
            
        }

    };

    useEffect(()=>{
        console.log(selectedCards)
    },[selectedCards])

    return (
        <>
            <div className='mb-12'>
                <div className='p-5 grid grid-cols-8'>
                    <div className='col-span-6 flex flex-col items-center pr-12'>
                        {currentCard.map((card, Index) => {
                            return <ComparisionCard card={card}  selectedcards={selectedCards} handleCheckboxChange={handleCheckboxChange} />
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
                    <div className='col-span-2 shadow-for-app shadow-slate-600' style={{ boxShadow: '-8px 0 15px rgb(203 213 225), 0 8px 15px rgb(203 213 225)' }} />
                </div>
            </div>
            {selectedCards.length > 0 && selectedCards.length <= 4 && (
                <div className={`bg-black bg-opacity-40 z-10 w-full flex items-center py-4 px-8 mt-2 ${isSticky ? 'sticky w-full z-20' : ''} `}>
                    {selectedCards.map((selectedIndex) => (
                        <div key={selectedIndex} className='flex items-center mx-4 py-4 bg-white'>
                            <img src={cards[selectedIndex].img} alt="" className='h-16' />
                            <div className='px-2'>
                                <h1 className='text-neutral-800 text-base font-semibold font-[Roboto]'>{cards[selectedIndex].title}</h1>
                                <h1 className='text-neutral-800 text-sm font-semibold font-[Roboto]'>{cards[selectedIndex].price}</h1>
                            </div>
                        </div>
                    ))}
                    <button

                        onClick={handleComparison}
                        className='border-hidden h-16 px-4 bg-customBlue hover:bg-sky-500 flex items-center justify-center rounded-md cursor-pointer text-white'
                    >

                        Comparison
                    </button>

                </div>
            )}
        </>
    )
}
export default CompareScrollandAdd