import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import svgLogo from '../imges/logo.svg'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name='description' content='3dheaven bietet praxisnahe Testberichte über digitale Fertigungsmethoden. Druckertuning, aktuelle Hypes auf dem 3D-Druckermarkt' />
        <link rel="canonical" href="https://www.3dheaven.de/" />
      </Helmet>
      <div className=' w-screen h-screen overflow-hidden'>
        <div className='w-full flex justify-center mt-6'>
          <div className='  flex justify-center flex-col items-center' >
            <img src={svgLogo} alt="" className='lg:w-32 lg:h-32 h-[35px] ' />
            <div className=' transform lg:-translate-y-24 translate-y-16'>

              <h3 className='lg:text-5xl text-xl font-semibold text-sky-500 transform lg:-translate-x-32 lg:-translate-y-4 -translate-x-12 -translate-y-2 rotate-[-60deg]'>
                Oops!</h3>
              <h1 className=' lg:text-[240px] text-8xl font-semibold '>404</h1>
            </div>
            <div className='transform lg:-translate-y-14 translate-y-16 flex items-center flex-col'>
              <h3 className=' text-center text-3xl'>Page Not Found</h3>
              <p>Sorry, the page you're looking for doesn't exist.</p>
              <Link to={'/'}
                className='p-1 text-center  rounded-xl border-sky-500 border-2 mt-2 hover:bg-sky-500 hover:text-white'>Return To Home</Link>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default NotFound