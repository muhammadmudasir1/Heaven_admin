import React from 'react'
import { NavLink } from 'react-router-dom'

const ReviewTabbar = () => {
    return (
        <div>

            <ul>
                <li className='flex gap-24 items-center justify-center'>
                    <NavLink to={{pathname: '/product/all3dprinter'}} className='text-neutral-800 text-xl font-normal'>All 3D Printers</NavLink>
                    <NavLink to={{pathname: '/product/fdm'}} className='text-neutral-800 text-xl font-normal'>FDM</NavLink>
                    <NavLink to={{pathname: '/product/sla'}} className='text-neutral-800 text-xl font-normal'>SLA</NavLink>
                    <NavLink to={{pathname: '/product/scanner'}} className='text-neutral-800 text-xl font-normal'>Scanner</NavLink>
                    <NavLink to={{pathname: '/product/cutter'}} className='text-neutral-800 text-xl font-normal'>Cutter</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default ReviewTabbar