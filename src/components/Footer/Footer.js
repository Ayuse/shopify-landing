import React, { useEffect } from 'react';
import './Footer.scss';
import arrow from '../../images/ArrowRight.svg';
import guy from '../../images/guy.png';
import sticky from '../../images/sticky.png';
import logo from '../../images/Logos.png';
import gsap from 'gsap';

export default function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container' data-scroll-section>
        <div className='footer-header'>
          <div className='header-text'>
            <h1>Read our blog</h1>
            <h2>
              We give actionable tips, strategies, and techniques to grow your
              business.
            </h2>
          </div>
          <button>
            <h3>View All</h3>
            <img src={arrow} alt='' />
          </button>
        </div>
        <div className='cards'>
          <div className='card-inner'>
            <img src={sticky} alt='' />
            <h1>
              Improve your business ecommerce <br /> management
            </h1>
            <a href='#'>Read More</a>
          </div>

          <div className='card-inner'>
            <img src={guy} alt='' />
            <h1>
              Ecommerce Hosting: What to Look for in a <br /> Host
            </h1>
            <a href='#'>Read More</a>
          </div>
        </div>
      </div>

      <section className='last-footer' data-scroll-section>
        <div className='header'>
          <h1>
            We can take care of the <br /> installation
          </h1>
          <h2>
            Don’t want to deal with technical stuff? Let us fire up Uvodo for
            you, so you <br />
            can spend your time selling right away.
          </h2>
          <button>CONTACT US</button>
        </div>
        <div className='divider-one'></div>
        <div className='header-body'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='text'>
            <h1>Features</h1>
            <h2>Find a partner</h2>
            <h2>Become a Partner</h2>
            <h2>Affiliates</h2>
            <h2>Partner Offers</h2>
            <h2>Store Examples</h2>
          </div>
          <div className='text'>
            <h1>Company</h1>
            <h2>Leaders</h2>
            <h2>About Us</h2>
            <h2>Careers</h2>
            <h2>Press</h2>
            <h2>Awards</h2>
          </div>
          <div className='text'>
            <h1>Resources</h1>
            <h2>Overview</h2>
            <h2>Articles</h2>
            <h2>Webinars</h2>
            <h2>Events</h2>
            <h2>Ecommerce</h2>
          </div>
          <div className='text'>
            <h1>Get Help</h1>
            <h2>Shopify Community</h2>
            <h2>Knowledge Base</h2>
            <h2>VideosContact</h2>
            <h2>Tech Support</h2>
            <h2>API Documentation</h2>
          </div>
        </div>
        <div className='remarks'>
          <h3>© 2022 Shopify</h3>
        </div>
        <div className='divider-two'></div>
      </section>
    </div>
  );
}
