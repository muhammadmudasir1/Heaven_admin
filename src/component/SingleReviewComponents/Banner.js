import React from 'react'

const Banner = () => {
    const imageUrl= "https://s3-alpha-sig.figma.com/img/4ef9/f089/ec86bcd71cd5955841edc99b6c983158?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfAXVnM0ysv3yAmIeDsNOsLVG1IEfXggWWVC7Z3tqnXvyFMdkaK~TBBVVYbmGFHnEwqDBn3f90AP-3xVvKHXoE9H7ZFEb2uW7ulZQtXmXl1zSABK~rUGSJjMj4QChItjpZGDX66E6XdIMGgALpgU4OWORm8i11VoaTCp5uwFswrbBXeagiH64plMScKlLywB3aBE6VEnoAHVysRSeVol8Plt2~mB57hWJCKM9-j9L7fjiE-XswO5DeRlsQn2Zo0ttASSw02HUzzt1-QoUY6qz-mG-LjbrXvo7TisIE8vRH8rP9Py-lg17FQoDCm3HN38kZ7hVCClPUWeFmyrh46x4Q__"
  return (
    <div className='flex items-center justify-center bg-zinc-100 '>
      <h1 className='text-neutral-800 text-5xl font-bold pr-44'>Im Test Creality <br/> Ender 3 S1</h1>
      <img src={imageUrl} alt="" className='pl-44'/>
    </div>
  )
}

export default Banner
