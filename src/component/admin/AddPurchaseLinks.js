import { useState, useEffect } from 'react'
import PurchaseLinkForm from './PurchaseLinkForm'
import { useParams } from 'react-router-dom'
import Api from '../../api/Api'
import PurchaseLinkCard from './PurchaseLinkCard'
import { useNavigate } from 'react-router-dom'

const AddPurchaseLinks = () => {
  const { id } = useParams()
  const [err, setErr] = useState('')
  const [OldPurchaseLinks, setOldPurchaseLinks] = useState(null)
  const [data, setData] = useState()
  const navigate = useNavigate()

  const removePurchaseLink = (id) => {
    setOldPurchaseLinks((prev) => {
      return prev.filter((link) => {
        if (link && link.purchaseLinksId != id) {

          return link
        }

      })
    })
  }

  const addInPurchaseLinkList = (data) => {
    setOldPurchaseLinks((prev) => {
      return [...prev, data]
    })
  }

  const fetchOldPurchaseLinks = async () => {
    try {
      setOldPurchaseLinks(null)
      const result = await Api.get(`/api//products/purchaselinks/${id}`)
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

  useEffect(() => {
    console.log(OldPurchaseLinks)
  }, [OldPurchaseLinks])

  return (
    <div className='w-full h-screen relative pl-4 overflow-x-hidden '>
      {
        err ?
          <p>{err}</p>
          :
          <div className=''>
            <div className='grid w-full 2xl:h-[800px] grid-cols-7'>
              <div className=' col-span-4 h-5/6 pt-6'>
                {

                  OldPurchaseLinks && OldPurchaseLinks.length > 0 ?
                    <div className='w-full h-full bg-sky-100 overflow-auto px-4 pb-4 rounded-lg shadow-xl'>
                      {
                        OldPurchaseLinks.map((link, index) => {
                          if (link) {

                            return <PurchaseLinkCard data={link} key={index} setUpdateData={setData} remove={removePurchaseLink} />
                          }

                        })
                      }
                    </div>
                    : <div className='w-full h-full  flex justify-center items-center'>
                      <p className='text-2xl'>Not Have Any Purchase Link</p>
                    </div>
                }
                <div className='w-full h-1/6  flex justify-end items-end'>
                  <div>

                  <button className=' bg-customBlue px-6 py-2  text-white rounded-md hover:bg-sky-400'
                    onClick={(e) => {
                      navigate(`/dashboard/addReview/${id}`)
                    }}
                    >Next</button>
                    </div>

                </div>
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

            </div>

          </div>
      }

    </div>
  )
}

export default AddPurchaseLinks