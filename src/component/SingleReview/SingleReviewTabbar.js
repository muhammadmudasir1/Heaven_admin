import React, { useState, useEffect } from 'react'

const SingleReviewTabbar = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth > 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div>
            {
                isDesktop? (
                    <>
                    <ul className='py-8 mt-3'>
                    <li className='flex items-center justify-evenly'>
                        <a href="" className='underline underline-offset-8 decoration-4 decoration-blue-500'>Alle Wichtigste</a>
                        <a href="">Erster Eindruck</a>
                        <a href="">Technichen Daten</a>
                        <a href="">Lieferumfang</a>
                        <a href="">Hardware/ <br /> Software</a>
                        <a href="">Fazit</a>
                    </li>
                </ul>
                <div class="w-full bg-zinc-100 py-8 px-12">
                    <div class="text-neutral-800 text-xl font-semibold font-['Roboto']">Alle wichtigste</div>
                </div>
                    </>
                ):(
                    ''
                )
            }
           
        </div>
    )
}

export default SingleReviewTabbar