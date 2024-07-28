import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaMoon, FaGithub } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const Nav = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark])

    return (
        <div className='flex items-center h-[35px] fixed top-0 z-50 bg-white dark:bg-zinc-900 w-full md:text-2xl'>
            <div className='flex items-center mx-auto'>
                <Link to='#myWork' smooth className='mx-2 text-black dark:text-white hover:text-zinc-400 dark:hover:text-zinc-500'>My Work</Link>
                <Link to='#about' smooth className='mx-2 text-black dark:text-white hover:text-zinc-400 dark:hover:text-zinc-500'>About</Link>
                <Link to='#testimonials' smooth className='mx-2 text-black dark:text-white hover:text-zinc-400 dark:hover:text-zinc-500'>Testimonials</Link>
                <Link to='#contact' smooth className='mx-2 text-black dark:text-white hover:text-zinc-400 dark:hover:text-zinc-500'>Contact</Link>
                <a href='https://github.com/adamalcantara' target='_blank' className='mx-2 text-black dark:text-white hover:text-zinc-400 dark:hover:text-zinc-500'><FaGithub /></a>
            </div>

            {/* Button to toggle dark mode */}
            <button className='absolute right-0 mr-3 text-black dark:text-white hover:text-zinc-400 dark:hover:text-zinc-500' 
            onClick={() => {
                setDark(!dark)
            }}
            >
                {dark ? <IoIosSunny /> : <FaMoon />}
            </button>

        </div>
    )
}

export default Nav