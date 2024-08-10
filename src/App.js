import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Upload from './Upload';

import './App.css';
import logo from './assets/soulsynclogo.png';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="background-image"></div>
        <header className="App-header pt-52"> {/* Added padding-top of 200 pixels */}
          <img src={logo} alt="SoulSync Logo" className="logo" />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload-assets" element={<Upload />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="landing-page fade-in">
      <h2>Welcome to SoulSync🕯️</h2>
      <p>
        SoulSync: Keeping loved ones' memories alive through virtual human connection.</p>
      <Link to="/login">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
}

export default App;
