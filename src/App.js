import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './App.css';
import logo from './assets/soulsynclogo.png';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="background-image"></div>
        <header className="App-header">
          <img src={logo} alt="SoulSync Logo" className="logo" />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="landing-page fade-in">
      <h4>Welcome to SoulSync🕯️</h4>
      <p>
        SoulSync: Keeping loved ones' memories alive through virtual human connection.</p>
      <Link to="/login">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
}

export default App;
