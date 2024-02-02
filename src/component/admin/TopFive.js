import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import TopFiveCard from './TopFiveCard'
import Api from '../../api/Api';
import Star from "../../imges/Star.svg"
import halfStar from "../../imges/halfStar.svg"
import GrayStar from "../../imges/grayStar.svg"
import ClipLoader from 'react-spinners/ClipLoader';
import { FaCheck } from "react-icons/fa";



const SearchedLines = ({ product, selectedItems, setInCards, reRender }) => {
    const [yellowStar, setYellowStar] = useState()
    const [grayStar, setGrayStar] = useState()
    const [includeInSelected, setIncludeInSelected] = useState()

    useEffect(() => {
        setIncludeInSelected(selectedItems.includes(product.Id))
    }, [selectedItems])

    useEffect(() => {
        setYellowStar(Array.from({ length: product.overall_rating }, (_, index) => index + 1))
        setGrayStar(Array.from({ length: 5 - product.overall_rating }, (_, index) => index + 1))
    }, [product])

    const InsertProduct = () => {
        setInCards((cards) => {
            cards.pop()
            return [...cards, product]

        })
        setIncludeInSelected(true)
        reRender()
    }

    const popFromProduct = () => {
        setInCards((cards) => {
            const temp = cards.filter((card) => {
                if (card.Id === product.Id) {
                    return false

                }
                else {
                    return true
                }

            })
            return [...temp, null]
        })
        setIncludeInSelected(false)


    }

    return <div className='w-full h-[70px] bg-gray-200 grid grid-cols-7 my-2'>
        <div className='h-full flex justify-center items-center'>
            <input type='checkbox'
                className=' h-4 w-4'
                checked={includeInSelected}
                onChange={(e) => {
                    e.target.checked ?
                        InsertProduct()
                        : popFromProduct()

                }}
            />
        </div>
        <div className=' col-span-2 h-full flex items-center'>
            <p className='line-clamp-2 text-lg'>
                {product.product_name}
            </p>
        </div>
        <div className='col-span-2 h-full flex items-center text-lg'>
            {
                product.productType === 1 ?
                    <p>SLA</p>
                    : product.productType === 2 ?
                        <p>FDM</p>
                        : product.productType === 3 ?
                            <p>Leaser Cutter</p>
                            : product.productType === 4 ?
                                <p>Scannar</p>
                                : <p>Other</p>
            }
        </div>
        <div className="col-span-2 h-full w-full flex items-center justify-around px-5">
            {
                yellowStar && yellowStar.map((ele, index) => {
                    return <img src={Star} key={index} className=" h-8 mr-2" />
                })
            }
            {
                grayStar && grayStar.map((ele, index) => {
                    return <img src={GrayStar} key={index} className=" h-8 mr-2" />
                })
            }


        </div>
    </div>
}


const TopFive = () => {
    const [cards, setCards] = useState([])
    const [query, setQuery] = useState('')
    const [products, setProducts] = useState([])
    const [selectedIds, setSeletedIds] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [dummpyState, setDumpyState] = useState(true)
    const [isUpdated,setIsUpdated]=useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await Api.post(`/api/products/search`, {
                    "query": query
                })
                setProducts(response.data)
                setIsLoading(false)

            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        fetchData()
    }, [query])

    const increasePriority = async (index) => {
        setCards((prev) => {
            const temp = prev[index]
            prev[index] = prev[index - 1]
            prev[index - 1] = temp
            return [...prev]
        })
    }

    const decreasePriority = async (index) => {
        setCards((prev) => {
            const temp = prev[index]
            prev[index] = prev[index + 1]
            prev[index + 1] = temp
            return [...prev]
        })
    }


    const saveTopFive = async () => {
        try {
            setIsLoading(true)
            setIsUpdated(true)
            await Api.post('/api/products/TopFive', {
                "products": selectedIds
            })
            setIsLoading(false)
            setTimeout(() => {
                setIsUpdated(false)
            }, 500)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            
        }
    }


    const setIds = () => {
        const ids = cards.map((card) => {
            if (card) {
                return card.Id
            }
            else {
                return null
            }
        })
        console.log(ids)
        setSeletedIds(ids)
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get('/api/products/topfive')
                setCards(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        setIds()
    }, [cards])

    useEffect(() => {
        console.log("reRender is Running")
    }, [dummpyState])

    const reRender = (() => {
        // setIds()
        setDumpyState((prev) => !prev)
    })

    return (
        <div className='w-full h-screen relative overflow-x-hiddden overflow-y-scroll px-8'>
            <div className='w-full relative'>
                <h2 className='my-5 text-2xl font-semibold'>Top 5 Products</h2>
                <div className='w-full h-[270px] grid grid-cols-5 gap-4'>
                    {
                        Array.isArray(cards) && cards.map((card, index) => {
                            return <TopFiveCard data={card} key={index} index={index} up={increasePriority} down={decreasePriority} />
                        })
                    }
                </div>
                <div className='w-full flex justify-end p-4'>
                    <button className='px-4 py-2 bg-gray-200 text-xl rounded-md hover:bg-customBlue hover:text-white'
                        onClick={(e) => {
                            saveTopFive()
                        }}
                    >Save</button>
                </div>
            </div>
            <div className='w-full'>
                <h2 className=' text-2xl font-semibold'>Product List</h2>
                <div className='w-full flex justify-center'>
                    <input
                        className=' outline-none p-2 w-1/5 border-gray-300 border-2 rounded-ss-full rounded-es-full'
                        placeholder='Search'
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }} />
                    <button className='py-2 bg-customBlue px-6 text-xl rounded-ee-full rounded-se-full text-white hover:bg-sky-500' ><BsSearch /> </button>
                </div>
            </div>
            <div className={`w-full h-[400px] py-3 overflow-x-hidden mt-5 relative ${isLoading?"overflow-hidden":"overflow-scroll"}`}>
                {
                    products ? products.map((product) => {
                        return <SearchedLines product={product} selectedItems={selectedIds} setInCards={setCards} reRender={reRender} />
                    })
                    : <p>Products Not Found</p>
                }

                {
                    isLoading &&
                    <>
                    <div className='w-full h-full bg-white absolute inset-0 opacity-50'/>
                    <div className='w-full h-full absolute inset-0 flex justify-center items-center'>
                    <ClipLoader
                        size={75}
                        loading={isLoading}
                        color={"#026CC4"}
                    />
                    </div>
                    </>

                }


            </div>
            {
                isUpdated &&
                <div className='w-full absolute left-0 top-0 flex justify-center items-center bg-green-600 z-[9999]'>
                    <FaCheck className='text-white text-lg' />
                    <p className='p-4 text-white text-lg'>Updated</p>
                </div>
            }
                
        </div>
    )
}

export default TopFive










