import { banner } from '../images.js'
import { Image } from '@heroui/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex  justify-center mt-10'>
        
        <Image className='h-[300px]  mx-auto ' src={banner} />
    </div>
  )
}

export default Banner