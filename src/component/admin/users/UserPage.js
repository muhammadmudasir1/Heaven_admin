import React, { useState } from 'react'
import { FaChevronDown,FaChevronUp } from "react-icons/fa";


const ChangePassword = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-gray-100 p-4 overflow-hidden rounded-2xl mt-4 shadow-md'>
      <div className='flex w-full justify-between px-4 '>
        <h3 className='text-xl'>Change Password</h3>
        <div className=' cursor-pointer'>
          {
            isOpen?
            <FaChevronUp
            onClick={(e)=>{
              setIsOpen(false)
            }}
            />:
            <FaChevronDown
            onClick={(e)=>{
              setIsOpen(true)
            }}/>
          }
          </div>
      </div>
      {isOpen &&
        <>
          <section className='flex items-center mt-8' >
            <label className='px-2 w-1/5 '>Enter Current Password</label>
            <input className=' w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300 ' />
          </section>
          <section className='flex items-center mt-3' >
            <label className='px-2 w-1/5'>Enter New Password</label>
            <input className='w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300' />
          </section>
          <section className='flex items-center mt-3' >
            <label className='px-2 w-1/5'>Confirm New Password</label>
            <input className='w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300' />
          </section>
          <div className='w-full flex justify-end mt-3 '>
            <button className='px-6 py-2 bg-gray-300 rounded-xl hover:bg-customBlue hover:text-white'>Save</button>
          </div>
        </>
      }
    </div>
  )
}


const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-gray-100 p-4 overflow-hidden rounded-2xl mt-4 shadow-md'>
      <div className='flex w-full justify-between px-4 '>
        <h3 className='text-xl'>Add User</h3>
        <div className=' cursor-pointer'>
          {
            isOpen?
            <FaChevronUp
            onClick={(e)=>{
              setIsOpen(false)
            }}
            />:
            <FaChevronDown
            onClick={(e)=>{
              setIsOpen(true)
            }}/>
          }
          </div>
      </div>
      {isOpen &&
        <>
          <section className='flex items-center mt-8 justify-between w-full' >
          <div className='w-1/2 flex items-center'>
            <label className='px-2 w-1/5 '>Username</label>
            <input className=' w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300 ' />
            </div>
            <div className='w-1/2 flex items-center'>
            <label className='px-2 w-1/5 text-end'>Role</label>
            <select className='w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300'>
              <option>Editor</option>
              <option>Admin</option>
              <option>Super Admin</option>
            </select>
            </div>
            
          </section>
          <section className='flex items-center mt-3' >
            <label className='px-2 w-1/5 '>Enter Email</label>
            <input className=' w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300 ' />
          </section>
          <section className='flex items-center mt-3' >
            <label className='px-2 w-1/5'>Enter Password</label>
            <input className='w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300' />
          </section>
          <section className='flex items-center mt-3' >
            <label className='px-2 w-1/5'>Confirm Password</label>
            <input className='w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300' />
          </section>

          

          <div className='w-full flex justify-end mt-3 '>
            <button className='px-6 py-2 bg-gray-300 rounded-xl hover:bg-customBlue hover:text-white'>Save</button>
          </div>
        </>
      }
    </div>
  )
}






const UserPage = () => {
  return (
    <div className='w-full h-screen p-8 overflow-y-auto'>
      <h2 className=' text-2xl font-semibold'>User Account</h2>
      <ChangePassword />
      <AddUser/>
      <div className=' p-4  mt-4 '>
      <h2 className=' text-2xl font-semibold'>Existing User</h2>
      <div className='w-full grid grid-cols-5 gap-2 mt-4'>
        <div className='w-full flex justify-center'><p>Username</p></div>
        <div className='w-full flex justify-center col-span-2'><p>Email</p></div>
        <div className='w-full flex justify-center'><p>Role</p></div>
        <div className='w-full flex justify-center'><p>Operations</p></div>
      </div>
      <div className='w-full grid grid-cols-5 gap-2 mt-4'>
        <div className='w-full flex justify-center py-1 bg-gray-100 rounded-xl'>
          <p>Username</p>
        </div>
        <div className='w-full flex justify-center col-span-2 py-1 bg-gray-100 rounded-xl'>
          <p>Email</p>
          </div>
        <div className='w-full flex justify-center py-1 bg-gray-100 rounded-xl'>
        <p>Role</p>
        </div>
        <div className='w-full flex justify-around py-1'>
          <button className='px-4 bg-gray-100 rounded-xl hover:bg-customBlue hover:text-white'>Edit</button>
          <button className='px-4 bg-gray-100 rounded-xl hover:bg-customBlue hover:text-white'>Delete</button>
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default UserPage