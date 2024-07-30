import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xanwoykq");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <label htmlFor="name">
                Name
            </label>
            <input
                id="name"
                type="text"
                name="name"
                className='border border-zinc-300'
            />
            <label htmlFor="email">
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
            <button type="submit" disabled={state.submitting}>
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