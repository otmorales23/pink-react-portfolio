import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Examples from './components/Examples/Examples';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/About"
              element={<About />}
            />
            <Route
              path="/Examples"
              element={<Examples />}
            />
            <Route
              path="/Contact"
              element={<Contact />}
            />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;