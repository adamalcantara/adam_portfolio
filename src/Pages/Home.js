import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
    </div>
  )
}

export default Home