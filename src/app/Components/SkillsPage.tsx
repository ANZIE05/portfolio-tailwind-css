import React from 'react'
import Image from 'next/image'

type Props = {
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string;
    };
};
const SkillsPage = ({skill}: Props) => {
    const {title, image, percent} = skill;
  return (
    <div className='p-4 hover:bg-[#706d6d] duration-300 transition-all cursor-pointer text-center rounded-lg bg-amber-500 opacity-90 shadow-black'>
        <Image src={image} alt={title} width={100} height={100} className='object-cover mx-auto'/>

        <h1 className='text-[18px] mt-4 text-white font-[600]'> {title}</h1>
        <div className='bg-black mt-4 rounded-lg p-2 text-white opacity-95'> {percent}</div>
      
    </div>
  )
}

export default SkillsPage
