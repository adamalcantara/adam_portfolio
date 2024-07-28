import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import { FaMoon } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='flex justify-center fixed z-50 bg-white w-full'>
        <div>
            <Link to='#myWork' smooth className='mx-2'>My Work</Link>
            <Link to='#about' smooth className='mx-2'>About</Link>
            <Link to='#testimonials' smooth className='mx-2'>Testimonials</Link>
            <Link to='#contact' smooth className='mx-2'>Contact</Link>
        </div>
        <FaMoon />
    </div>
  )
}

export default Nav