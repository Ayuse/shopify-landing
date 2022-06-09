import React, { useEffect } from 'react';
import gsap from 'gsap';
import './App.scss';
import './reset.css';
import Nav from './components/Nav/Nav';
import BigHero from './components/Big-hero/bigHero';
import Subhero from './components/Sub-hero/Subhero';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    gsap.to('.container', {
      display: 'block',
      duration: 0,
    });
  }, []);

  return (
    <>
      <div className='container'>
        <Nav />
        <BigHero />
        <Subhero />
        <Footer />
      </div>
    </>
  );
}

export default App;
