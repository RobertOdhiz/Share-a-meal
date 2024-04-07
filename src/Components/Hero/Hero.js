// Hero.js
import React, { useState, useEffect } from 'react';
import './Hero.css';
import HeroBackground from '../Assets/Heroimg.jpg';
import HeroTwo from '../Assets/heroback.jpg';
import Arrow from '../Assets/Icons/arrow.svg';
import { Link } from 'react-router-dom';

function Hero() {
  const [isHeroTwo, setIsHeroTwo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHeroTwo(prevIsHeroTwo => !prevIsHeroTwo);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sectionStyle = {
    backgroundImage: `url(${isHeroTwo ? HeroTwo : HeroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    transition: 'background-image 0.5s ease-in-out',
  };

  return (
    <section id='home' className='home' style={sectionStyle}>
      <div className='hero'>
        <h2>Share<span>-a-</span>Meal</h2>
        <p className='tagline'>Let's Make Food Affordable For The Hungry</p>
        <Link to='/register/partner'><button className='btn'>
          <p>Partner With Us</p>
          <img src={Arrow} alt='' />
        </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
