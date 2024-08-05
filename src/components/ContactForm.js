import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xanwoykq");
    if (state.succeeded) {
        return <p className='dark:text-white text-center'>Thank you for contacting me!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <label htmlFor="name" className='dark:text-white'>
                Name
            </label>
            <input
                id="name"
                type="text"
                name="name"
                className='border border-zinc-300'
            />
            <label htmlFor="email" className='dark:text-white'>
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className='border border-zinc-300'
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message" className='dark:text-white'>
                Message
            </label>
            <textarea
                id="message"
                name="message"
                className='border border-zinc-300'
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className='bg-black hover:bg-zinc-700 text-white dark:text-black dark:bg-white dark:hover:bg-zinc-200 mt-5 w-[75px] p-2'>
                Submit
            </button>
        </form>
    );
}

function App() {
    return (
        <ContactForm />
    );
}

export default App;