import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
      <div className='dark:bg-zinc-900 pb-10' id='contact'>
        <p className='text-5xl pt-10 mb-10 text-center dark:text-white'>Contact Me</p>
        <div className='mx-auto w-4/5 md:w-3/5 2xl:w-2/5'>
          <ContactForm />
        </div>
      </div>
  )
}

export default Contact