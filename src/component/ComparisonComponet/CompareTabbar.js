import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const CompareTabbar = () => {
    const {manufacture,price,product} = useParams();
    return (
        <>
            <ul className='flex pt-8 items-center justify-center'>
                <li>
                    <NavLink to={'/result/:fdm/:price/:product'} className='px-12 text-neutral-800 text-xl font-normal'>FDM</NavLink>
                </li>
                <li>
                    <NavLink to={'/result/sla/:price/:manufacture'} className='px-12 text-neutral-800 text-xl font-normal'>SLA</NavLink>
                </li>
                <li>
                    <NavLink to={'/result/scanner/:price/:manufacture'} className='px-12 text-neutral-800 text-xl font-normal'>Scanner</NavLink>
                </li>
                <li>
                    <NavLink to={'/result/cutter/:price/:manufacture'} className='px-12 text-neutral-800 text-xl font-normal'>Cutter</NavLink>
                </li>
            </ul>
        </>
    )
}

export default CompareTabbar