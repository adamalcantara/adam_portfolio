import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className='h-[300px] dark:bg-zinc-900 flex justify-center' id='contact'>
      <div className='w-4/5 md:w-3/5 2xl:w-2/5'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact