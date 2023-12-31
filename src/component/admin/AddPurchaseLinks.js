import { useState, useEffect } from 'react'
import PurchaseLinkForm from './PurchaseLinkForm'
import { useParams } from 'react-router-dom'
import Api from '../../api/Api'
import PurchaseLinkCard from './PurchaseLinkCard'

const AddPurchaseLinks = () => {
  const { id } = useParams()
  const [err, setErr] = useState('')
  const [OldPurchaseLinks,setOldPurchaseLinks]=useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get(`/api/products/${id}`)
      } catch (error) {
        setErr("Product is not Found")
      }

    }

    const fetchOldPurchaseLinks=async ()=>{
      try {
        const result=await Api.get(`/api//products/purchaselinks/${id}`)
        setOldPurchaseLinks(result.data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    fetchOldPurchaseLinks()
  }, [])

  useEffect(()=>{
    console.log(OldPurchaseLinks)
  },[OldPurchaseLinks])

  return (
    <div className='w-full h-screen relative t-2 p-6 overflow-y-scroll '>
      {
        err ?
          <p>{err}</p>
          :
          <div className='mt-8'>
            <h2 className='text-2xl font-semibold font-sans'>Add Purchase Links</h2>
            <div className='grid w-full h-screen grid-cols-7'>
              <div className=' col-span-4 pt-6'>
                {
                  OldPurchaseLinks ? OldPurchaseLinks.map((link)=>{
                    return <PurchaseLinkCard data={link} key={link.purchaseLinksId}/>

                  })
                  :<p>Not Have Any Purchase Link</p>
                }
              </div>

              <div className=' col-span-3'>

                <div className='w-full mt-4 flex flex-col items-center'>
                  <PurchaseLinkForm id={id} />

                </div>

              </div>

            </div>

          </div>
      }

    </div>
  )
}

export default AddPurchaseLinks