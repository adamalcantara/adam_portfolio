import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const logoText = "<Adam />";
  return (
    <div className='flex justify-between items-center h-[55px]'>
        <div className='text-4xl ml-5'>{logoText}</div>
        <nav className='mr-5 text-3xl'>
            <Link to="/" className='ml-10'>Portfolio</Link>
            <Link to="/about" className='ml-10'>About</Link>
            <Link to="/contact" className='ml-10'>Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar