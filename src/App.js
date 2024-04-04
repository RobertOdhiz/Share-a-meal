import './App.css';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='.about' element={'.about'}/>
      <Route path='/Contact' element={<Contact/>}/>

      </Routes>
      <Footer />


      </BrowserRouter>
     
    </div>
  );
}

export default App;
