import React from 'react'

const WarningBannar = () => {
  return (
    <div className='w-full p-4 flex flex-col items-center rounded-2xl border-[#EFBE25] border-[2px] '>
        <div className='w-full flex items-start'>
            <div className='p-2 w-8 h-8 bg-[#EFBE25] rounded-full flex justify-center items-center'>
                <p className=' text-2xl text-gray-500'>!</p>
            </div>    
            <h2 className='text-2xl px-2'>Hinweis auf Gefahrenquelle: &lt;link&gt; Bundesamt für Strahlenschutz&lt;link&gt;  </h2>
        </div>
        <div className='w-full mt-4'>
        <p className='mt-2'>Ferner sei auf Folgendes exemplarisch hingewiesen:</p>   
        <p className='mt-2'>Bei Arbeiten mit Lasergeräten der Klasse CAT IV:</p>   
        <ul className='mt-2'>
            <li className='ml-6 list-disc'>herrscht Entzundungsgefahr</li>    
            <li className='ml-6 list-disc'>können giftige Gase und Feinpartikel entstehen</li>    
            <li className='ml-6 list-disc'>der direkte und reflektierte Laserstrahl kann zu Schäden für Haut und insbesondere dem Augenlicht führen.</li>    
        </ul>   
        <p className='mt-2'>Empfehlenswerte Schutzmaßnahmen wie eine feuerfeste Einhausung, Absaugung und Laserschutzbrille sind beispielhaft und nicht abschließend. Generell sollte keinem Dritten Zugriff gewährt werden.</p>   
        <p className='mt-2'>Schutzeinhausung ab &lt;link&lt;89,00 Euro&lt;link&lt; mit Code: NNNSCU720</p>   
        </div>
    </div>
  )
}

export default WarningBannar