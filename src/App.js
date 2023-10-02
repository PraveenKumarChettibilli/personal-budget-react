import React from 'react';
import './App.scss';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router className="App">
      <Menu/>
      <Hero/>
      <div className="main Container">
        <Routes>
          <Route path="/About" element={<AboutPage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
