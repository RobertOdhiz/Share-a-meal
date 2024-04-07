import React, { useState } from 'react';
import './Styles/Menu.css';
import Logo from './../../Components/Assets/navlogo.png';

function CBOMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className={`side-menu ${isMenuOpen ? 'open' : 'closed'}`}>
      <ul className='menu-items'>
        {/* <div onClick={toggleMenu} style={{padding:"2em"}}>
          {isMenuOpen ? <i className="bi bi-arrow-left"></i> : <i className="bi bi-list"></i>}
        </div> */}
        <li><i className="bi bi-person-circle"></i><span className={isMenuOpen ? 'visible' : 'hidden'}>Profile</span></li>
        <li><i className="bi bi-basket3"></i><span className={isMenuOpen ? 'visible' : 'hidden'}>Requests</span></li>
        <li><i className="bi bi-radar"></i><span className={isMenuOpen ? 'visible' : 'hidden'}>Order Tracking</span></li>
        <li><i className="bi bi-kanban"></i><span className={isMenuOpen ? 'visible' : 'hidden'}>Pickup Management</span></li>
        <li><i className="bi bi-flag"></i><span className={isMenuOpen ? 'visible' : 'hidden'}>Reports</span></li>
        <li><i className="bi bi-bell"></i><span className={isMenuOpen ? 'visible' : 'hidden'}>Notifications</span></li>
        <img src={Logo} alt='' className={`logo ${isMenuOpen ? 'visible' : 'hidden'}`} />
      </ul>
    </div>
  );
}

export default CBOMenu;
