import React from 'react';
import Contact from './contact/';

const Hero = () => (
<div className="hero-image" style={{ backgroundImage: 'url(/images/drywall-hero.jpg)' }}>
  <div className="hero-content">
    <div className="container row">
      <section className="hero-cta col s12 m12 l5 left">
        {/* <img className="hero-logo" src="./images/logo.png" alt="Dynamic Trades Logo"/> */}
        <h1>Short and Sweet Splash Text With <span>Special Words</span></h1>
        <div className="section-header__border" style={{width: '100%', margin: '10px 0'}}/>
        <a className="hero-phone" href="tel:+1865-680-2295">865-680-2295</a>
      </section>
      <Contact />
    </div>
  </div>
</div>
);

export default Hero;