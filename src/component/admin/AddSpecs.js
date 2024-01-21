import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../../api/Api'
import FDMSpecs from './FDMSpecs'
import SLASpecs from './SLASpecs'
import ScannarSpecs from './ScannarSpecs'
import LaserCutterSpecs from './LaserCutterSpecs'
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';
import { FaCheck } from "react-icons/fa";


const AddSpecs = () => {
  const { id } = useParams();
  const [productType, setProductType] = useState(null)
  const [fetchData, setFetchData] = useState(null)
  const [err, setErr] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdated, setIsUpdated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get(`/api/products/${id}`)
        console.log(response.data)
        setProductType(response.data.productType)

        if (response.data.productType === 1) {
          setFetchData(response.data.SLA)
        }
        else if (response.data.productType === 2) {
          setFetchData(response.data.FDM)
        }
        else if (response.data.productType === 3) {
          setFetchData(response.data.LeaserCutter)
        }
        else if (response.data.productType === 4) {
          setFetchData(response.data.scannar)
        }

      } catch (error) {
        setErr("Product is not Found")
      }

    }
    fetchData()
  }, [])

  const updateData = async (productId, productType, specsId, data) => {
    try {
      setIsLoading(true)
      await Api.patch(`/api/products/specs/${specsId}`, {
        "product_id": productId,
        "productType": productType,
        data
      })
      document.getElementById('specs').scrollTop = 0
      setIsLoading(false)
      setIsUpdated(true)
      setTimeout(() => {
        setIsUpdated(false)
      }, 5000)
    }
    catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  const saveData = (data) => {
    try {
      data.Product_Id = id
      const sendData = async () => {
        await Api.post('/api/products/specs', data)
        navigate(`/dashboard/addPurchaseLinks/${id}`)
      }
      sendData()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div id='specs' className='w-full h-full flex flex-col overflow-x-hidden relative'>
      {err ?
        <p>{err}</p>
        : <div className='px-8'>

          {
            productType == 1 ?
              <SLASpecs saveData={saveData} oldData={fetchData} update={updateData} />
              : productType == 2 ?
                <FDMSpecs saveData={saveData} oldData={fetchData} update={updateData}/>
                : productType == 3 ?
                  <LaserCutterSpecs saveData={saveData} oldData={fetchData} update={updateData}/>
                  : productType == 4 ?
                    <ScannarSpecs saveData={saveData} oldData={fetchData} update={updateData}/>
                    : null
          }

        </div>



      }
      {
        isLoading &&
        <div className='w-full h-full absolute top-0  flex justify-center items-center z-[9999]'>
          <div className='w-full h-full absolute top-0 left-0 bg-gray-200 opacity-60' />
          <ClipLoader
            size={75}
            loading={isLoading}
            color={"#026CC4"}
          />

        </div>
      }
      {
        isUpdated &&
        <div className='w-full absolute top-0 flex justify-center items-center bg-green-600 z-[9999]'>
          <FaCheck className='text-white text-lg' />
          <p className='p-4 text-white text-lg'>Updated</p>
        </div>
      }

    </div>
  )
}

export default AddSpecs