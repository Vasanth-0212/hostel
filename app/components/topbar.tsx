"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { House, Menu, X } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';

const Topbar = () => {
    const buttons = ["Home", "About", "Gallery", "Contact Us"];
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [showMenuIcon, setShowMenuIcon] = useState(true);

    return (
        <>
            <div className='fixed z-50 top-0 h-16 w-full bg-black text-white p-5 flex justify-between'>
                <div className='flex space-x-2 lg:px-5'>
                    <House />
                    <p className="text-xl font-serif font-bold">H O S T E L S</p>
                </div>
                <div>
                    {!isMobile ? (
                        <div className='flex space-x-10 lg:px-10'>
                            <a href="#home" className='text-lg'>Home</a>
                            <a href="#about" className='text-lg'>About</a>
                            <a href="#services" className='text-lg'>Services</a>
                            <a href="#gallery" className='text-lg'>Gallery</a>
                            <a href="#contact" className='text-lg'>Contact Us</a>
                        </div>
                    ) : (
                        <div onClick={() => setShowMenuIcon(!showMenuIcon)}>
                            {showMenuIcon ? <Menu /> : <X />}
                        </div>
                    )}
                </div>
            </div>
            {!showMenuIcon && isMobile && (
                <div className='z-50 h-screen w-screen bg-white text-black flex flex-col justify-center items-center space-y-5'>
                    {
                        buttons.map((button, index) => (
                            <p key={index} style={{ animation: `fadeIn 0.5s ease ${index * 0.1}s forwards`, opacity: 0 }}>{button}</p>
                        ))
                    }
                </div>
            )}
            <style jsx>{`
            @keyframes fadeIn {
                to {
                opacity: 1;
                }
            }
            `}</style>
        </>
    );
}

export default Topbar;
