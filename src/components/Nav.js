import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import { FaMoon } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='fixed z-50 bg-white w-full'>
        <div>
            <Link to='#myWork' smooth>My Work</Link>
        </div>
        <FaMoon />
    </div>
  )
}

export default Nav