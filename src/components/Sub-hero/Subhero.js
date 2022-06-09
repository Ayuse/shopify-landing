import React from 'react';
import './Subhero.scss';
import landing from '../../images/landing.png';
import graph from '../../images/graph.png';
import quick from '../../images/quick.png';
import testimonial from '../../images/testimonial.png';

export default function Subhero() {
  return (
    <div className='subhero-container' data-scroll-section>
      <div className='wrapper'>
        <h1>
          Managing your ecommerce business <br /> on the go is easy.
        </h1>
        <h2>
          Our customers enjoy complete freedom of doing business online by
          managing every <br /> aspect of their online store from their mobile
          and web devices.
        </h2>

        <img src={landing} alt='' />
      </div>

      <section className='subhero'>
        <div className='subhero-one'>
          <div className='subhero-text'>
            <h2 className='subheader'>PWA READY STOREFRONT</h2>
            <h1 className='header'>
              Own everything <br /> forever with a <br /> single payment.
            </h1>
            <h3 className='subtitle'>
              Build your dream business. Never worry about paying <br /> monthly
              fees or recurring payments again.
            </h3>
            <button>Buy Now</button>
          </div>
          <div className='subhero-one-imageContainer'>
            <img src={quick} alt='' />
          </div>
        </div>
        <div className='subhero-two'>
          <div className='subhero-one-imageContainer'>
            <img src={graph} alt='' />
          </div>
          <div className='subhero-text'>
            <h2 className='subheader'>PAY ONCE, USE LIFETIME</h2>
            <h1 className='header'>
              Getting your <br /> products sold on <br /> the easy.
            </h1>
            <h3 className='subtitle'>
              Sell your products online, and turn your social media <br />{' '}
              accounts into marketing channels.
            </h3>
            <button>Buy Now</button>
          </div>
        </div>
      </section>

      <section className='testimonial'>
        <div className='image-wrapper'>
          <img src={testimonial} alt='' />
        </div>
        <div className='text-box'>
          <h1>
            What Our <br /> Customers Say
          </h1>
          <h2>
            “Lorem ipsum dolor sit amet consectetur adipiscing elit turpis
            viverra amet elit est proin tgestas neque quis aliq vel. Viverra
            gravida orci vitae at aliquam sit accums rutrum ut convallis.”
          </h2>
          <h3 className='john'>
            <div className='dash'></div>John Carter
          </h3>
          <h3>Fashion Shoes Co.</h3>
          <div className='arrows'></div>
        </div>
      </section>
    </div>
  );
}
