"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {TypeAnimation} from 'react-type-animation'
import { FaLinkedin } from "react-icons/fa6";
import { ImBehance2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { LiaNpm } from "react-icons/lia";

const HeroSection = () => {
  return (
   <section>
    <div className='grid grid-cols-1 lg:grid-cols-12 font-monstrat'>
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start lg:mt-0'>
            <h1 className='text-amber-400 mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold pt-4'>
            <span className="text-transparent bg-clip-text bg-slate-100 lg:text-4xl">
                Hello, I&apos;m Qurat Ul Ain
            </span>
            
            <br></br>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Graphic Designer",
                1000,
                "Digital Marketer",
                1000,
                "MS Office",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
        
            </h1>
            <p className='text-slate-100 text-base sm:text-lg mb-6 lg:text-xl font-sans lg:h-32 lg:w-[650px]'>
            Certified Graphic Designer and Digital Marketer with expertise in MS Office, I bring a creative edge to every project. Currently enhancing my front-end development skills, I am passionate about crafting visually compelling and user-friendly designs
            </p>

              <div className='flex justify-between w-40 '>
              <Link href="https://www.linkedin.com/in/quratulain-1005/" target="_blank" rel="noopener noreferrer"
              className='text-2xl text-amber-400 shadow-amber hover:text-white'> <FaLinkedin /></Link>

              <Link href="https://www.behance.net/anzz10" target="_blank" rel="noopener noreferrer"
              className='text-2xl text-amber-400 shadow-amber hover:text-white'> <ImBehance2 /></Link>

              <Link href="https://github.com/ANZIE05" target="_blank" rel="noopener noreferrer"
              className='text-2xl text-amber-400 shadow-amber hover:text-white'> <FaGithub /></Link>

              <Link href="https://www.npmjs.com/~anzie05" target="_blank" rel="noopener noreferrer"
              className='text-2xl text-amber-400 shadow-amber hover:text-white'> <LiaNpm /></Link>
              </div>

              <div className='mt-8'>

            <Link
              href="/#contact"
              className=" px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-slate-50 hover:bg-amber-500 hover:text-black text-white font-semibold shadow-black"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-amber-500 hover:bg-black text-white mt-3 shadow-amber"
            >
              <span className="block bg-[#121212] hover:bg-[#525252] rounded-full px-5 py-2 ">
                Download CV
              </span>
            </Link>
            </div>
        </div>

        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-[#181818] shadow-amber w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] relative overflow-hidden'>
            <Image src="/image/img01.png" 
            alt="profile picture" 
                className='w-full h-full object-cover'
                // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300} 
            height={300}/>

        </div>
        </div>
    </div>
   </section>
  )
}

export default HeroSection