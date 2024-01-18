import { useState, useEffect } from 'react'
import PurchaseLinkForm from './PurchaseLinkForm'
import { useParams } from 'react-router-dom'
import Api from '../../api/Api'
import PurchaseLinkCard from './PurchaseLinkCard'
import { useNavigate } from 'react-router-dom'

const AddPurchaseLinks = () => {
  const { id } = useParams()
  const [err, setErr] = useState('')
  const [OldPurchaseLinks,setOldPurchaseLinks]=useState(null)
  const [data,setData]=useState()
  const navigate=useNavigate()

  const removePurchaseLink=(id)=>{
      setOldPurchaseLinks((prev)=>{
        return prev.filter((link)=>{
          if(link.purchaseLinksId!=id){
  
            return link
          }

        })
      })
  }

  const addInPurchaseLinkList=(data)=>{
    setOldPurchaseLinks((prev)=>{
      return [...prev,data]
    })
  }

  // useEffect(()=>{

  // },[])

  const fetchOldPurchaseLinks=async ()=>{
    try {
      const result=await Api.get(`/api//products/purchaselinks/${id}`)
      setOldPurchaseLinks(result.data)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get(`/api/products/${id}`)
      } catch (error) {
        setErr("Product is not Found")
      }

    }
    fetchData()
    fetchOldPurchaseLinks()
  }, [])

  useEffect(()=>{
    console.log(OldPurchaseLinks)
  },[OldPurchaseLinks])

  return (
    <div className='w-full h-screen relative pl-4 overflow-x-hidden '>
      {
        err ?
          <p>{err}</p>
          :
          <div className=''>
            <div className='grid w-full grid-cols-7'>
              <div className=' col-span-4 pt-6'>
                {
                  OldPurchaseLinks && OldPurchaseLinks.length>0 ? OldPurchaseLinks.map((link,index)=>{
                    if (link){

                      return <PurchaseLinkCard data={link} key={index} setUpdateData={setData} remove={removePurchaseLink}/>
                    }

                  })
                  :<p>Not Have Any Purchase Link</p>
                }
              </div>

              <div className=' col-span-3'>

                <div className='w-full mt-4 flex flex-col items-center'>
                  <PurchaseLinkForm id={id}
                  reRender={fetchOldPurchaseLinks}
                  updateData={data}
                  setUpdateData={setData}
                  returnToList={addInPurchaseLinkList}
                  />

                </div>
                

              </div>
              <div className='col-span-7 py-4 flex justify-between mx-5 pr-6'>
                <button className=' bg-customBlue px-6 py-2 text-white rounded-md hover:bg-sky-400'
                >Back</button>
                <button className=' bg-customBlue px-6 py-2 text-white rounded-md hover:bg-sky-400'
                onClick={(e)=>{
                  navigate(`/dashboard/addReview/${id}`)
                }}
                >Next</button>
              </div>

            </div>

          </div>
      }

    </div>
  )
}

export default AddPurchaseLinks