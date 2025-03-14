import BoxText from '@/components/Helper/BoxText'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col'>
        <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* Text content */}
            <div>
                {/* BoxText */}
                <BoxText text="Digital E-Book"/>
                {/* Heading */}
                <h1 className='text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-black dark:text-white leading-[2.5rem]
                md:leading-[3.5rem]'>
                    Ebooks to Faster Your Personal and Professional{" "}
                    <span className='text-orange-500'>Development</span>
                </h1>
            </div>
            {/* Image content */}
            <div></div>
        </div>
    </div>
  )
}

export default Hero