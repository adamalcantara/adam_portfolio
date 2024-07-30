import React from 'react';
import Skills from './Skills';

import Resume from '../assets/Alcantara_resume_2024_noinfo.pdf';

const About = () => {
  return (
    <div className='pt-10 pb-10 dark:bg-zinc-900 ' id='about'>
      <div className='w-[80%] mx-auto text-black dark:text-white'>
        <p className='text-5xl mb-10 text-center'>About Me</p>

        {/* bio */}
        <div className='flow-root'>
          <div className='text-[20px]'>Since I can remember, I have loved creating great experiences. This has extended across multiple artistic disciplines and has manifested itself in my journey as a web developer. When I started building websites, I was fortunate to discover a passion for UX/UI.</div>
        </div>

        <div className='flow-root mt-5'>
          <div className='text-[20px]'>I started building websites in high school, using Apple's iWeb software to create simple but effective websites. My foray into full stack web development was through the University of Central Florida's Full Stack Web Development boot camp in 2021. I learned the fundamentals of web development; HTML, CSS, JavaScript, and the MERN stack.</div>
        </div>

        <div className='flow-root mt-5'>
          <div className='text-[20px]'>In 2024, I earned a Bachelor of Science in Computer Science from Wilmington University. For my final project at Wilmington, I decided I would learn how to build custom WordPress themes using php to harness functionality built into WordPress.</div>
      </div>

      <Skills />
      <div className='flex justify-center mt-5'>
        <a href={Resume} className='bg-black dark:bg-white hover:bg-zinc-500 dark:hover:bg-zinc-500 text-white p-2 dark:text-black inline-block'>Download My Resume</a>
      </div>
    </div>
    </div >
  )
}

export default About