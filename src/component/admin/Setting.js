import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RxCaretUp,RxCaretDown } from "react-icons/rx";
import TextEditor from './TextEditor';
import EditableEditor from '../Editor/EditableEditor';
import { useAuth } from '../../context/AuthContext';
import useRefresh from '../../hooks/useRefresh';
import Api from '../../api/Api';
import { useNavigate } from 'react-router-dom';

const FDMDruckerHeader=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const { t } = useTranslation()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const { auth, setAuth } = useAuth()
    const navigate=useNavigate()
    const refresh = useRefresh()

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const response= await Api.get(`/api/setting/fdmHeader`)
               console.log(response.data)
                if(response.data.title){
                    setTitle(response.data.title)
                }
                if(response.data.description){
                    setDescription(response.data.description)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    const handleSave=async()=>{
        console.log("handleSave")
        const config = {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`
            }
          }
          try {
            await Api.post('/api/setting/fdmHeader', {
            headerContent:{title,description}}, config)
          } catch (error) {
            if (error.response?.status === 403) {
              const accessToken = await refresh()
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}`,
                },
              }
              try {
                await Api.post('/api/setting/fdmHeader', {
                headerContent:{title,description}}, config)
              } catch (error) {
                console.log(error)
              }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
          }
    }

    return(
        <selection className="w-full">
                <div className='flex justify-between p-2 bg-gray-300 w-full'>
                <p className='text-1xl'>{t('fdm')} List Page Header </p>
                {
                    !isOpen?
                    <RxCaretDown className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    :<RxCaretUp className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    
                }
                </div>
                {isOpen &&
                <div className=' grid grid-cols-2 gap-2 mt-1'>
                    <div className='w-full'>

                    <label>Title:</label>
                    <textarea 
                    placeholder='Enter Title'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    />
                    </div>
                    <div className='w-full'>

                    <label>Description:</label>
                    <textarea
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    placeholder='Enter Discription'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    />
                    </div>
                    <div className=' col-span-2 w-full flex flex-row-reverse px-2'>
                        <button className=' bg-customBlue px-2 py-1 text-white hover:bg-sky-500'
                        onClick={(e)=>{
                            handleSave()
                        }}
                        >Save</button></div>
                </div>
                
                }
            </selection>
    )
}
const SLADruckerHeader=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const { t } = useTranslation()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const { auth, setAuth } = useAuth()
    const navigate=useNavigate()
    const refresh = useRefresh()

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const response= await Api.get(`/api/setting/slaHeader`)
               console.log(response.data)
                if(response.data.title){
                    setTitle(response.data.title)
                }
                if(response.data.description){
                    setDescription(response.data.description)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    const handleSave=async()=>{
        console.log("handleSave")
        const config = {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`
            }
          }
          try {
            await Api.post('/api/setting/slaHeader', {
            headerContent:{title,description}}, config)
          } catch (error) {
            if (error.response?.status === 403) {
              const accessToken = await refresh()
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}`,
                },
              }
              try {
                await Api.post('/api/setting/slaHeader', {
                headerContent:{title,description}}, config)
              } catch (error) {
                console.log(error)
              }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
          }
    }
    
    return(
        <selection className="w-full">
                <div className='flex justify-between p-2 bg-gray-300'>
                <p className='text-1xl'>{t('SLA')} List Page Header </p>
                {
                    !isOpen?
                    <RxCaretDown className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    :<RxCaretUp className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    
                }
                </div>
                {isOpen &&
                <div className=' grid grid-cols-2 gap-2 mt-1'>
                    <div className='w-full'>

                    <label>Title:</label>
                    <textarea 
                    placeholder='Enter Title'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    />
                    </div>
                    <div className='w-full'>

                    <label>Description:</label>
                    <textarea
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    placeholder='Enter Discription'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    />
                    </div>
                    <div className=' col-span-2 w-full flex flex-row-reverse px-2'>
                        <button className=' bg-customBlue px-2 py-1 text-white hover:bg-sky-500'
                        onClick={(e)=>{
                            handleSave()
                        }}
                        >Save</button></div>
                </div>
                
                }
            </selection>
    )
}
const LaserCutterHeader=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const { t } = useTranslation()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const { auth, setAuth } = useAuth()
    const navigate=useNavigate()
    const refresh = useRefresh()

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const response= await Api.get(`/api/setting/laserHeader`)
               console.log(response.data)
                if(response.data.title){
                    setTitle(response.data.title)
                }
                if(response.data.description){
                    setDescription(response.data.description)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    const handleSave=async()=>{
        console.log("handleSave")
        const config = {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`
            }
          }
          try {
            await Api.post('/api/setting/laserHeader', {
            headerContent:{title,description}}, config)
          } catch (error) {
            if (error.response?.status === 403) {
              const accessToken = await refresh()
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}`,
                },
              }
              try {
                await Api.post('/api/setting/laserHeader', {
                headerContent:{title,description}}, config)
              } catch (error) {
                console.log(error)
              }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
          }
    }
    return(
        <selection className="w-full">
                <div className='flex justify-between p-2 bg-gray-300'>
                <p className='text-1xl'>{t('laserCutter')} List Page Header </p>
                {
                    !isOpen?
                    <RxCaretDown className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    :<RxCaretUp className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    
                }
                </div>
                {isOpen &&
                <div className=' grid grid-cols-2 gap-2 mt-1'>
                    <div className='w-full'>

                    <label>Title:</label>
                    <textarea 
                    placeholder='Enter Title'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    />
                    </div>
                    <div className='w-full'>

                    <label>Description:</label>
                    <textarea
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    placeholder='Enter Discription'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    />
                    </div>
                    <div className=' col-span-2 w-full flex flex-row-reverse px-2'>
                        <button className=' bg-customBlue px-2 py-1 text-white hover:bg-sky-500'
                        onClick={(e)=>{
                            handleSave()
                        }}
                        >Save</button></div>
                </div>
                
                }
            </selection>
    )
}
const ScannarHeader=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const { t } = useTranslation()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const { auth, setAuth } = useAuth()
    const navigate=useNavigate()
    const refresh = useRefresh()

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const response= await Api.get(`/api/setting/scannarHeader`)
               console.log(response.data)
                if(response.data.title){
                    setTitle(response.data.title)
                }
                if(response.data.description){
                    setDescription(response.data.description)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    const handleSave=async()=>{
        console.log("handleSave")
        const config = {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`
            }
          }
          try {
            await Api.post('/api/setting/scannarHeader', {
            headerContent:{title,description}}, config)
          } catch (error) {
            if (error.response?.status === 403) {
              const accessToken = await refresh()
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}`,
                },
              }
              try {
                await Api.post('/api/setting/scannarHeader', {
                headerContent:{title,description}}, config)
              } catch (error) {
                console.log(error)
              }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
          }
    }

    return(
        <selection className="w-full">
                <div className='flex justify-between p-2 bg-gray-300'>
                <p className='text-1xl'>{t('3DScanner')} List Page Header </p>
                {
                    !isOpen?
                    <RxCaretDown className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    :<RxCaretUp className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    
                }
                </div>
                {isOpen &&
                <div className=' grid grid-cols-2 gap-2 mt-1'>
                    <div className='w-full'>

                    <label>Title:</label>
                    <textarea 
                    placeholder='Enter Title'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    />
                    </div>
                    <div className='w-full'>

                    <label>Description:</label>
                    <textarea
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    placeholder='Enter Discription'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    />
                    </div>
                    <div className=' col-span-2 w-full flex flex-row-reverse px-2'>
                        <button className=' bg-customBlue px-2 py-1 text-white hover:bg-sky-500'
                        onClick={(e)=>{
                            handleSave()
                        }}
                        >Save</button></div>
                </div>
                
                }
            </selection>
    )
}
const FilamentHeader=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const { t } = useTranslation()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const { auth, setAuth } = useAuth()
    const navigate=useNavigate()
    const refresh = useRefresh()

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const response= await Api.get(`/api/setting/filamentHeader`)
               console.log(response.data)
                if(response.data.title){
                    setTitle(response.data.title)
                }
                if(response.data.description){
                    setDescription(response.data.description)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    const handleSave=async()=>{
        console.log("handleSave")
        const config = {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`
            }
          }
          try {
            await Api.post('/api/setting/filamentHeader', {
            headerContent:{title,description}}, config)
          } catch (error) {
            if (error.response?.status === 403) {
              const accessToken = await refresh()
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}`,
                },
              }
              try {
                await Api.post('/api/setting/filamentHeader', {
                headerContent:{title,description}}, config)
              } catch (error) {
                console.log(error)
              }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
          }
    }

    return(
        <selection className="w-full">
                <div className='flex justify-between p-2 bg-gray-300'>
                <p className='text-1xl'>{t('Filament')} List Page Header </p>
                {
                    !isOpen?
                    <RxCaretDown className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    :<RxCaretUp className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    
                }
                </div>
                {isOpen &&
                <div className=' grid grid-cols-2 gap-2 mt-1'>
                    <div className='w-full'>

                    <label>Title:</label>
                    <textarea 
                    placeholder='Enter Title'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    />
                    </div>
                    <div className='w-full'>

                    <label>Description:</label>
                    <textarea
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    placeholder='Enter Discription'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    />
                    </div>
                    <div className=' col-span-2 w-full flex flex-row-reverse px-2'>
                        <button className=' bg-customBlue px-2 py-1 text-white hover:bg-sky-500'
                        onClick={(e)=>{
                            handleSave()
                        }}
                        >Save</button></div>
                </div>
                
                }
            </selection>
    )
}
const NewsHeader=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const { t } = useTranslation()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const { auth, setAuth } = useAuth()
    const navigate=useNavigate()
    const refresh = useRefresh()

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const response= await Api.get(`/api/setting/newsHeader`)
               console.log(response.data)
                if(response.data.title){
                    setTitle(response.data.title)
                }
                if(response.data.description){
                    setDescription(response.data.description)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    const handleSave=async()=>{
        console.log("handleSave")
        const config = {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`
            }
          }
          try {
            await Api.post('/api/setting/newsHeader', {
            headerContent:{title,description}}, config)
          } catch (error) {
            if (error.response?.status === 403) {
              const accessToken = await refresh()
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}`,
                },
              }
              try {
                await Api.post('/api/setting/newsHeader', {
                headerContent:{title,description}}, config)
              } catch (error) {
                console.log(error)
              }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
          }
    }

    return(
        <selection className="w-full">
                <div className='flex justify-between p-2 bg-gray-300'>
                <p className='text-1xl'>{t('news')} List Page Header </p>
                {
                    !isOpen?
                    <RxCaretDown className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    :<RxCaretUp className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    
                }
                </div>
                {isOpen &&
                <div className=' grid grid-cols-2 gap-2 mt-1'>
                    <div className='w-full'>

                    <label>Title:</label>
                    <textarea 
                    placeholder='Enter Title'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    />
                    </div>
                    <div className='w-full'>

                    <label>Description:</label>
                    <textarea
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    placeholder='Enter Discription'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    />
                    </div>
                    <div className=' col-span-2 w-full flex flex-row-reverse px-2'>
                        <button className=' bg-customBlue px-2 py-1 text-white hover:bg-sky-500'
                        onClick={(e)=>{
                            handleSave()
                        }}
                        >Save</button></div>
                </div>
                
                }
            </selection>
    )
}
const TutorialHeader=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const { t } = useTranslation()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const { auth, setAuth } = useAuth()
    const navigate=useNavigate()
    const refresh = useRefresh()

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const response= await Api.get(`/api/setting/tutorialHeader`)
               console.log(response.data)
                if(response.data.title){
                    setTitle(response.data.title)
                }
                if(response.data.description){
                    setDescription(response.data.description)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    const handleSave=async()=>{
        console.log("handleSave")
        const config = {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`
            }
          }
          try {
            await Api.post('/api/setting/tutorialHeader', {
            headerContent:{title,description}}, config)
          } catch (error) {
            if (error.response?.status === 403) {
              const accessToken = await refresh()
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}`,
                },
              }
              try {
                await Api.post('/api/setting/tutorialHeader', {
                headerContent:{title,description}}, config)
              } catch (error) {
                console.log(error)
              }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
          }
    }

    return(
        <selection className="w-full">
                <div className='flex justify-between p-2 bg-gray-300'>
                <p className='text-1xl'>Tutorial List Page Header </p>
                {
                    !isOpen?
                    <RxCaretDown className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    :<RxCaretUp className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    
                }
                </div>
                {isOpen &&
                <div className=' grid grid-cols-2 gap-2 mt-1'>
                    <div className='w-full'>

                    <label>Title:</label>
                    <textarea 
                    placeholder='Enter Title'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    />
                    </div>
                    <div className='w-full'>

                    <label>Description:</label>
                    <textarea
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    placeholder='Enter Discription'
                    rows={4}
                    className='resize-none w-full outline-none p-3 border-[1px] border-gray-400'
                    />
                    </div>
                    <div className=' col-span-2 w-full flex flex-row-reverse px-2'>
                        <button className=' bg-customBlue px-2 py-1 text-white hover:bg-sky-500'
                        onClick={(e)=>{handleSave()}}
                        >Save</button></div>
                </div>
                
                }
        </selection>
    )
}

const Imprint=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const { t } = useTranslation()
    const [text,setText]=useState("")
    const [showEditor,setShowEditor]= useState(false)
    const { auth, setAuth } = useAuth()
    const navigate=useNavigate()
    const refresh = useRefresh()

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const response= await Api.get(`/api/setting/imprint`)
               if (response.data[0].review){
                setText(response.data[0].review)
                setShowEditor(true)
               }else{
                setShowEditor(true)
               }

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    const handleSave=async()=>{
        const config = {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`
            }
          }
          try {
            await Api.post('/api/setting/imprint', {
                imprint:text}, config)
          } catch (error) {
            if (error.response?.status === 403) {
              const accessToken = await refresh()
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}`,
                },
              }
              try {
                await Api.post('/api/setting/imprint', {
                    imprint:text}, config)
              } catch (error) {
                console.log(error)
              }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
          }
    }

    return(
        <selection className="w-full">
                <div className='flex justify-between p-2 bg-gray-300'>
                <p className='text-1xl'>{t("Impressumtext")} </p>
                {
                    !isOpen?
                    <RxCaretDown className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    :<RxCaretUp className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    
                }
                </div>
                {isOpen &&
                <div className=' mt-1 w-full flex flex-col h-[400px]'>
                    <div className='w-full relative h-[350px]'>
                        <div className='w-full h-[300px]'>
                            {showEditor &&
                            <EditableEditor text={text} setText={setText} className="h-[300px]"  />
                            }
                        </div>
                    </div>
                    <div className=' w-full flex flex-row-reverse px-2 '>
                        <button className=' bg-customBlue px-2 py-1 text-white hover:bg-sky-500'
                        onClick={(e)=>{handleSave()}}
                        >Save</button></div>
                </div>
                
                }
        </selection>
    )
}

const DataPolicy=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const { t } = useTranslation()
    const [text,setText]=useState("")
    const { auth, setAuth } = useAuth()
    const navigate=useNavigate()
    const refresh = useRefresh()

    useEffect(()=>{
        const getData= async ()=>{
            try {
               const response= await Api.get(`/api/setting/dataprivacy`)
               setText(response.data[0].review)

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    const handleSave=async()=>{
        console.log("handleSave")
        const config = {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`
            }
          }
          try {
            await Api.post('/api/setting/dataprivacy', {
                imprint:text}, config)
          } catch (error) {
            if (error.response?.status === 403) {
              const accessToken = await refresh()
              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${accessToken}`,
                },
              }
              try {
                await Api.post('/api/setting/dataprivacy', {
                    imprint:text}, config)
              } catch (error) {
                console.log(error)
              }
            }
            else {
                setAuth(null)
                navigate('/login')
            }
          }
    }

    return(
        <selection className="w-full">
                <div className='flex justify-between p-2 bg-gray-300'>
                <p className='text-1xl'>{t("PrivacyPolicyText")} </p>
                {
                    !isOpen?
                    <RxCaretDown className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    :<RxCaretUp className='text-2xl p-1 rounded-full bg-customBlue text-white hover:bg-sky-500 cursor-pointer'
                    onClick={(e)=>{
                        setIsOpen((prev)=>{
                            return !prev
                        })
                    }}
                    />
                    
                }
                </div>
                {isOpen &&
                <div className=' mt-1 w-full flex flex-col h-[400px]'>
                    <div className='w-full relative h-[350px]'>
                        <div className='w-full h-[300px]'>

                        <EditableEditor text={text} setText={setText} className="h-[300px]"/>
                        </div>
                    </div>
                    <div className=' w-full flex flex-row-reverse px-2 '>
                        <button className=' bg-customBlue px-2 py-1 text-white hover:bg-sky-500'
                        onClick={(e)=>{handleSave()}}
                        >Save</button></div>
                </div>
                
                }
        </selection>
    )
}







const Setting = () => {
    

  return (
    <div className='h-full w-full flex flex-col p-6 relative'>
       <h2 className='w-full text-2xl font-semibold'>Setting</h2>
       <div className='w-full h-[80vh] '>
        <div className='w-full grid mt-3 gap-2 h-full overflow-auto'>
            <FDMDruckerHeader/>
            <SLADruckerHeader/>
            <LaserCutterHeader/>
            <ScannarHeader/>
            <FilamentHeader/>
            <NewsHeader/>
            <TutorialHeader/>
            <Imprint/>
            <DataPolicy/>
        </div>

       </div>
    </div>
  )
}

export default Setting