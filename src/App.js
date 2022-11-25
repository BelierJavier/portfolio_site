import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

  
function App() {

return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
  

);
}
  
export default App;
