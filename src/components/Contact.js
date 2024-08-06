import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
      <div className='dark:bg-zinc-900 pb-10' id='contact'>
        <p className='text-5xl pt-10 mb-10 text-center dark:text-white'>Contact Me</p>
        <div className='mx-auto flex flex-col-reverse md:flex-row justify-between w-3/5'>
          <div className='md:w-1/2 md:mr-5'>
            <ContactForm />
          </div>
          <div className='md:w-1/2 md:ml-5'>
            <p className='text-[20px]'>Should you have any questions about me or any of the projects listed here, please feel free to contact me. Thank you so much for stopping by my website, and I hope you enjoyed my portfolio!</p>
          </div>
        </div>
      </div>
  )
}

export default Contact