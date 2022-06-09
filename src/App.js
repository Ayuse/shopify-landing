import React, { useEffect } from 'react';
import gsap from 'gsap';
import './App.scss';
import './reset.css';
import Nav from './components/Nav/Nav';
import BigHero from './components/Big-hero/bigHero';
import Subhero from './components/Sub-hero/Subhero';
import Footer from './components/Footer/Footer';
import useLocoScroll from '../src/hooks/useLocoScroll';

function App() {
  useLocoScroll(true);

  useEffect(() => {
    gsap.to('.container', {
      display: 'block',
      duration: 0,
    });
  }, []);

  return (
    <>
      <div className='container' id='main-container' data-scroll-container>
        <Nav />
        <BigHero />
        <Subhero />
        <Footer />
      </div>
    </>
  );
}

export default App;
