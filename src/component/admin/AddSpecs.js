import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../../api/Api'
import FDMSpecs from './FDMSpecs'
import SLASpecs from './SLASpecs'
import ScannarSpecs from './ScannarSpecs'
import LaserCutterSpecs from './LaserCutterSpecs'
import { useNavigate } from 'react-router-dom'

const AddSpecs = () => {
  const { id } = useParams();
  const [productType, setProductType] = useState(null)
  const [err, setErr] = useState(null)
  const navigate=useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get(`/api/products/${id}`)
        setProductType(response.data.productType)
      } catch (error) {
        setErr("Product is not Found")
      }

    }
    fetchData()
  }, [])
const saveData=(data)=>{
  try {
    data.Product_Id=id
    const sendData=async()=>{
      await Api.post('/api/products/specs',data)
      navigate(`/dashboard/addPurchaseLinks/${id}`)
    }
    sendData()
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className='w-full h-full px-8 flex flex-col overflow-x-hidden '>
      {err ?
        <p>{err}</p>
        : <>

          {
            productType == 1 ?
              <SLASpecs saveData={saveData}/>
              : productType == 2 ?
                <FDMSpecs saveData={saveData } />
                : productType == 3 ?
                  <LaserCutterSpecs saveData={saveData}/>
                  : productType == 4 ?
                    <ScannarSpecs saveData={saveData}/>
                    : null
          }

        </>



      }

    </div>
  )
}

export default AddSpecs