import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Api from '../../../api/Api';
import { useAuth } from '../../../context/AuthContext';
import useRefresh from '../../../hooks/useRefresh';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPasword, setShowPassword] = useState(false)
  const [showLabel, setShowLabel] = useState(false)
  const [err, setErr] = useState(' ')
  const [showErr, setShowErr] = useState(false)
  const [incorrctErr, setIncorrectErr] = useState(false)
  const { auth, setAuth } = useAuth()
  const refresh = useRefresh()
  const navigate = useNavigate()

  const handleSave = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      }
    }
    try {
      await Api.post('/api/user/changepassword', {
        password,
        newPassword
      }, config)
      setIsOpen(false)
      setPassword("")
      setNewPassword("")
      setConfirmPassword("")
      setShowLabel(true)
      setTimeout(() => {
        setShowLabel(false)
      }, 5000)
    } catch (error) {
      console.log(error)
      if (error.response?.status === 403) {
        const accessToken = await refresh()
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
        try {
          await Api.post('/api/user/changepassword', {
            password,
            newPassword
          }, config)
          setIsOpen(false)
          setPassword("")
          setNewPassword("")
          setConfirmPassword("")
          setShowLabel(true)
          setTimeout(() => {
            setShowLabel(false)
          }, 5000)
        } catch (error) {
          console.log(error)
        }
      }
      else {
        if (error.response?.status === 400) {
          setErr("Incorrect Password")
          setIncorrectErr(true)
        }
        else {
          setAuth(null)
          navigate('/login')

        }
      }
    }
  }

  const processForm = async () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (newPassword != confirmPassword) {
      setErr("New Password & Confirm Password Wont Matched")
      setShowErr(true)
      return
    }
    if (!passwordRegex.test(newPassword)) {
      setErr("Password will have at least one Uppercase, Lowercase, Special Character [@$!%*?&] & Number")
      setShowErr(true)
      return
    }
    handleSave()

  }


  return (
    <div className='bg-gray-100 p-4 overflow-hidden rounded-2xl mt-4 shadow-md relative'>
      {
        showLabel &&
        <div className=' absolute top-2 left-1/2 text-lg text-green-500 font-semibold italic'>Password is Changed</div>
      }
      <div className='flex w-full justify-between px-4 '
        onClick={(e) => {
          if (!isOpen) {

            setIsOpen(true)
          }

        }}
      >
        <h3 className='text-xl'>Change Password</h3>
        <div className=' cursor-pointer'>
          {
            isOpen ?
              <FaChevronUp
                onClick={(e) => {
                  setIsOpen(false)
                }}
              /> :
              <FaChevronDown
                onClick={(e) => {
                  setIsOpen(true)
                }} />
          }
        </div>
      </div>
      {isOpen &&
        <>
          <section className='flex items-center mt-8 relative' >
            <label className='px-2 w-1/5 '>Enter Current Password</label>
            <input
              type={showPasword ? "text" : "password"}
              className={`w-4/5 p-2 rounded-xl outline-none border-[2px] ${!incorrctErr ? "border-gray-300" : "border-red-500"}`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            {showPasword ?
              <FaEye className='absolute right-5 cursor-pointer'
                onClick={(e) => setShowPassword(false)} />
              : <FaEyeSlash className='absolute right-5 cursor-pointer'
                onClick={(e) => setShowPassword(true)} />
            }
          </section>
          <section className='flex items-center mt-3 relative' >
            <label className='px-2 w-1/5'>Enter New Password</label>
            <input
              type={showPasword ? "text" : "password"}
              className={`w-4/5 p-2 rounded-xl outline-none border-[2px] ${!showErr ? "border-gray-300" : "border-red-500"}`}
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value)
                setErr("")
                setShowErr(false)
              }}
            />
            {showPasword ?
              <FaEye className='absolute right-5 cursor-pointer'
                onClick={(e) => setShowPassword(false)} />
              : <FaEyeSlash className='absolute right-5 cursor-pointer'
                onClick={(e) => setShowPassword(true)} />
            }
          </section>
          <section className='flex items-center mt-3 relative' >
            <label className='px-2 w-1/5'>Confirm New Password</label>
            <input
              type={showPasword ? "text" : "password"}
              className={`w-4/5 p-2 rounded-xl outline-none border-[2px] ${!showErr ? "border-gray-300" : "border-red-500"}`}
              value={confirmPassword}
              onChange={(e) => {
                setErr("")
                setShowErr(false)
                setConfirmPassword(e.target.value)
              }}
            />
            {showPasword ?
              <FaEye className='absolute right-5 cursor-pointer'
                onClick={(e) => setShowPassword(false)} />
              : <FaEyeSlash className='absolute right-5 cursor-pointer'
                onClick={(e) => setShowPassword(true)} />
            }
          </section>
          <div className='w-full flex mt-3 '>
            <div className='w-4/5 flex justify-center'>
              {(showErr || incorrctErr) && <p className='text-red-500'>{err}</p>}
            </div>
            <div className='w-1/5 flex justify-end'>
              <button className='px-6 py-2 bg-gray-300 rounded-xl hover:bg-customBlue hover:text-white'
                onClick={(e) => {
                  processForm()
                }}
              >Save</button>

            </div>
          </div>
        </>
      }
    </div>
  )
}


const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { auth, setAuth } = useAuth()
  const refresh = useRefresh()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [err, setErr] = useState("")
  const [showErr, setShowErr] = useState("")
  const [role, setRole] = useState(3)
  const [incorrctErr, setIncorrectErr] = useState(true)
  const [showLabel, setShowLabel] = useState(false)
  const [showPasword, setShowPassword] = useState(false)


  const handleSave = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      }
    }
    try {
      await Api.post('/api/user/create', {
        username,
        password,
        email,
        role
      }, config)
      setIsOpen(false)
      setPassword("")
      setConfirmPassword("")
      setUsername("")
      setEmail("")
      setRole(3)
      setShowLabel(true)
      setTimeout(() => {
        setShowLabel(false)
      }, 5000)
    } catch (error) {
      console.log(error)
      if (error.response?.status === 403) {
        const accessToken = await refresh()
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
        try {
          await Api.post('/api/user/create', {
            username,
            password,
            email,
            role
          }, config)
          setIsOpen(false)
          setPassword("")
          setConfirmPassword("")
          setUsername("")
          setEmail("")
          setRole(3)
          setShowLabel(true)
          setTimeout(() => {
            setShowLabel(false)
          }, 5000)
        } catch (error) {
          console.log(error)
        }
      }
      else {
        if (error.response?.status === 400) {
          setErr("Add User Failed")
          setIncorrectErr(true)
        }
        else {
          setAuth(null)
          navigate('/login')

        }
      }
    }
  }

  const processForm = async () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (password != confirmPassword) {
      setErr("New Password & Confirm Password Wont Matched")
      setShowErr(true)
      return
    }
    if (!passwordRegex.test(password)) {
      setErr("Password will have at least one Uppercase, Lowercase, Special Character [@$!%*?&] & Number")
      setShowErr(true)
      return
    }
    if (username.length < 3) {
      setErr("Usernmae must be at least character")
      setShowErr(true)
      return
    }

    if (!emailRegex.test(email)) {
      setErr("Email is not Valid")
      setShowErr(true)
      return
    }


    handleSave()
  }


  return (
    <div className='bg-gray-100 p-4 overflow-hidden rounded-2xl mt-4 shadow-md'>
      <div className='flex w-full justify-between px-4 '
        onClick={(e) => {
          if (!isOpen) {

            setIsOpen(true)
          }
        }}
      >
        <h3 className='text-xl'>Add User</h3>
        <div className=' cursor-pointer'>
          {
            isOpen ?
              <FaChevronUp
                onClick={(e) => {
                  setIsOpen(false)
                }}
              /> :
              <FaChevronDown
                onClick={(e) => {
                  setIsOpen(true)
                }} />
          }
        </div>
      </div>
      {isOpen &&
        <>
          <section className='flex items-center mt-8 justify-between w-full' >
            <div className='w-1/2 flex items-center'>
              <label className='px-2 w-1/5 '>Username</label>
              <input className=' w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300 '
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  setShowErr(false)
                  setErr("")
                }}
              />
            </div>
            <div className='w-1/2 flex items-center'>
              <label className='px-2 w-1/5 text-end'>Role</label>
              <select className='w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300'
                value={role}
                onChange={(e) => {
                  setRole(e.target.value)

                }}
              >
                <option value={3} >Editor</option>
                <option value={2}>Admin</option>
                <option value={1}>Super Admin</option>
              </select>
            </div>

          </section>
          <section className='flex items-center mt-3' >
            <label className='px-2 w-1/5 '>Enter Email</label>
            <input className=' w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300 '
              value={email}
              type='email'
              onChange={(e) => {
                setEmail(e.target.value)
                setShowErr(false)
                setErr("")
              }}
            />
          </section>
          <section className='flex items-center mt-3 relative' >
            <label className='px-2 w-1/5'>Enter Password</label>
            <input className='w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300'
              type={showPasword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setShowErr(false)
                setErr("")
              }}
            />
            {showPasword ?
              <FaEye className='absolute right-5 cursor-pointer'
                onClick={(e) => setShowPassword(false)} />
              : <FaEyeSlash className='absolute right-5 cursor-pointer'
                onClick={(e) => setShowPassword(true)} />
            }
          </section>
          <section className='flex items-center mt-3 relative' >
            <label className='px-2 w-1/5'>Confirm Password</label>
            <input className='w-4/5 p-2 rounded-xl outline-none border-[2px] border-gray-300'
              type={showPasword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                setShowErr(false)
                setErr("")
              }}
            />
            {showPasword ?
              <FaEye className='absolute right-5 cursor-pointer'
                onClick={(e) => setShowPassword(false)} />
              : <FaEyeSlash className='absolute right-5 cursor-pointer'
                onClick={(e) => setShowPassword(true)} />
            }
          </section>
          <div className='w-full flex mt-3 '>
            <div className='w-4/5 flex justify-center'>
              {(showErr || incorrctErr) && <p className='text-red-500'>{err}</p>}
            </div>
            <div className='w-1/5 flex justify-end'>
              <button className='px-6 py-2 bg-gray-300 rounded-xl hover:bg-customBlue hover:text-white'
                onClick={(e) => {
                  processForm()
                }}
              >Save</button>

            </div>
          </div>
        </>
      }
    </div>
  )
}






const UserPage = () => {

  const [users, setUsers] = useState([])
  const { auth, setAuth } = useAuth()
  const refresh = useRefresh()
  const navigate = useNavigate()

  const getAllUsers = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      }
    }
    try {
      const response = await Api.get('/api/user/getAllUser', config)
      setUsers(response.data)
    } catch (error) {
      console.log(error)
      if (error.response?.status === 403) {
        const accessToken = await refresh()
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
        try {
          const response = await Api.get('/api/user/getAllUser', config)
          setUsers(response.data)
        } catch (error) {
          console.log(error)
        }
      }
      else {
        // setAuth(null)
        // navigate('/login')
        console.log(error)
      }
    }
  }

  const deleteUser=async(userId)=>{
    // console.log(auth.accessToken)
    const config = {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      }
    }
    try {
      const response = await Api.delete(`/api/user/deleteUser/${userId}`, config)
      getAllUsers()
    } catch (error) {
      console.log(error)
      if (error.response?.status === 403) {
        const accessToken = await refresh()
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
        try {
          const response = await Api.delete('/api/user/deleteUser', config)
          getAllUsers()
        } catch (error) {
          console.log(error)
        }
      }
      else {
        // setAuth(null)
        // navigate('/login')
        console.log(error)
      }
    }
  }

  useEffect(()=>{
    auth && 
    getAllUsers()
  },[auth])

  return (
    <div className='w-full h-screen p-8 overflow-y-auto'>
      <h2 className=' text-2xl font-semibold'>User Account</h2>
      <ChangePassword />
      {
        auth && auth.role == 1 &&
        <AddUser />
      }
      {
        auth && auth.role == 1 &&
        <div className=' p-4  mt-4 '>
          <h2 className=' text-2xl font-semibold'>Existing User</h2>
          <div className='w-full grid grid-cols-5 gap-2 mt-4'>
            <div className='w-full flex justify-center'><p>Username</p></div>
            <div className='w-full flex justify-center col-span-2'><p>Email</p></div>
            <div className='w-full flex justify-center'><p>Role</p></div>
            <div className='w-full flex justify-center'><p>Operations</p></div>
          </div>

          { users && users.map((user) => {
              return <div className='w-full grid grid-cols-5 gap-2 mt-4'>
                <div className='w-full flex justify-center py-1 bg-gray-100 rounded-xl'>
                  <p>{user.username}</p>
                </div>
                <div className='w-full flex justify-center col-span-2 py-1 bg-gray-100 rounded-xl'>
                  <p>{user.email}</p>
                </div>
                <div className='w-full flex justify-center py-1 bg-gray-100 rounded-xl'>
                  {user.role == 1 && <p>Super Admin</p>}
                  {user.role == 2 && <p>Admin</p>}
                  {user.role == 3 && <p>Editor</p>}
                </div>
                <div className='w-full flex justify-around py-1'>
                  {/* <button className='px-4 bg-gray-100 rounded-xl hover:bg-customBlue hover:text-white'>Edit</button> */}
                  {
                    user.id!==auth.userId && 
                    <button className='px-4 bg-gray-100 rounded-xl hover:bg-customBlue hover:text-white'
                    onClick={(e)=>{
                      deleteUser(user.id)
                    }}
                    >Delete</button>
                  }
                </div>
              </div>
            })    
          }  
          </div>
      }

    </div>
  )
}

export default UserPage