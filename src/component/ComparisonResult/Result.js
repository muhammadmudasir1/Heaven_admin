import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SLAspecs from './SLAspecs';
import FDMSpecs from './FDMspecs';
import LaserSpecs from './LaserSpecs';
import ScannarSpecs from './ScannarSpecs';
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
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";





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
            <span className='text-sm ml-1 font-light'>{unit === '$' ? "USD" : "Euro"}</span></h1>
        }
      </div>




    </div>
  )
}

const Card = ({ data }) => {
  const [thumbnail, setThumbnail] = useState("")
  useEffect(() => {
    const images = data.ProductImages
    if (Array.isArray(images)) {
      for (let image of images) {
        if (image.role == 1) {
          setThumbnail(image.path)
        }
      }
    }

  }, [data])

  return (
    <div className='flex justify-center'>
      <div
        className='flex flex-col items-center rounded-lg mx-5 py-2 h-[300px] w-[250px] px-2'
        style={{ boxShadow: '-8px 0 15px rgba(203,213,225,0.5), 0 8px 15px rgba(203,213,225,0.5)' }} >
        <div className='px-4 py-4 w-full h-32 bg-cover bg-center'
          style={{ backgroundImage: `url(/api/${thumbnail})` }}
        />
        <h1 className='text-neutral-800 text-lg font-semibold line-clamp-2 text-center' title={data && data.product_name}>{data && data.product_name}</h1>
        <h1 className='line-through text-neutral-800 text-xl font-semibold'>
          <span className='font-light'>{data && data.unit == "€" && "Euro"}  </span>
          {data && data.price}
          <span className='font-light'>  {data && data.unit == "$" && "USD"}</span>

        </h1>
        <div className='flex justify-around  w-full pt-3'>
          {
            data.purchaseLinks && data.purchaseLinks.length > 0 && <>
              <div className='w-1/2 px-1'>

                <PriceTile priceData={data.purchaseLinks[0]} />
              </div>
              {
                data.purchaseLinks.length >= 2 && <div className='w-1/2 px-1'>
                  <PriceTile priceData={data.purchaseLinks[1]} />
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
  const { width } = useWindowDimensions()
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([])
  const [swiperInstance, setSwiperInstance] = useState();
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [active, setActive] = useState(0)
  const { t } = useTranslation()
  const [isLoading,setIsLoading]=useState(false)

  useEffect(() => {
    const Query = new URLSearchParams(location.search);
    let products = Query.get('products')
    products = JSON.parse(decodeURIComponent(products))
    if (Array.isArray(products)) {
      setSelectedProducts(products)
    }

    const fetchData = async (id) => {
      try {
        const response = await Api.get(`/api/products/${id}`)

        return response.data
      } catch (error) {
        console.log(error)
        return
      }
    }
    const fetchAllProductsData = async () => {
      let data = []
      setIsLoading(true)
      for (let productId of products) {
        let responseData = await fetchData(productId)
        responseData.ProductImages = responseData.ProductImages.filter((image) => {
          if (image.role !== 3) {
            return true
          }
          else {
            return false
          }
        }).sort((a, b) => {
          if (a.role > b.role) {
            return 1
          }
          if (a.role < b.role) {
            return -1
          }
          return 0
        })
        data = [...data, responseData]
      }
      setSelectedProducts(data)
      setIsLoading(false)
    }
    fetchAllProductsData()
  }, [location]);

  const handleSwiper = (swiper) => {
    setSwiperInstance(swiper)
  }


  const fixedTabbar = () => {
    if (window.scrollY > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }
  window.addEventListener('scroll', fixedTabbar)

  useEffect(()=>{
    console.log(selectedProducts)
  },[selectedProducts])

  return (
    width > 600 ?
      <>
        <div className={`flex items-center justify-center w-full bg-white ${isSticky && "fixed top-[8vh] lg:top-[10vh] z-[999]"}`} >
          <div className={`my-4 w-full px-4 grid grid-cols-4 `}>
            {selectedProducts.map((element) => {
              return <Card data={element} />
            })
            }
          </div>
        </div>
        {
          selectedProducts.length>0 && selectedProducts[0].productType===1?
          <SLAspecs products={selectedProducts} />
          : selectedProducts.length>0 &&selectedProducts[0].productType===2?<FDMSpecs products={selectedProducts}/>
          : selectedProducts.length>0 &&selectedProducts[0].productType===3?<LaserSpecs products={selectedProducts}/>
          : selectedProducts.length>0 &&selectedProducts[0].productType===4&&<ScannarSpecs products={selectedProducts}/>
        }
      </>
      : 
      <>
      {
      !isLoading &&
      selectedProducts.length>0 && selectedProducts[0].productType===1&&
      <div className='w-full h-px-4'>
        <div className=' w-screen h-10 flex items-center justify-end px-4  '>
          {
            !isBeginning ?
              <button className="text-3xl hover:text-customBlue text-gray-600"
                onClick={(e) => {
                  swiperInstance.slidePrev()
                }}
              >
                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                  <FaAngleLeft className=' text-xl' />
                </div>
              </button>
              : <div></div>
          }
          <div className='flex items-center'>
            {
              selectedProducts.map((items, i) => {
                return <div className={`mx-1 ${active === i || active + 1 == i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
              })
            }
          </div>
          {
            !isEnd && selectedProducts && selectedProducts.length > 1 ?
              <button className="text-3xl hover:text-customBlue text-gray-600"
                onClick={(e) => {
                  swiperInstance.slideNext()
                }}
              >
                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                  <FaAngleRight className='text-xl' />
                </div>
              </button>
              : <div />
          }
        </div>
        <div className='w-full grid grid-cols-3'>
          <div>
            <div className='h-[300px] mb-2'></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('installationSpace')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> Monoscreen</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('ZAxis')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('XYPixelResolution')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('ZAxisResolution')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('printingPlatform')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t("userInterface")}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('printSpeed')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('lightingTechnology')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('lightDensity')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('airPurificationSystem')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('interface')}</p></div>
            <div className='h-14  w-ful  px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> Extras</p></div>

          </div>
          <div className=' col-span-2  '>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={4}
              slidesPerView={2}
              onSwiper={(swiper) => handleSwiper(swiper)}
              onSlideChange={(swiperCurrent) => {
                setIsBeginning(swiperCurrent.isBeginning)
                setIsEnd(swiperCurrent.isEnd)
                setActive((swiperCurrent.activeIndex))
              }}
              className=' w-full h-full '
            >
              {
                selectedProducts.map((element) => {
                  { console.log(element) }
                  return <SwiperSlide
                    className='w-full p-2 '
                  >
                    <div className='w-full  bg-white rounded-xl shadow-md'
                    >
                      <div className='flex flex-col items-center rounded-lg  h-[300px] w-full overflow-hidden'>
                        <div className=' h-32 w-full  bg-cover bg-center '
                          style={{ backgroundImage: `url(/api/${element.ProductImages && element.ProductImages[0].path})` }}
                        />
                        <div className='px-1 '><h2 className=' line-clamp-2 text-center'>{element.product_name}</h2></div>
                        <p className='flex line-through'>

                          <span className='font-light'>{element && element.unit == "€" && "Euro "}  </span>  {element && element.price} <span className='font-light'>  {element && element.unit == "$" && " USD"}</span>
                        </p>
                        <div className='px-3'>

                          {
                            element.purchaseLinks && element.purchaseLinks.map((link) => {
                              return <PriceTile priceData={link} />
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.installationSpace}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.monoscreen}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.ZAxis}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.XYPixelResolution}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.ZAxisResolution}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.platform}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.userInterface}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.printSpeed}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.lightTechnology}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.lightDensity}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.airPurificationSystem}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.interface}</p></div>
                      <div className='h-14 w-ful  text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.SLA && element.SLA.extras}</p></div>

                    </div>

                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        </div>

      </div>

      }
      {
      !isLoading&&
      selectedProducts.length>0 && selectedProducts[0].productType===2&&
      <div className='w-full h-px-4'>
        <div className=' w-screen h-10 flex items-center justify-end px-4  '>
          {
            !isBeginning ?
              <button className="text-3xl hover:text-customBlue text-gray-600"
                onClick={(e) => {
                  swiperInstance.slidePrev()
                }}
              >
                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                  <FaAngleLeft className=' text-xl' />
                </div>
              </button>
              : <div></div>
          }
          <div className='flex items-center'>
            {
              selectedProducts.map((items, i) => {
                return <div className={`mx-1 ${active === i || active + 1 == i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
              })
            }
          </div>
          {
            !isEnd && selectedProducts && selectedProducts.length > 1 ?
              <button className="text-3xl hover:text-customBlue text-gray-600"
                onClick={(e) => {
                  swiperInstance.slideNext()
                }}
              >
                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                  <FaAngleRight className='text-xl' />
                </div>
              </button>
              : <div />
          }
        </div>
        <div className='w-full grid grid-cols-3'>
          <div>
            <div className='h-[300px] mb-2'></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('installationSpace')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('installationSpaceEnclouser')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('frameMaterial')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('DriveTech')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('guides')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('PrintAccuracy')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> Text</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('PrintBedTechnology')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('FilamentCompatibility')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('PrintSpeed')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('RealisticPrintingSpeed')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('maximumAcceleration')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('maximumPressureNozzleTemperature')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('MaximumPrintBedTemperature')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('MaximumPressureChamberTemperature')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('VibrationSuppression')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('AutomaticPrintBedMeasurement')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('AutomaticZOffsetCalibration')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('LidarScannar')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('DoorSensor')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('AirFilter')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('circulationFanPressureRoom')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('supportingComponentCooling')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('DataConnection')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('PrintRoomCamera')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('LEDLight')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('motherboard')}</p></div>

          </div>
          <div className=' col-span-2  '>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={4}
              slidesPerView={2}
              onSwiper={(swiper) => handleSwiper(swiper)}
              onSlideChange={(swiperCurrent) => {
                setIsBeginning(swiperCurrent.isBeginning)
                setIsEnd(swiperCurrent.isEnd)
                setActive((swiperCurrent.activeIndex))
              }}
              className=' w-full h-full '
            >
              {
                selectedProducts.map((element) => {
                  { console.log(element) }
                  return <SwiperSlide
                    className='w-full p-2 '
                  >
                    <div className='w-full  bg-white rounded-xl shadow-md'
                    >
                      <div className='flex flex-col items-center rounded-lg  h-[300px] w-full overflow-hidden'>
                        <div className=' h-32 w-full  bg-cover bg-center '
                          style={{ backgroundImage: `url(/api/${element.ProductImages && element.ProductImages[0].path})` }}
                        />
                        <div className='px-1 '><h2 className=' line-clamp-2 text-center'>{element.product_name}</h2></div>
                        <p className='flex line-through'>

                          <span className='font-light'>{element && element.unit == "€" && "Euro "}  </span>  {element && element.price} <span className='font-light'>  {element && element.unit == "$" && " USD"}</span>
                        </p>
                        <div className='px-3'>

                          {
                            element.purchaseLinks && element.purchaseLinks.map((link) => {
                              return <PriceTile priceData={link} />
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.installationSpace}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.installatingSpaceEnclouser}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.frameMaterial}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.driveTech}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.guides}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.printAccuracy}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.text}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.printBedTechnology}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.filamentCompatibility}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.printSpeed}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.realisticPrintingSpeed}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.maximumAcceleration}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.maximumPressureNozzleTemperature}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.maximumPrintBedTemperature}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.maximumPressureChamberTemperature}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.vibrationSuppresion ? "YES" : "NO"}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.automaticPrintBedMeasurement ? "YES" : "NO"}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.automaticZOffsetCalibration ? "YES" : "NO"}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.liderScannar ? "YES" : "NO"}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.doorScannar ? "YES" : "NO"}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.airFilter}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.circulationFanPressureRoom ? "YES" : "NO"}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.supportingComponentCooling ? "YES" : "NO"}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.dataConnection}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.printRoomCamera}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.LEDLighting ? "YES" : "NO"}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.FDM && element.FDM.motherboard}</p></div>

                    </div>

                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        </div>

      </div>
      }
      {
      !isLoading&&
      selectedProducts.length>0 && selectedProducts[0].productType===3&&
      <div className='w-full h-px-4'>
        <div className=' w-screen h-10 flex items-center justify-end px-4  '>
          {
            !isBeginning ?
              <button className="text-3xl hover:text-customBlue text-gray-600"
                onClick={(e) => {
                  swiperInstance.slidePrev()
                }}
              >
                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                  <FaAngleLeft className=' text-xl' />
                </div>
              </button>
              : <div></div>
          }
          <div className='flex items-center'>
            {
              selectedProducts.map((items, i) => {
                return <div className={`mx-1 ${active === i || active + 1 == i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
              })
            }
          </div>
          {
            !isEnd && selectedProducts && selectedProducts.length > 1 ?
              <button className="text-3xl hover:text-customBlue text-gray-600"
                onClick={(e) => {
                  swiperInstance.slideNext()
                }}
              >
                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                  <FaAngleRight className='text-xl' />
                </div>
              </button>
              : <div />
          }
        </div>
        <div className='w-full grid grid-cols-3'>
          <div>
            <div className='h-[300px] mb-2'></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('workSurface')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('machineWeight')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('guides')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('laserOpticalOutputPower')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('pinpointAccuracy')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('focusingMethod')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> Air Assist</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('powerSupplyOutputPower')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('interface')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('possibleEngravingMaterials')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('PossibleCuttingThicknesses')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('securityFeatures')}</p></div>

          </div>
          <div className=' col-span-2  '>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={4}
              slidesPerView={2}
              onSwiper={(swiper) => handleSwiper(swiper)}
              onSlideChange={(swiperCurrent) => {
                setIsBeginning(swiperCurrent.isBeginning)
                setIsEnd(swiperCurrent.isEnd)
                setActive((swiperCurrent.activeIndex))
              }}
              className=' w-full h-full '
            >
              {
                selectedProducts.map((element) => {
                  { console.log(element) }
                  return <SwiperSlide
                    className='w-full p-2 '
                  >
                    <div className='w-full  bg-white rounded-xl shadow-md'
                    >
                      <div className='flex flex-col items-center rounded-lg  h-[300px] w-full overflow-hidden'>
                        <div className=' h-32 w-full  bg-cover bg-center '
                          style={{ backgroundImage: `url(/api/${element.ProductImages && element.ProductImages[0].path})` }}
                        />
                        <div className='px-1 '><h2 className=' line-clamp-2 text-center'>{element.product_name}</h2></div>
                        <p className='flex line-through'>

                          <span className='font-light'>{element && element.unit == "€" && "Euro "}  </span>  {element && element.price} <span className='font-light'>  {element && element.unit == "$" && " USD"}</span>
                        </p>
                        <div className='px-3'>

                          {
                            element.purchaseLinks && element.purchaseLinks.map((link) => {
                              return <PriceTile priceData={link} />
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.workSurface}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.machineWeight}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.guides}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.laserOpticalOutputPower}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.pinpointAccuracy}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.focusingMethod}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.airAssist}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.powerSupplyOutputPower}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.interface}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.possibleEngravingMaterials}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.possibleCuttingThicknesses}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.LeaserCutter && element.LeaserCutter.securityFeatures}</p></div>

                    </div>

                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        </div>

      </div>
      }
      {
      !isLoading&&
      selectedProducts.length>0 && selectedProducts[0].productType===4&&
      <div className='w-full h-px-4'>
        <div className=' w-screen h-10 flex items-center justify-end px-4  '>
          {
            !isBeginning ?
              <button className="text-3xl hover:text-customBlue text-gray-600"
                onClick={(e) => {
                  swiperInstance.slidePrev()
                }}
              >
                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                  <FaAngleLeft className=' text-xl' />
                </div>
              </button>
              : <div></div>
          }
          <div className='flex items-center'>
            {
              selectedProducts.map((items, i) => {
                return <div className={`mx-1 ${active === i || active + 1 == i ? 'bg-customBlue ' : 'bg-gray-300 '} h-3 w-3 rounded-full`}></div>
              })
            }
          </div>
          {
            !isEnd && selectedProducts && selectedProducts.length > 1 ?
              <button className="text-3xl hover:text-customBlue text-gray-600"
                onClick={(e) => {
                  swiperInstance.slideNext()
                }}
              >
                <div className='bg-gray-200 rounded-full flex items-center justify-center p-[2px]'>
                  <FaAngleRight className='text-xl' />
                </div>
              </button>
              : <div />
          }
        </div>
        <div className='w-full grid grid-cols-3'>
          <div>
            <div className='h-[300px] mb-2'></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('scaningPrecision')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('scanAccuracy')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('workspaceScanWindow')}</p></div>
            {/* <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('scanningDistance')}</p></div> */}
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('scanSpeed')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('imageCaptureRate')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('minimumObjectSize_handScan')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('minimumObjectSize_turnTable')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('camera')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('lightSource')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('portableBattery')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('accesories')}</p></div>
            {/* <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('scanMinimumSize')}</p></div>
            <div className='h-14  w-full px-1 bg-gray-100 flex items-center text-sm'><p className='w-1/3'> {t('scanMaximumSize')}</p></div> */}

          </div>
          <div className=' col-span-2  '>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={4}
              slidesPerView={2}
              onSwiper={(swiper) => handleSwiper(swiper)}
              onSlideChange={(swiperCurrent) => {
                setIsBeginning(swiperCurrent.isBeginning)
                setIsEnd(swiperCurrent.isEnd)
                setActive((swiperCurrent.activeIndex))
              }}
              className=' w-full h-full '
            >
              {
                selectedProducts.map((element) => {
                  { console.log(element) }
                  return <SwiperSlide
                    className='w-full p-2 '
                  >
                    <div className='w-full  bg-white rounded-xl shadow-md'
                    >
                      <div className='flex flex-col items-center rounded-lg  h-[300px] w-full overflow-hidden'>
                        <div className=' h-32 w-full  bg-cover bg-center '
                          style={{ backgroundImage: `url(/api/${element.ProductImages && element.ProductImages[0].path})` }}
                        />
                        <div className='px-1 '><h2 className=' line-clamp-2 text-center'>{element.product_name}</h2></div>
                        <p className='flex line-through'>

                          <span className='font-light'>{element && element.unit == "€" && "Euro "}  </span>  {element && element.price} <span className='font-light'>  {element && element.unit == "$" && " USD"}</span>
                        </p>
                        <div className='px-3'>

                          {
                            element.purchaseLinks && element.purchaseLinks.map((link) => {
                              return <PriceTile priceData={link} />
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.scanningPrecision}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.scanAccuracy}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.workspaceScanWindow}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.scanSpeed}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.imageCaptureRate}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.minimumObjectSize_handScan}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.minimumObjectSize_turnTable}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.camera}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.lightSource}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.portableBattery}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.accesories}</p></div>
                      {/* <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.scanMinimumSize}</p></div>
                      <div className='h-14 w-full text-center  px-1 bg-gray-100 flex items-center text-sm'><p className='w-full'> {element.scanner && element.scanner.scanMaximumSize}</p></div> */}

                    </div>

                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        </div>

      </div>
      }
      </>
  );
};

export default Result;
