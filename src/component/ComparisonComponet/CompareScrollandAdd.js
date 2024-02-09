import React, { useEffect, useState } from 'react'
import PaginationClass from './PaginationClass'
import {useLocation, useNavigate } from 'react-router-dom'
import ComparisionCard from './ComparisionCard'
import Api from '../../api/Api'
import LoadingCard from '../LoadingCard'
import SelectedCard from './SelectedCard'

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
            setSelectedCards([])
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
            setIsloading(false);
        };
        
    },[productType,reload])

    useEffect(()=>{
        console.log("is Called") 
    },[cards])

    const handleComparison = () => {
        
        let ids=selectedCards.map((card)=>{
            return card.Id
        })

        ids = encodeURIComponent(JSON.stringify(ids))

        navigation(`/comparision?products=${ids}`,);
    };

    StickyComparisonBar(setIsSticky);

    const indexOfLastCard = currentPage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentCard = cards.slice(indexOfFirstCard, indexOfLastCard)


    const handlePageChange = (PageNumber) => {
        setCurrentPage(PageNumber)
    }

    const handleCheckboxChange = (data) => {
        let isSelected = false
        selectedCards.forEach((prev)=>{
            if (prev.Id === data.Id){
                isSelected=true
            }
        })
        if (selectedCards.length<=4){
            setSelectedCards((prevSelectedCards) =>{
                if(isSelected) {
                    const temp=prevSelectedCards.filter((card) => {
                        return card.Id !== data.Id
                    })
                    return [...temp]
                }
                else{
                    if(prevSelectedCards.length>=4){
                        alert("Max Limit for Compare Cards is 4")
                        return prevSelectedCards
                    }
                    return [...prevSelectedCards, data]

                }});
            }
        };

    useEffect(()=>{
        console.log(selectedCards)
    },[selectedCards])


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
                    {selectedCards.map((CheckedCard) => {
                        return <SelectedCard data={CheckedCard}/>
                    })}
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