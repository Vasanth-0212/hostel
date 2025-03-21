"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { House, Menu, X } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';

const Topbar = () => {
    const buttons = ["Home", "About", "Services", "Gallery", "Contact Us"];
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
                            {buttons.map((button, index) => (
                                <a key={index} href={`#${button.toLowerCase().replace(' ', '')}`} className='text-lg' style={{ animation: `fadeIn 0.5s ease ${index * 0.1}s forwards`, opacity: 0 }}>
                                    {button}
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div onClick={() => setShowMenuIcon(!showMenuIcon)}>
                            {showMenuIcon ? <Menu /> : <X />}
                        </div>
                    )}
                </div>
            </div>
            {!showMenuIcon && isMobile && (
                <div className='z-50 fixed inset-0 h-screen w-screen bg-gray-200 text-black flex flex-col justify-center items-center'>
                    <div
                    className='absolute top-0 right-0 p-5'
                     onClick={() => setShowMenuIcon(!showMenuIcon)}>
                        {showMenuIcon ? <Menu /> : <X />}
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-5'>
                        {
                            buttons.map((button, index) => (
                                <a key={index} style={{ animation: `fadeIn 0.5s ease ${index * 0.1}s forwards`, opacity: 0 }}
                                    className='text-xl'
                                    onClick={() => setShowMenuIcon(true)}
                                    href={`#${button.toLowerCase().replace(' ', '')}`}
                                >{button}</a>
                            ))
                        }
                    </div>
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
