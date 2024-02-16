import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useState } from 'react'

const FDMProsAndCons = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isToggledCons, setIsToggledCons] = useState(false);
    
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    const handleToggleCons = () => {
        setIsToggledCons(!isToggledCons);
    };

    return (
        <div className='my-8 pl-8 pr-12 '>
            <div onClick={handleToggle} className='mb-4'>
                <div className='flex justify-between px-8 py-4 bg-stone-50 rounded-xl'>
                    <div className='text-neutral-700 text-2xl font-bold lg:font-medium '>
                        Pros
                    </div>
                    <div className=' '>
                        {isToggled ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large'/>}
                    </div>
                </div>
                {isToggled && (
                    <ul className='list-disc px-16 bg-stone-50 text-neutral-700 text-xl font-medium pb-8'>
                        <li>Pros Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </li>
                        <li>At vero eos et accusam et justo duo dolores et ea rebum. Stet </li>
                        <li>clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>
                    </ul>
                )}
            </div>
            <div onClick={handleToggleCons} className='mb-4'>
                <div className='flex justify-between px-8 py-4 bg-stone-50 rounded-xl'>
                    <div className='text-neutral-700 font-bold text-2xl lg:font-medium '>
                        Cons
                    </div>
                    <div className=' '>
                        {isToggledCons ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large'/>}
                    </div>
                </div>
                {isToggledCons && (
                    <ul className='list-disc px-16 bg-stone-50 text-neutral-700 text-xl font-medium pb-8'>
                        <li>Pros Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </li>
                        <li>At vero eos et accusam et justo duo dolores et ea rebum. Stet </li>
                        <li>clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default FDMProsAndCons
