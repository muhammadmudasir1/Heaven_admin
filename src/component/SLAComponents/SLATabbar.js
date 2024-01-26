import React from 'react'
import { NavLink } from 'react-router-dom'

const SLATabbar = () => {
    return (
        <div>

            <ul>
                <li className='flex gap-24 items-center justify-center'>
                    <NavLink to={{pathname: '/all3dprinter'}} className='text-neutral-800 text-xl font-normal'>All 3D Printers</NavLink>
                    <NavLink to={{pathname: '/fdm'}} className='text-neutral-800 text-xl font-normal'>FDM</NavLink>
                    <NavLink to={{pathname: '/sla'}} className='text-neutral-800 text-xl font-normal'>SLA</NavLink>
                    <NavLink to={{pathname: '/scanner'}} className='text-neutral-800 text-xl font-normal'>Scanner</NavLink>
                    <NavLink to={{pathname: '/cutter'}} className='text-neutral-800 text-xl font-normal'>Cutter</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default SLATabbar