import React, { useEffect } from 'react';
import logo from '../../images/Logo.svg';
import './Nav.scss';
import gsap from 'gsap';

export default function Nav() {
  useEffect(() => {
    gsap.to('.nav-container', {
      opacity: 1,
      duration: 0.5,
      ease: 'power3.in',
      delay: 1,
    });
  }, []);

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <img src={logo} alt='' />
      </div>

      <div className='nav-links'>
        <ul>
          <li>
            <a href='#'>Product</a>
          </li>
          <li>
            <a href='#'>Solutions</a>
          </li>
          <li>
            <a href='#'>Pricing</a>
          </li>
          <li>
            <a href='#'>Resources</a>
          </li>
          <li>
            <a href='#'>Customers</a>
          </li>
        </ul>
      </div>

      <div className='nav-sub-links'>
        <h1>
          <a href='#'>Login</a>
        </h1>
        <div className='start-free'>
          <h1>Start free</h1>
        </div>
      </div>
    </div>
  );
}
