import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <div className='pt-10 pb-10 dark:bg-zinc-900 ' id='about'>
        <div className='w-[80%] mx-auto'>
                <p className='text-5xl mb-10 text-center dark:text-white'>About Me</p>

                {/* bio */}
                <div className='text-black dark:text-white'>
                    <p>Since I can remember, I have loved creating great experiences. This has extended across multiple artistic disciplines and has manifested itself in my journey as a web developer. When I started building websites, I was fortunate to discover a passion for UX/UI.

                        <br></br>

                    My foray into web development was through the University of Central Florida's Full Stack Web Development boot camp in 2021. I learned the fundamentals of development including ReactJS.

                    <br></br>

                    In 2024, I earned a Bachelor of Science in Computer Science from Wilmington University.
                    </p>
                </div>

                <Skills />
        </div>
    </div>
  )
}

export default About