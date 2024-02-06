import React, { useEffect, useState } from 'react'
import PaginationClass from './PaginationClass'
import {useLocation, useNavigate } from 'react-router-dom'
import ComparisionCard from './ComparisionCard'
import Api from '../../api/Api'
import LoadingCard from '../LoadingCard'

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

const CompareScrollandAdd = ({reload}) => {
    const [cards, setCards] = useState([])
    const [productType,setProductType]=useState(1)
    const [manufacturers,setManufacturers]=useState([])
    const [products,setProducts]=useState([])
    const [price,setPrice]=useState(99999)
    const [cardPerPage, setCardPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isLoading,setIsloading]=useState(false)
    const [isSticky, setIsSticky] = useState(false);
    const navigation = useNavigate();
    const location=useLocation()
    
    
    
    
    useEffect(()=>{
        const queryParams=new URLSearchParams(location.search)
        let manufacturersParams=queryParams.get('manufacturers')
        manufacturersParams=JSON.parse(decodeURIComponent(manufacturersParams))
        let productsParams=queryParams.get('products')
        productsParams=JSON.parse(decodeURIComponent(productsParams))
        let priceParams=queryParams.get('price')
        priceParams=JSON.parse(decodeURIComponent(priceParams))
        if(priceParams==1){
            priceParams=500
        }
        else if(priceParams==2){
            priceParams=1000
        }
        else if(priceParams==3){
            priceParams=1500
        }
        else if(priceParams==4){
            priceParams=2000
        }
        else if(priceParams==5){
            priceParams=2500
        }
        // console.log(priceParams)

        const fetchData=async()=>{
            setIsloading(true)
            setCards([])
         const response=await Api.post('/api/products/filter',{
            manufacturers:manufacturersParams,
            products:productsParams,
            price:priceParams,
            productType
         })
         
         setCards(response.data)
         setIsloading(false)
         
        }
        try {
            fetchData()
        } catch (error) {
            setIsloading(false)
            console.log(error)
        }
        return () => {
            // Cleanup function to cancel ongoing requests if the component unmounts or reload changes
            // This will help to avoid setting state on an unmounted component
            setIsloading(false);
        };
        
    },[productType,reload])

    useEffect(()=>{
        console.log("is Called") 
    },[cards])

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

                }});
            }
        };


    return (
        <>
            <ul className='flex pmb-5 items-center justify-center '>
                <div 
                className='flex w-3/4 justify-around text-xl h-full'>

                <li className={`py-3 cursor-pointer px-2 ${productType==1 && "active"}`}
                onClick={(e)=>{
                    setProductType(1)
                }}
                >
                   <p>SLA Printer</p>
                </li>
                <li className={`py-3 cursor-pointer px-2 ${productType==2 && "active"}`}
                onClick={(e)=>{
                    setProductType(2)
                }}
                >
                    <p>FDM Printer</p>
                </li>
                <li className={`py-3 cursor-pointer px-2 ${productType==3 && "active"}`}
                onClick={(e)=>{
                    setProductType(3)
                }}
                >
                    <p>Laser Cutter</p>
                </li>
                <li className={`py-3 cursor-pointer px-2 ${productType==4 && "active"}`}
                onClick={(e)=>{
                    setProductType(4)
                }}
                >
                    <p>3D Scannar</p>
                </li>
                </div>
            </ul>

            <div className='mb-12'>
                <div className='p-5 grid grid-cols-8 h-full '>
                    <div className='col-span-6 flex flex-col items-center justify-between pr-12'>
                        <div className='w-full ml-5'>

                        
                        {
                            isLoading?<>
                            <LoadingCard/>
                            <LoadingCard/>
                            </>
                            :currentCard.map((card, Index) => {
                                return <ComparisionCard 
                                key={card.Id}
                                card={card}
                                selectedcards={selectedCards}
                                handleCheckboxChange={handleCheckboxChange} />
                            })
                        }
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
                    <div className='col-span-2 min-h-[600px]' style={{ boxShadow: '-8px 0 15px rgba(203,213,225,0.5), 0 8px 15px rgb(203,213,225,0.5)' }} />
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