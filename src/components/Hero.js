import React from 'react'

const Hero = () => {
    const HeroText = "<Adam />";

    return (
        <div className='w-full h-[800px] flex flex-col justify-center items-center bg-zinc-100'>
            <p className='text-6xl'>{HeroText}</p>
            <p className='text-2xl'>My name is Adam, and I'm a web developer.</p>
        </div>
    )
}

export default Hero