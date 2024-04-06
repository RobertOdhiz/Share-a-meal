import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/navlogo.png';
import './Navbar.css';

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      setIsNavVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`navbar ${isNavVisible ? '' : 'hidden'}`}>
      <div className="nav-logo">
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div>
        <Link to='/login'><button className='btn'> Get Started</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
