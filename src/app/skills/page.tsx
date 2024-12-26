import React from 'react'
import SkillsPage from '../Components/SkillsPage'

const data = [
  {
    id: 1,
    title: 'HTML',
    image: '/image/skill-images/html.png',
    percent: '90%',
  },
  {
    id: 2,
    title: 'CSS',
    image: '/image/skill-images/css.png',
    percent: '75%',
  },
  {
    id: 3,
    title: 'TypeScript',
    image: '/image/skill-images/t-s.png',
    percent: '70%',
  },
  {
    id: 4,
    title: 'NodeJs',
    image: '/image/skill-images/node-js.png',
    percent: '85%',
  },
  {
    id: 5,
    title: 'NextJs',
    image: '/image/skill-images/next-js.jpeg',
    percent: '92%',
  },
  {
    id: 6,
    title: 'Tailwind CSS',
    image: '/image/skill-images/t-s.png',
    percent: '95%',
  },
  {
    id: 7,
    title: 'Canva',
    image: '/image/skill-images/can.jpeg',
    percent: '95%',
  },
  {
    id: 8,
    title: 'AdobeIllustrator',
    image: '/image/skill-images/a-i.png',
    percent: '90%',
  },
  {
    id: 9,
    title: 'AdobePhotoshop',
    image: '/image/skill-images/a-p.png',
    percent: '80%',
  },
  {
    id: 10,
    title: 'MS Office',
    image: '/image/skill-images/ms-off.png',
    percent: '95%',
  },

]

function SkillMainPage() {
  return (
    <>
    <div className=' container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-12 sm:py-16 lg:py-18 text-justify   pt-24 md:pt-32 lg:pt-32'>
      <h1 className='flex text-[28px] sm:text-[32px] md:text-[38px] lg:text-[45px] font-bold text-amber-400 gap-3 md:gap-5 justify-center lg:justify-start lg:pl-[350px]'>
        <span className='text-slate-100 text-[24px] sm:text-[28px] lg:text-[38px]'>|</span> My Skills
      </h1>
    </div>

    <div className=' w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
      {data.map((skill) => {
        return (
          <div key={skill.id}>
            <SkillsPage skill={skill}/>
          </div>
        );
      })}
    </div>

    </>
  )
}

export default SkillMainPage;