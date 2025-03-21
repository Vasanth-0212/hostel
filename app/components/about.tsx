"use client";
import React from 'react'
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';


const About = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div id='about' className='relative z-0 flex flex-col space-y-5 justify-center items-center h-screen w-screen pb-[200px] lg:space-x-10 lg:flex-row lg:pt-[150px] sm:overflow-hidden'>

            {/* {isMobile && (
                <div className='absolute z-0 bottom-1/4 right-0 h-[300px] w-[300px] translate-x-[150px] rounded-full bg-gray-300'>
                </div>
            )}
            {isMobile && (
                <div className='absolute z-0 bottom-1/4 left-0 h-[300px] w-[300px] -translate-x-[150px] rounded-full bg-gray-300'>
                </div>
            )} */}
            <div className='z-50 flex flex-col justify-center items-start space-y-3'>
                <p className='text-2xl lg:text-4xl'>About Us</p>
                <Image src='/about.png' alt='home.png' width={300} height={400}
                    className='border rounded-xl lg:h-[400px] lg:w-[600px] '
                />
            </div>
            <div className='z-50 flex flex-col w-[80%] justify-center items-start lg:w-[40%] space-y-5 ml-2'>
                <p className='text-sm lg:text-xl'>We offer comfortable, affordable, and friendly accommodations for travelers, students, and adventurers. Our hostel is designed to make your stay as relaxing and enjoyable as possible, with a variety of amenities including free Wi-Fi, cozy common areas, and well-maintained rooms. Whether you're here to explore the city, meet fellow travelers, or just need a peaceful place to rest, our welcoming staff is here to ensure you have everything you need. Experience the perfect blend of comfort, convenience, and community at [Hostel Name]!</p>
            </div>
        </div>
    )
}

export default About;
