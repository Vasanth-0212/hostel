"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useMediaQuery } from 'usehooks-ts';


const HomePage = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <div id='home' className='relative z-0 flex flex-col space-y-5 justify-center items-center h-screen w-screen lg:space-x-10 lg:flex-row sm:overflow-hidden'>
            {isMobile && (
                <div className='absolute z-0 top-16 right-0 h-[400px] w-[400px] translate-x-[200px] rounded-full bg-gray-300'>
                </div>
                
            )}
            {isMobile && (
                <div className='absolute z-0 bottom-0 left-0 h-[400px] w-[400px] -translate-x-[200px] rounded-full bg-gray-300'>
                </div>
            )}
            <div className='z-50'>
                <Image src='/home.png' alt='home.png' width={300} height={400}
                    className='border rounded-xl lg:h-[400px] lg:w-[600px] '
                />
            </div>
            <div className='z-50 flex flex-col justify-center items-start space-y-5 ml-8'>
                <p className='text-xl lg:text-5xl'>Come, live
                    the new kind
                    of Living.</p>
                <p className='text-md w-[80%] lg:w-[100%] lg:text-2xl'>
                    Life at a professionally managed accommodation awaits you.
                </p>
                <Button className='text-white bg-black lg:text-xl lg:p-7'>Enquire Now</Button>
            </div>
            
        </div>
    )
}

export default HomePage
