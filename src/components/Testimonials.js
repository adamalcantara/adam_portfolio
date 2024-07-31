import React from 'react'

const Testimonials = () => {
  return (
    <div className='dark:bg-zinc-900'>
      <p className='text-5xl pt-10 mb-10 text-center dark:text-white'>Testimonials</p>
      <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative dark:text-white' id='testimonials'>
        <div className='h-full'>
          <p>"I had the pleasure of being Adam's Teaching Assistant when he attended UCF's in-depth, 12 week full stack web development bootcamp. Adam worked incredibly hard during his time with us and maintained the highest possible grade average. He and I often worked together outside of class on homework issues, which was a testament to the maximum amount of effort he put in. Adam is a team player. He has a great attitude, a strong work ethic, and is generally a delight to be around. He is a multi-talented individual with a strong background in photography, design, and development. Any employer who adds him to their roster will find great value added to their team."</p>
          <p className='mt-5 float-end'>Dan Rosenbaum - Boot Camp TA</p>
        </div>
        <div className='h-full'>
          <p>"It is rare to find a standout talent like Adam, I had the pleasure of being his classmate at the UCF coding bootcamp. Adam’s eye for design and knowledge in web development was a great asset during multiple group projects. Adam would be a fantastic asset to any organization."</p>
          <p className='mt-5 float-end'>Patrick Moore - Boot Camp Classmate</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials