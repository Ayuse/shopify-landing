import React, { useEffect, useRef } from 'react';
import './bigHero.scss';
import card from '../../images/Card.png';
import layout from '../../images/layout.svg';
import wallet from '../../images/wallet.svg';
import setting from '../../images/setting.svg';
import purchase from '../../images/purchase.svg';
import database from '../../images/database.svg';
import refresh from '../../images/refresh.svg';
import gsap from 'gsap';

export default function BigHero() {
  const tl = gsap.timeline();
  let imgbig = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    tl.to(imgbig, {
      x: 0,
      duration: 1,
      ease: 'power3.OutIn',
    })
      .to(
        [line1, line2, line3],

        {
          y: 0,
          duration: 1,
          stagger: 0.1,
        },
        '+0.5'
      )
      .to('.text', {
        y: 0,
        duration: 0.6,
        opacity: 1,
      })
      .to('.hero-buttons', {
        y: 0,
        duration: 0.6,
        opacity: 1,
      });
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <section className='bigHero-container' data-scroll-section>
        <div className='hero-text'>
          <div className='hero-text-header'>
            <div className='hero-text-inner'>
              <h1 ref={(el) => (line1 = el)}>The platform</h1>
            </div>
            <div className='hero-text-inner'>
              <h1 ref={(el) => (line2 = el)}>commerce is</h1>
            </div>
            <div className='hero-text-inner'>
              <h1 ref={(el) => (line3 = el)}>built on.</h1>
            </div>
          </div>
          <div className='text'>
            Millions of the world's most successful brands <br /> trust Shopify
            to sell, ship and process payments <br /> anywhere.
          </div>
          <div className='hero-buttons'>
            <button className='admin-btn'>
              <h1>ADMIN DEMO</h1>
            </button>
            <button className='shop-demo'>
              <h1>SHOP DEMO</h1>
            </button>
          </div>
        </div>
        <div className='hero-image-block'>
          <img ref={(el) => (imgbig = el)} src={card} alt='' />
        </div>
      </section>

      <section className='sub-control' data-scroll-section>
        <h2 className='sub-header-two'>360° CUSTOMIZABLE</h2>
        <h1 className='ful-control-header'>
          Have full control over <br />
          your online store
        </h1>
        <h3 className='sub-header'>
          Take total control of your eCommerce business by owning the source
          <br />
          code and data that drive it.
        </h3>
        <div className='cards'>
          <div className='card-stack-one'>
            <div className='card'>
              <div className='card-header-row light-orange'>
                <h1>One time payment</h1>
                <img src={wallet} alt='' />
              </div>
              <div className='card-body'>
                <h1>
                  Check out our best practices and support to quickly make text
                  messaging one of your top 3 revenue channels.
                </h1>
              </div>
            </div>
            <div className='card'>
              <div className='card-header-row light-yellow'>
                <h1>Updates are always free.</h1>
                <img src={refresh} alt='' />
              </div>
              <div className='card-body'>
                <h1>
                  Shopify is so dedicated to keeping its software current that
                  it sends you free updates for a lifetime without charging you
                  anything.
                </h1>
              </div>
            </div>
            <div className='card'>
              <div className='card-header-row light-green'>
                <h1>100% customizable</h1>
                <img src={setting} alt='' />
              </div>
              <div className='card-body'>
                <h1>
                  You can customize your storefront and everything else in the
                  way you want as the owner of your source code.
                </h1>
              </div>
            </div>
          </div>
          <div className='card-stack-two'>
            <div className='card'>
              <div className='card-header-row light-green'>
                <h1>Self-reported data</h1>
                <img src={database} alt='' />
              </div>
              <div className='card-body'>
                <h1>
                  You own your data, store design and business plan, but you are
                  free to use the software platform and resources provided by
                  Shopify.
                </h1>
              </div>
            </div>
            <div className='card'>
              <div className='card-header-row light-orange'>
                <h1>Mobile frist design</h1>
                <img src={layout} alt='' />
              </div>
              <div className='card-body'>
                <h1>
                  With our mobile app, you can allow your customers to check
                  their order status, browse your store and create an account on
                  the spot.
                </h1>
              </div>
            </div>
            <div className='card'>
              <div className='card-header-row light-yellow'>
                <h1>One time payment</h1>
                <img src={purchase} alt='' />
              </div>
              <div className='card-body'>
                <h1>
                  With our mobile app, you can allow your customers to check
                  their order status, browse your store and create an account on
                  the spot.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
