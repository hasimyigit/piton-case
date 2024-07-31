import Image from 'next/image'
import React from 'react'

const Carousel = () => {
  return (
    <div className='relative w-full h-[400px]'>
        <Image src="/Banner.png" alt="" fill  />
    </div>
  )
}

export default Carousel