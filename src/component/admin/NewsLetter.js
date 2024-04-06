import React, { useEffect, useRef, useState } from 'react'
import Api from '../../api/Api'
 
const NewsLetterRow = ({data}) => {

  const date = new Date(data.createdAt);
  const buttonRef=useRef(null)

  const copyText=()=>{
    buttonRef.current.classList.add('animate-ping')
    navigator.clipboard.writeText(data.email)
    buttonRef.current.title="copied"

    setTimeout(()=>{
      buttonRef.current.classList.remove('animate-ping')
    },[50])


  }

  return (
    <tr>
      <td className='text-center py-1'>{data.email}</td>
      <td className='text-center py-1'>{date.getDate()}-{(date.getMonth() + 1)}-{date.getFullYear()}   {date.getHours()}:{date.getMinutes()}</td>
      <td className='text-center py-1'>
      <button ref={buttonRef}
      className='bg-customBlue text-white p-1 hover:bg-sky-500'
      title='Copy'
      onClick={(e)=>{
        copyText()
      }}
      >Copy</button>
      <div className=' animate-bounce'></div>
      </td>
    </tr>
  )
}

const NewsLetter = () => {
  const [emails,setEmails]=useState([])
  const buttonRef=useRef(null)
  
  useEffect(()=>{
    const fetchData=async ()=>{
      const response =await Api.get('/api/setting/getNewsLetters')
      console.log(response.data)
      return setEmails(response.data)
    }
    fetchData()
  },[])

  const copyEmails=()=>{
    const strEmail=emails.map((email)=>{
      return email.email
    }).reduce((prev,email)=>{
      return `${prev},${email}`
    })
    buttonRef.current.classList.add('animate-ping')
    console.log(buttonRef)
    navigator.clipboard.writeText(strEmail)
    setTimeout(()=>{
      buttonRef.current.classList.remove('animate-ping')
    },[50])
  }


  return (
    <div className='w-full h-full  relative overflow-hidden p-6'>
      <h2 className='w-full text-2xl font-semibold'>Newsletter</h2>
      <div className='w-full h-[80vh]'>
        <table className='w-full rounded-lg border-[1px] border-gray-400 mt-4'>
          <tr className='bg-gray-200'>
            <th className='py-2'>Email</th>
            <th className='py-2'>Submit Date</th>
            <th className='py-2'>Button</th>
          </tr>
          {
            emails.map((email)=>{
              return <NewsLetterRow data={email}/>
            })
          }
        </table>

      </div>
      <div className='flex flex-row-reverse'>

        <button className=' bg-customBlue hover:bg-sky-400 text-white p-1'
        ref={buttonRef}
        onClick={(e)=>{
          copyEmails()
        }}
        >Copy All Email</button>
      </div>
    </div>
  )
}

export default NewsLetter