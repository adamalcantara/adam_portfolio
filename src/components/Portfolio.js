import React from 'react';
import Card from './Cards';

const Portfolio = () => {
  return (
    <div className='pt-10 dark:bg-zinc-900' id='myWork'>
        <p className='text-5xl mb-10 text-center dark:text-white'>My Work</p>
        <Card />
    </div>
  )
}

export default Portfolio