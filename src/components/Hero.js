import React from 'react'

const Hero = () => {
    const HeroText = "<Adam />";

    return (
        <div className='w-full h-[600px] flex flex-col justify-center items-center bg-zinc-100 dark:bg-zinc-800'>
            <p className='text-6xl dark:text-white'>{HeroText}</p>
            <p className='text-2xl dark:text-white'>My name is Adam, and I'm a web developer.</p>
        </div>
    )
}

export default Hero