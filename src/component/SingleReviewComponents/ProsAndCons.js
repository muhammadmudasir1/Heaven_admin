import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';

const ProsAndCons = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isToggledCons, setIsToggledCons] = useState(false);
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
                const result = await Api.get(`/api/products/review/${id}`)
                setPros(result.data[0].pros)
                setCons(result.data[0].cons)
                console.log(result.data[0].pros)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])
    useEffect(() => {
        console.log(pros)
    }, [pros])

    return (
        <div className='my-8 pl-8 pr-12 '>
            {
                pros &&
                <div onClick={handleToggle} className='mb-4'>
                    <div className='flex justify-between px-8 py-4 bg-stone-50 rounded-xl'>
                        <div className='text-neutral-700 text-2xl font-bold lg:font-medium '>
                            Pros
                        </div>
                        <div className=' '>
                            {isToggled ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large' />}
                        </div>
                    </div>
                    {isToggled && (
                        <ul className='list-disc px-16 bg-stone-50 text-neutral-700 text-xl font-medium pb-8'

                            dangerouslySetInnerHTML={{ __html: pros }}
                        />
                    )}
                </div>
            }
            {
                cons &&
                <div onClick={handleToggleCons} className='mb-4'>
                    <div className='flex justify-between px-8 py-4 bg-stone-50 rounded-xl'>
                        <div className='text-neutral-700 font-bold text-2xl lg:font-medium '>
                            Cons
                        </div>
                        <div className=' '>
                            {isToggledCons ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large' />}
                        </div>
                    </div>
                    {isToggledCons && (
                        <ul className='list-disc px-16 bg-stone-50 text-neutral-700 text-xl font-medium pb-8'
                            dangerouslySetInnerHTML={{ __html: cons }}
                        />
                    )}
                </div>
            }
        </div>
    )
}

export default ProsAndCons
