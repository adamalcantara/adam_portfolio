import React from 'react'

// import icons
import { FaHtml5, FaCss3, FaReact, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <div className='mt-10 text-black dark:text-white'>
        <div className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-5'>
            <div className='flex flex-col justify-center items-center'>
                <FaHtml5  className='text-3xl'/>
                <p className='text-2xl'>HTML</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <FaCss3  className='text-3xl'/>
                <p className='text-2xl'>CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <IoLogoJavascript  className='text-3xl'/>
                <p className='text-2xl'>JavaScript</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <FaReact  className='text-3xl'/>
                <p className='text-2xl'>ReactJS</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <RiTailwindCssFill  className='text-3xl'/>
                <p className='text-2xl'>Tailwind CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <DiMongodb className='text-3xl' />
                <p className='text-2xl'>MongoDB</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <FaPython className='text-3xl' />
                <p className='text-2xl'>Python</p>
            </div>
        </div>
    </div>
  )
}

export default Skills