import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='#about' element={"#about" } />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}


export default App;
