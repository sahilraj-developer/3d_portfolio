import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Feedbacks from './components/Feedbacks';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import Works from './components/Works';
import StarsCanvas from './components/StarsCanvas';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-promary'>
          <div className='bg-her-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
