import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Examples from './components/Examples';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <div>
            <Nav />
            <Routes>
              <Route 
                path="/About" 
                element={<About />} 
              />
              <Route
              path="Examples"
              element={<Examples />}
              />
              <Route 
                path="/Contact" 
                element={<Contact />} 
              />
            </Routes>
        </div>
      </Router>
      <Header />
      <About />
      {/* <Examples /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
