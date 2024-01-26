import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useState } from 'react'

const ProsAndCons = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isToggledCons, setIsToggledCons] = useState(false);
    // Function to handle toggle
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    const handleToggleCons = () => {
        setIsToggledCons(!isToggledCons);
    };

    return (
        <div>
            <div onClick={handleToggle} className=''>
                <div className='flex justify-between px-8 py-8 bg-stone-50'>
                    <div className='text-neutral-700 text-2xl font-medium '>
                        Pros
                    </div>
                    <div className=' '>
                        {isToggled ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large'/>}
                    </div>
                </div>
                {isToggled && (
                    <ul className='list-disc px-16 bg-stone-50'>
                        <li>Pros Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </li>
                        <li>At vero eos et accusam et justo duo dolores et ea rebum. Stet </li>
                        <li>clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>
                    </ul>
                )}
            </div>
            <div onClick={handleToggleCons} className=''>
                <div className='flex justify-between px-8 py-8 bg-stone-50'>
                    <div className='text-neutral-700 text-2xl font-medium '>
                        Cons
                    </div>
                    <div className=' '>
                        {isToggledCons ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large'/>}
                    </div>
                </div>
                {isToggledCons && (
                    <ul className='list-disc px-16 bg-stone-50'>
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

export default ProsAndCons
