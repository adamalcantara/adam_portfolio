import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const logoText = "<a>";
  return (
    <div>
        <div className='text-5xl'>{logoText}</div>
        <nav>
            <Link to="/">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar