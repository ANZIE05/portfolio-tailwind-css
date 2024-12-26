import React from 'react'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa6";
import { ImBehance2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { LiaNpm } from "react-icons/lia";

const AboutPage = () => {
  return (
    <>
    <div className='container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-12 sm:py-16 lg:py-36 text-justify   pt-24 md:pt-32 lg:pt-32'>
      <h1 className='flex text-[28px] sm:text-[32px] md:text-[38px] lg:text-[45px] font-bold text-amber-400 gap-3 md:gap-5 justify-center lg:justify-start lg:pl-[350px]'>
        <span className='text-slate-100 text-[24px] sm:text-[28px] lg:text-[38px]'>|</span> About Me
      </h1>
      <p className='text-base sm:text-lg text-slate-100 mt-4 font-sans leading-relaxed'>
      Hello! I am Qurat Ul Ain, a Graphic Designer and Digital Marketing specialist with a solid foundation in MS Office. My journey has been driven by a love for creativity, innovation, and a focus on delivering tailored solutions for each project. Currently, I am expanding my skill set by learning front-end development, aiming to enhance the user experience through seamless, interactive design.<br/>
        &nbsp;&nbsp;&nbsp;As I am advancing in Front-end development, my goal is to become a professional in this field. I am committed to mastering HTML, CSS, and JavaScript to create websites that are engaging, functional, and visually appealing. Each project is a chance for me to grow and integrate my design skills with development, allowing me to build digital experiences that stand out.<br/>
        &nbsp;&nbsp;&nbsp;Whether I am designing visuals or building a website, I approach each task with enthusiasm and commitment to quality.
        </p>
      <div className='flex justify-center lg:justify-between w-full lg:w-40 pt-8 gap-4 lg:gap-0'>
        <Link href="https://www.linkedin.com/in/quratulain-1005/" target="_blank" rel="noopener noreferrer"
        className='text-2xl text-amber-400 shadow-amber hover:text-white'> <FaLinkedin /></Link>
  
        <Link href="https://www.behance.net/anzz10" target="_blank" rel="noopener noreferrer"
        className='text-2xl text-amber-400 shadow-amber hover:text-white'> <ImBehance2 /></Link>
  
        <Link href="https://github.com/ANZIE05" target="_blank" rel="noopener noreferrer"
        className='text-2xl text-amber-400 shadow-amber hover:text-white'> <FaGithub /></Link>
  
        <Link href="https://www.npmjs.com/~anzie05" target="_blank" rel="noopener noreferrer"
        className='text-2xl text-amber-400 shadow-amber hover:text-white'> <LiaNpm /></Link>
      </div>
    </div>
  </>
  
  )
}

export default AboutPage;