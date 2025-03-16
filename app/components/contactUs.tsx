"use client"
import React from 'react'
import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';


const ContactUs = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className='relative z-0 mt-20 flex flex-col space-y-2 lg:flex-row lg:space-x-[50px] lg:justify-center lg:items-center lg:pt-10 lg:pb-10'>
            {isMobile && (
                <div className='absolute z-[-1] bottom-0 left-0 h-[400px] w-[400px] -translate-x-[200px] rounded-full bg-gray-300'>
                </div>
            )}

            <div className='z-[10] flex flex-col space-y-4 justify-center items-center w-full lg:w-1/2'>
                <p className='text-2xl font-bold'>Contact Us</p>
                <input type='text' placeholder='Name' className='p-2 border border-gray-300 rounded w-[90%]' />
                <input type='tel' placeholder='Phone' className='p-2 border border-gray-300 rounded w-[90%]' />
                <input type='email' placeholder='Email' className='p-2 border border-gray-300 rounded w-[90%]' />
                <textarea placeholder='Message' className='p-2 border border-gray-300 rounded w-[90%]' rows={4}></textarea>
                <button type='submit' className='p-1 h-10 w-24 bg-black text-white rounded-xl'>Submit</button>
            </div>

            <div className='z-[50] flex flex-col space-y-3 items-center justify-center mt-10 mb-10 lg:mt-0'>
                <div className='flex flex-col space-y-6'>
                    <div className='flex space-x-5'>
                        <MapPin className='lg:h-10 lg:w-10' />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-xl font-bold'>Our Office Address</p>
                            <p>123, 4th Cross, 5th Main, Bangalore, India</p>
                        </div>
                    </div>
                    <div className='flex space-x-5'>
                        <Mail className='lg:h-10 lg:w-10' />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-xl font-bold'>General Enquiries</p>
                            <p>pg@hostel.com</p>
                        </div>
                    </div>

                    <div className='flex space-x-5'>
                        <PhoneCall className='lg:h-10 lg:w-10' />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-xl font-bold'>Call Us</p>
                            <p>+81 8867492532</p>
                        </div>
                    </div>

                    <div className='flex space-x-5'>
                        <Clock className='lg:h-10 lg:w-10' />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-xl font-bold'>Our Timings</p>
                            <p>Mon - Sat :: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
