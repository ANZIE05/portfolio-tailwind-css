"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='lg:p-4 fixed top-0 left-0 right-0 bg-amber-400 bg-opacity-100 w-full z-50 h-20'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <h1 className='text-2xl md:text-4xl text-[#181818] font-semibold pl-10'>
                    Portfolio
                </h1>

                <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 rounded text-[#181818] border-[#181818] hover:text-white hover:border-white'>
                            <Bars3Icon className='h-6 w-6' />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 rounded text-[#181818] border-[#181818] hover:text-white hover:border-white'>
                            <XMarkIcon className='h-6 w-6' />
                        </button>
                    )}
                </div>

                <div className={`menu absolute top-full right-4 bg-[#706d6d] shadow-lg md:block md:relative md:bg-transparent md:shadow-none ${navbarOpen ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col md:flex-row items-start md:items-center p-10 md:p-0 space-y-2 md:space-y-0 md:space-x-8'>
                        <li>
                            <Link href="/" className='block py-2 pl-3 pr-4 xl:font-semibold sm:text-xl text-left md:text-center rounded md:p-0 hover:text-white hover:underline'>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className='block py-2 pl-3 pr-4 xl:font-semibold sm:text-xl text-left md:text-center rounded md:p-0 hover:text-white hover:underline'>About</Link>
                        </li>
                        <li>
                            <Link href="/skills" className='block py-2 pl-3 pr-4 xl:font-semibold sm:text-xl text-left md:text-center rounded md:p-0 hover:text-white hover:underline'>Skills</Link>
                        </li>
                        {/* <li>
                            <Link href="" className='block py-2 pl-3 pr-4 xl:font-semibold sm:text-xl text-left md:text-center rounded md:p-0 hover:text-white hover:underline'>Projects</Link>
                        </li> */}
                        <li>
                            <Link href="/contact" className='block py-2 pl-3 pr-4 xl:font-semibold sm:text-xl text-left md:text-center rounded md:p-0 hover:text-white hover:underline'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
