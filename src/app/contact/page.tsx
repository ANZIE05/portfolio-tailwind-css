import React from 'react'

import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa6";
import { ImBehance2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { LiaNpm } from "react-icons/lia";

function ContactPage() {
  return (
    <>
    <div className='container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-12 sm:py-16 lg:py-36 text-justify   pt-24 md:pt-32 lg:pt-32'>
      <h1 className='flex text-[28px] sm:text-[32px] md:text-[38px] lg:text-[45px] font-bold text-amber-400 gap-3 md:gap-5 justify-center lg:justify-start lg:pl-[350px]'>
        <span className='text-slate-100 text-[24px] sm:text-[28px] lg:text-[38px]'>|</span> Contact Me
      </h1>
   

    <section className='grid md:grid-cols-2 my-0 md:my-4 py-12 gap-12'>

        <div>       
            <h5 className='text-2xl font-bold text-white my-2'>Let&apos;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md '>
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className='socials flex flex-row gap-2'>
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
    

    <div>
        <form className='flex flex-col'>
            <div className='mb-6'>
            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
                Your Email
            </label>

            <input 
            type='email'
            id='email'
            required 
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='abc@gmail.com' />
            </div>

            <div className='mb-6'>
            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
                Subject
            </label>

            <input 
            type='text'
            id='subject'
            required 
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='Just saying hi' />
            </div>

            <div className='mb-6'>
            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
                Message
            </label>

            <textarea 
            name='message'
            id='message'
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='Let&apos;s talk about your project..' />
            </div>
        </form>

        <button
            type='submit'
            className='bg-amber-500 hover:bg-[#706d6d] text-white font-medium rounded-lg w-full py-2.5 px-5 shadow-amber'>
              Send Message
         </button>
    </div>

    

    </section>
    </div>
    </>
  )
}
export default ContactPage