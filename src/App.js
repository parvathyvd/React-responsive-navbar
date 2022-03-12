import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Demo from './components/pages/Demo';
import Testimonial from './components/pages/Testimonial';
import Pricing from './components/pages/Pricing';
import Feature from './components/pages/Feature';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="container">
       <Router>
         <NavBar/>
         <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route  path="/feature" element={<Feature/>}/>
           <Route  path="/testimonial" element={<Testimonial/>}/>
           <Route  path="/pricing" element={<Pricing/>}/>
           <Route  path="/demo" element={<Demo/>}/>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
