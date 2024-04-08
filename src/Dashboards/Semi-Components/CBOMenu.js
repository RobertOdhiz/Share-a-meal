import React, { useState } from 'react';
import './Styles/Menu.css';

function CBOMenu({ setActiveMenuItem }) {
  const [activeItem, setActiveItem] = useState('');
  const isMenuOpen = true;

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setActiveItem(menuItem);
  };

  return (
    <div className={`side-menu ${isMenuOpen ? 'open' : 'closed'}`}>
      <ul className='menu-items'>
        <li className={activeItem === 'overview' ? 'active' : ''} onClick={() => handleMenuItemClick('overview')}>
          <i className="bi bi-house"></i>
          <span>Overview</span>
        </li>
        <li className={activeItem === 'profile' ? 'active' : ''} onClick={() => handleMenuItemClick('profile')}>
          <i className="bi bi-person-circle"></i>
          <span>Profile</span>
        </li>
        <li className={activeItem === 'requests' ? 'active' : ''} onClick={() => handleMenuItemClick('requests')}>
          <i className="bi bi-basket3"></i>
          <span>Requests</span>
        </li>
        <li className={activeItem === 'order-tracking' ? 'active' : ''} onClick={() => handleMenuItemClick('order-tracking')}>
          <i className="bi bi-radar"></i>
          <span>Order Tracking</span>
        </li>
        <li className={activeItem === 'pickup-management' ? 'active' : ''} onClick={() => handleMenuItemClick('pickup-management')}>
          <i className="bi bi-kanban"></i>
          <span>Pickup Management</span>
        </li>
        <li className={activeItem === 'reports' ? 'active' : ''} onClick={() => handleMenuItemClick('reports')}>
          <i className="bi bi-flag"></i>
          <span>Reports</span>
        </li>
        <li className={activeItem === 'notifications' ? 'active' : ''} onClick={() => handleMenuItemClick('notifications')}>
          <i className="bi bi-bell"></i>
          <span>Notifications</span>
        </li>
      </ul>
    </div>
  );
}

export default CBOMenu;
