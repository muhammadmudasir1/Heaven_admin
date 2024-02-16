import React, { useEffect, useState } from 'react'
import PaginationClass from './PaginationClass'
import { useLocation, useNavigate } from 'react-router-dom'
import ComparisionCard from './ComparisionCard'
import Api from '../../api/Api'
import LoadingCard from '../LoadingCard'
import SelectedCard from './SelectedCard'
import CouponPopUp from './CouponPopUp'
import useWindowDimensions from '../../hooks/useWindowDimensions'

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

const CompareScrollandAdd = ({ reload }) => {
    const [cards, setCards] = useState([])
    const [productType, setProductType] = useState(1)
    const [cardPerPage, setCardPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isLoading, setIsloading] = useState(false)
    const [isSticky, setIsSticky] = useState(false);
    const navigation = useNavigate();
    const location = useLocation()
    const [openCouponCArd, setOpenCouponCard] = useState(false)
    const [CouponCardLocation, setCouponCardLocation] = useState(0)
    const [coupons, setCoupons] = useState([])
    const { width } = useWindowDimensions()

    const handleCouponCard = (CouponCard, CouponYOffset, coupon) => {
        setOpenCouponCard(CouponCard)
        setCouponCardLocation(CouponYOffset)
        setCoupons(coupon)
    }

    const handleCloseCouponCard = () => {
        setOpenCouponCard(false)
        setCouponCardLocation(0)
        setCoupons([])
    }

    useEffect(() => {
        console.log("Handle Coupon Card")
    }, [openCouponCArd])

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        let manufacturersParams = queryParams.get('manufacturers')
        manufacturersParams = JSON.parse(decodeURIComponent(manufacturersParams))
        let productsParams = queryParams.get('products')
        productsParams = JSON.parse(decodeURIComponent(productsParams))
        let priceParams = queryParams.get('price')
        priceParams = JSON.parse(decodeURIComponent(priceParams))
        if (priceParams == 1) {
            priceParams = 500
        }
        else if (priceParams == 2) {
            priceParams = 1000
        }
        else if (priceParams == 3) {
            priceParams = 1500
        }
        else if (priceParams == 4) {
            priceParams = 2000
        }
        else if (priceParams == 5) {
            priceParams = 2500
        }
        // console.log(priceParams)

        const fetchData = async () => {
            setSelectedCards([])
            setIsloading(true)
            setCards([])
            const response = await Api.post('/api/products/filter', {
                manufacturers: manufacturersParams,
                products: productsParams,
                price: priceParams,
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

    }, [productType, reload])

    useEffect(() => {
        console.log("is Called")
    }, [cards])

    const handleComparison = () => {

        let ids = selectedCards.map((card) => {
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
        selectedCards.forEach((prev) => {
            if (prev.Id === data.Id) {
                isSelected = true
            }
        })
        if (selectedCards.length <= 4) {
            setSelectedCards((prevSelectedCards) => {
                if (isSelected) {
                    const temp = prevSelectedCards.filter((card) => {
                        return card.Id !== data.Id
                    })
                    return [...temp]
                }
                else {
                    if (prevSelectedCards.length >= 4) {
                        alert("Max Limit for Compare Cards is 4")
                        return prevSelectedCards
                    }
                    return [...prevSelectedCards, data]

                }
            });
        }
    };

    useEffect(() => {
        console.log(selectedCards)
    }, [selectedCards])


    return (
        width > 600 ?
            <>
                <ul className='flex pmb-5 items-center justify-center '>
                    <div
                        className='flex w-3/4 justify-around text-xl h-full'>

                        <li className={`py-3 cursor-pointer px-2 ${productType == 1 && "active"}`}
                            onClick={(e) => {
                                setProductType(1)
                            }}
                        >
                            <p>SLA Printer</p>
                        </li>
                        <li className={`py-3 cursor-pointer px-2 ${productType == 2 && "active"}`}
                            onClick={(e) => {
                                setProductType(2)
                            }}
                        >
                            <p>FDM Printer</p>
                        </li>
                        <li className={`py-3 cursor-pointer px-2 ${productType == 3 && "active"}`}
                            onClick={(e) => {
                                setProductType(3)
                            }}
                        >
                            <p>Laser Cutter</p>
                        </li>
                        <li className={`py-3 cursor-pointer px-2 ${productType == 4 && "active"}`}
                            onClick={(e) => {
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
                            <div className='w-full ml-5 relative'>


                                {
                                    isLoading ? <>
                                        <LoadingCard />
                                        <LoadingCard />
                                    </>
                                        : currentCard.map((card, Index) => {
                                            return <ComparisionCard
                                                key={card.Id}
                                                card={card}
                                                selectedcards={selectedCards}
                                                handleCheckboxChange={handleCheckboxChange}
                                                handleCouponCard={handleCouponCard}
                                            />
                                        })
                                }
                                {
                                    openCouponCArd && <CouponPopUp offset={CouponCardLocation} Coupon={coupons}
                                        close={handleCloseCouponCard} />
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
                    <div className={`bg-black bg-opacity-40 z-10 w-full flex items-center py-4 px-8 mt-2 fixed bottom-0 ${isSticky ? 'sticky w-full z-20' : ''} `}>
                        {selectedCards.map((CheckedCard) => {
                            return <SelectedCard data={CheckedCard} />
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
            : <>
                <div className='w-full px-4'>
                    <div className='w-full'>
                        <select className='w-full py-2 px-2 text-center'
                            value={productType}
                            onChange={(e) => {
                                setProductType(e.target.value)
                            }}
                        >
                            <option className='text-center' value={1}>
                                SLA Printers
                            </option>
                            <option className='text-center' value={2}>
                                FDM Printers
                            </option>
                            <option className='text-center' value={3}>
                                Leaser Cutter
                            </option>
                            <option className='text-center' value={4}>
                                3D Scannar
                            </option>
                        </select>
                        <div className='w-full my-12'>
                            {
                                currentCard && currentCard.map((card) => {
                                    return <ComparisionCard
                                        key={card.Id}
                                        card={card}
                                        selectedcards={selectedCards}
                                        handleCheckboxChange={handleCheckboxChange}
                                        handleCouponCard={handleCouponCard}
                                    />
                                })
                            }
                        </div>
                    </div>
                    {
                    openCouponCArd && <CouponPopUp offset={CouponCardLocation} Coupon={coupons}
                        close={handleCloseCouponCard} />
                }
                </div>

                {selectedCards.length > 0 && selectedCards.length <= 4 && (
                    <div className={`bg-black bg-opacity-40 z-10 w-full  items-center py-4 px-8 mt-2 fixed bottom-0 ${isSticky ? 'sticky w-full z-20' : ''} `}>
                        <div className='w-full grid grid-cols-2 gap-2'>

                            {selectedCards.map((CheckedCard) => {
                                return <SelectedCard data={CheckedCard} />
                            })}
                        </div>
                        <div className='w-full flex justify-center'>

                            <button

                                onClick={handleComparison}
                                className='border-hidden md:h-16 h-10 md:px-4 px-1 bg-customBlue hover:bg-sky-500 flex items-center justify-center rounded-md cursor-pointer text-white mx-2'
                            >

                                Comparison
                            </button>
                        </div>

                    </div>
                )}
               
            </>

    )
}
export default CompareScrollandAdd