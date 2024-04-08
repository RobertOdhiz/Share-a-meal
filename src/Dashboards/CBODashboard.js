import React, { useState } from 'react';
import './Semi-Components/Styles/Main.css';
import { useFetchUserData } from './utils';
import CBOMenu from './Semi-Components/CBOMenu';
import PartnerMenu from './Semi-Components/PartnerMenu';
import CBOBody from './Semi-Components/CBOBody';

function CBODashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const user = useFetchUserData();

  return (
    <div className='dashboard'>
      <div className='dashboard-left'>
        {user && user.Role === "CBO" && (
          <CBOMenu setActiveMenuItem={setActiveMenuItem} />
        )}
        {user && user.Role === "Partner" && (
          <PartnerMenu setActiveMenuItem={setActiveMenuItem} />
        )}
      </div>
      <div className='dashboard-right'>
        <CBOBody activeMenuItem={activeMenuItem} user={user} />
      </div>
    </div>
  );
}

export default CBODashboard;
