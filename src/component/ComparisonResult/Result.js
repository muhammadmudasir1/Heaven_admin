import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import SLAspecs from './SLAspecs';
import Api from '../../api/Api';
import ebay from '../../imges/EBay_logo.png'
import amazon from '../../imges/amazon.png'
import geeksbuying from '../../imges/geeksbuying.png'
import anyCubic from '../../imges/anyCubic.png'
import artillery from '../../imges/artillery.png'
import bambuLab from '../../imges/bambuLab.svg'
import creality from '../../imges/creality.png'
import elegoo from '../../imges/elegoo.png'
import jake from '../../imges/jake.svg'
import ortur from '../../imges/ortur.png'
import qidi from '../../imges/qidi.png'
import revopoint from '../../imges/revopoint.png'
import sculpfun from '../../imges/sculpfun.png'
import tomTop from '../../imges/tomTop.png'
import twotrees from '../../imges/twotrees.png'
import ClipLoader from 'react-spinners/ClipLoader';

const PriceTile = ({ priceData }) => {
  const [price, setPrice] = useState(0)
  const [unit, setUnit] = useState('')
  const [logo, setLogo] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

      switch (priceData.siteType) {
          case 1:
              setLogo(amazon)
              break;
          case 2:
              setLogo(ebay)
              break;
          case 3:
              setLogo(geeksbuying)
              break;
          case 4:
              setLogo(tomTop)
              break;
          case 5:
              setLogo(jake)
              break;
          case 6:
              setLogo(ortur)
              break;
          case 7:
              setLogo(anyCubic)
              break;
          case 8:
              setLogo(artillery)
              break;
          case 9:
              setLogo(bambuLab)
              break;
          case 10:
              setLogo(creality)
              break;
          case 11:
              setLogo(elegoo)
              break;
          case 12:
              setLogo(revopoint)
              break;
          case 13:
              setLogo(sculpfun)
              break;
          case 14:
              setLogo(twotrees)
              break;
          case 15:
              setLogo(qidi)
              break;

      }




      const fetchPrice = async () => {
          setIsLoading(true)
          try {
              const response = await Api.get(`/api/products/price/${priceData.purchaseLinksId}`)
              setPrice(response.data.discountedPrice)
              setUnit(response.data.unit)
              
          } catch (error) {
              console.log(error)
          }

          setIsLoading(false)
      }
      console.log(priceData)
      fetchPrice()
  }, [priceData])
  return (
      <div className='flex flex-col   border-2 items-center justify-evenly border-blue-500 rounded-md py-2 h-16 my-2 w-full p-2' >
          <div className='w-1/2 h-full justify-center items-center rounded-xl p-2 bg-gray-300'>

          <img src={logo} alt="" className='w-full' />
          </div>
          <div className=' flex justify-center items-center'>
          {isLoading ?
              <div className='flex flex-col justify-center items-center py-2'>
                  <ClipLoader
                      size={10}
                      loading={isLoading}
                      color={"#026CC4"}
                  />
              </div>
              : <h1 className='pl-2 text-xl font-bold '>
                  {price}
                  <span className='text-sm ml-1 font-light'>{unit === '$' ? "USD" :"Euro"}</span></h1>
          }
          </div>
          



      </div>
  )
}

const Card=({data})=>{
  const [thumbnail,setThumbnail]=useState("")
  useEffect(()=>{
    const images=data.ProductImages
    if (Array.isArray(images)){
      for(let image of images){
        if(image.role==1){
          setThumbnail(image.path)
        }
      }
    }

  },[data])

  return(
    <div className='flex justify-center'>
            <div 
              className='flex flex-col items-center rounded-lg mx-5 py-2 h-[300px] w-[250px] px-2'
              style={{ boxShadow: '-8px 0 15px rgba(203,213,225,0.5), 0 8px 15px rgba(203,213,225,0.5)' }} >
              <div className='px-4 py-4 w-full h-32 bg-cover bg-center'
                style={{backgroundImage:`url(/${thumbnail})`}}
              />
              <h1 className='text-neutral-800 text-lg font-semibold line-clamp-2 text-center' title={data && data.product_name}>{data && data.product_name}</h1>
              <h1 className='line-through text-neutral-800 text-xl font-semibold'>
                <span className='font-light'>{data && data.unit=="€" && "Euro"}  </span>
                {data && data.price}
                <span className='font-light'>  {data && data.unit=="$" && "USD"}</span>
                
                </h1>
              <div className='flex justify-around  w-full pt-3'>
                {
                  data.purchaseLinks && data.purchaseLinks.length>0 && <>
                  <div className='w-1/2 px-1'>

                  <PriceTile priceData={data.purchaseLinks[0]} />
                  </div>
                  {
                    data.purchaseLinks.length>=2 && <div className='w-1/2 px-1'>
                      <PriceTile priceData={data.purchaseLinks[1]}/>
                      </div>
                  }
                  </>
                  
                }
              </div>
            </div>
            </div>
  )
}





const Result = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [selectedProducts,setSelectedProducts]=useState([])

  useEffect(() => {
    const Query = new URLSearchParams(location.search);
    let products=Query.get('products')
    products=JSON.parse(decodeURIComponent(products))
    if(Array.isArray(products)){
      setSelectedProducts(products) 
    }

    const fetchData=async (id)=>{
      try {
        const response=await Api.get(`/api/products/${id}`)
        
        return response.data
      } catch (error) {
        console.log(error)
        return        
      }
    }
    const fetchAllProductsData=async ()=>{
      let data=[]
    for (let productId of products){
      const responseData=await fetchData(productId)
      data=[...data,responseData]
    }
    setSelectedProducts(data)
  }
    fetchAllProductsData()
    // console.log(data)

  }, [location]);


  const fixedTabbar = () => {
    if (window.scrollY > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }
  window.addEventListener('scroll', fixedTabbar)

  return (
    <>
      <div className={`flex items-center justify-center w-full bg-white ${isSticky && "fixed top-[8vh] lg:top-[10vh] "}`} >
        <div className={`my-4 w-full px-4 grid ${selectedProducts.length>=4?"grid-cols-4":selectedProducts.length>=3?"grid-cols-3":selectedProducts.length>=2?"grid-cols-2":selectedProducts.length>=1?"grid-cols-1":""}`}>
          {selectedProducts.map((element) => {
            return <Card data={element}/>
          })
          }
        </div>
      </div>
      <SLAspecs products={selectedProducts}/>
    </>
  );
};

export default Result;
