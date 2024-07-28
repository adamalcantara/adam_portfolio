import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import { FaMoon, FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='flex justify-center items-center h-[35px] fixed top-0 z-50 bg-white w-full md:text-2xl'>
        <div className='flex items-center'>
            <Link to='#myWork' smooth className='mx-2 text-black hover:text-zinc-400'>My Work</Link>
            <Link to='#about' smooth className='mx-2 text-black hover:text-zinc-400'>About</Link>
            <Link to='#testimonials' smooth className='mx-2 text-black hover:text-zinc-400'>Testimonials</Link>
            <Link to='#contact' smooth className='mx-2 text-black hover:text-zinc-400'>Contact</Link>
            <a href='https://github.com/adamalcantara' target='_blank' className='text-black hover:text-zinc-400'><FaGithub /></a>
        </div>
        <FaMoon />
    </div>
  )
}

export default Nav