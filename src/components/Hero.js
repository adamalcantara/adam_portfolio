import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Hero = () => {
    const HeroText = "<Adam Alcantara />";

    useGSAP(() => {
        gsap.to('#heroText', {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
            duration: 1,
        })
    }, [])

    return (
        <div  className='w-full h-[600px] flex flex-col justify-center items-center bg-zinc-100 dark:bg-zinc-800'>
            <div id='heroText' className='flex flex-col justify-center items-center opacity-0 translate-y-10'>
                <p className='text-5xl md:text-8xl dark:text-white'>{HeroText}</p>
                <p className='text-1xl md:text-4xl mt-4 dark:text-white'>My name is Adam, and I'm a software engineer.</p>
            </div>
        </div>
    )
}

export default Hero