
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Slider from './Slider';


function App() {
  return (
    <div>
    <div className='container navbar'>
    <h1>BOOK'S HUNTER<img src="https://cdn-icons-png.flaticon.com/128/2702/2702069.png" alt ="books" width="35px"/></h1>
    </div>
    <Router>
      <nav className='navbar'>
        <Link to ='/slider' className="link logoHome"><img src="https://cdn-icons-png.flaticon.com/128/9073/9073243.png" alt="home" width="60px"/></Link>
        <Link to ='/home' className="link">Catalog</Link>
        <Link to ='/about' className="link">About us</Link>
        <Link to='/contact' className="link">Contacts</Link>
      </nav>
      <Routes>
        <Route path ="/slider" element ={<Slider/>} />
        <Route path ="/home" element ={<Home />} />
        <Route path ="/about" element ={<About />} />
        <Route path ="/contact" element ={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
  }

export default App;
