import React from 'react'
import { NavLink } from 'react-router-dom'

const CompareTabbar = () => {
    return (
        <>
            <ul className='flex pt-8 items-center justify-center'>
                <li>
                    <NavLink className='px-12'>FDM</NavLink>
                </li>
                <li>
                    <a href="" className='px-12'>SLA</a>
                </li>
                <li>
                    <a href="" className='px-12'>Scanner</a>
                </li>
                <li>
                    <a href="" className='px-12'>Cutter</a>
                </li>
            </ul>
        </>
    )
}

export default CompareTabbar