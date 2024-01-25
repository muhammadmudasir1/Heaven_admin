import React from 'react'
import { NavLink } from 'react-router-dom'

const CompareTabbar = () => {
    return (
        <>
            <ul className='flex pt-8 items-center justify-center'>
                <li>
                    <NavLink className='px-12 text-neutral-800 text-xl font-normal'>FDM</NavLink>
                </li>
                <li>
                    <a href="" className='px-12 text-neutral-800 text-xl font-normal'>SLA</a>
                </li>
                <li>
                    <a href="" className='px-12 text-neutral-800 text-xl font-normal'>Scanner</a>
                </li>
                <li>
                    <a href="" className='px-12 text-neutral-800 text-xl font-normal'>Cutter</a>
                </li>
            </ul>
        </>
    )
}

export default CompareTabbar