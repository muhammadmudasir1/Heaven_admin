// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useEffect, useState } from 'react'
import { FaCaretDown,FaCaretUp } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';
import NonEditableEditor from '../Editor/NonEditableEditor';


const ProsAndCons = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isToggledCons, setIsToggledCons] = useState(false);
    const [isLoading,setIsLoading]=useState(false)
    const [pros, setPros] = useState('')
    const [cons, setCons] = useState('')
    const { id } = useParams()


    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    const handleToggleCons = () => {
        setIsToggledCons(!isToggledCons);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const result = await Api.get(`/api/products/review/${id}`)
                setPros(result.data[0].pros)
                setCons(result.data[0].cons)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        fetchData()
    }, [id])
    useEffect(() => {
        console.log(pros)
    }, [pros])

    return (
        isLoading ?
        <div className='my-8 pl-8 pr-12' id='prosAndCons'>
                <div className='mb-4'>
                    <div className='flex justify-between px-8 py-4 bg-gray-100 rounded-xl animate-pulse'>
                        <div className='text-neutral-700 text-2xl font-bold lg:font-medium '>
                            Pros
                        </div>
                    </div>
                  
                </div>
                <div className='mb-4'>
                    <div className='flex justify-between px-8 py-4 bg-gray-100 rounded-xl animate-pulse'>
                        <div className='text-neutral-700 font-bold text-2xl lg:font-medium '>
                            Cons
                        </div>
                    </div>

                </div>
        </div>
        :
        <div className='my-8 pl-8 pr-12' id='prosAndCons'>
            {
                pros &&
                <div onClick={handleToggle} className='mb-4 cursor-pointer'>
                    <div className='flex justify-between px-8 py-4 bg-stone-50 rounded-xl'>
                        <div className='text-neutral-700 text-2xl font-bold lg:font-medium '>
                            Pros
                        </div>
                        <div className=' '>
                            {isToggled ? <FaCaretUp fontSize='large' /> : <FaCaretDown fontSize='large' />}
                        </div>
                    </div>
                    {isToggled && <NonEditableEditor text={pros}/>}
                </div>
            }
            {
                cons &&
                <div onClick={handleToggleCons} className='mb-4 cursor-pointer'>
                    <div className='flex justify-between px-8 py-4 bg-stone-50 rounded-xl'>
                        <div className='text-neutral-700 font-bold text-2xl lg:font-medium '>
                            Cons
                        </div>
                        <div className=' '>
                            {isToggledCons ? <FaCaretUp fontSize='large' /> : <FaCaretDown fontSize='large' />}
                        </div>
                    </div>
                    {isToggledCons && <NonEditableEditor text={cons}/>}
                </div>
            }
        </div>
    )
}

export default ProsAndCons
