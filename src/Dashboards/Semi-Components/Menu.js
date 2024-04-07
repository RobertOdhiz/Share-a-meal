import React from 'react'
import CBOMenu from './CBOMenu';

function SideMenu() {
    const [userRole, setUserRole] = useState('');
  return (
    <div>
        <CBOMenu />
    </div>
  )
}

export default SideMenu