import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assets/navlogo.png'
import './Navbar.css'

function Navbar() {

  const [menu,setMenu] = useState('Home')
  const navigate = useNavigate()


  function handleClick(page){
    setMenu(page)
    navigate(page)
    
  }

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  
  

  return (

    <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className='nav__menu'>

          <ul className='nav-menu'>
            <li onClick={()=>handleClick('/')}>Home {menu === 'Home'?<hr/>:<></>}</li>
            <li onClick={()=>handleClick('/about')}>About {menu === '.about'?<hr/>:<></>}</li>
            <li onClick={()=>handleClick('/Contact')}>Contact {menu === 'Contact'?<hr/>:<></>}</li>

            <div className="nav-login">
              <Link to='/login'><button> Get Started</button></Link>
              {/* <Link to='/Signup'><button>Sign Up</button></Link> */}
              
            </div>
          </ul>
         
        </div>
    </div>
  )
}

export default Navbar