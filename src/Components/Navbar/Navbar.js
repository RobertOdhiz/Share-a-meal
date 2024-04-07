import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/navlogo.png';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import './Navbar.css';

function Navbar() {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(getAuth());
    setUser(null);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`navbar`}>
      <div className="nav-logo">
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div className="user-actions">
        {user ? (
          <button className="user-icon" onClick={toggleDropdown}>
            <i className="bi bi-person-circle"></i>
          </button>
        ) : (
          <Link to="/register/?userType=">
            <button className="btn">Get Started</button>
          </Link>
        )}
        {user && showDropdown && (
          <ul className="dropdown-menu">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/preferences">Preferences</Link></li>
            <li onClick={handleLogout}><Link to='/'>Logout</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
