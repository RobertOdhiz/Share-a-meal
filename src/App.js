import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Registration from './Pages/Auth/SignUp';
import CBORegistration from './Pages/Auth/Semi-Components/CBOReg';
import PartnerRegistration from './Pages/Auth/Semi-Components/PartnerReg';
import Login from './Pages/Auth/Login';
import RegSubmission from './Pages/Auth/Semi-Components/RegSubmission';
import CBODashboard from './Dashboards/CBODashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='#about' element={"#about" } />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/register/CBO' element={<CBORegistration />} />
          <Route path='/register/Partner' element={<PartnerRegistration />} />
          <Route path='login' element={<Login />} />
          <Route path='/confirm-registration' element={<RegSubmission />} />
          <Route path='/dashboard/CBO' element={<CBODashboard />} />
        </Routes>
        <Footer />
      <Navbar />
      </BrowserRouter>
    </div>
  );
}


export default App;
