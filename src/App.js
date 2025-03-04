import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import logo from './assets/soulsynclogo.png';
import img01 from './assets/img01.png';
import HeyGenAvatarComponent from './avatar';
import Streaming from './Streaming';
import StreamingHeygen from './StreamingHeygen';
import Upload from './Upload'; // Import the Upload component

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
            <Route path="/dashboard/:uid" element={<Dashboard />} />
            <Route path="/streaming" element={<Streaming />} />
            <Route path="/uploads" element={<Upload />} /> {/* Add route for Upload component */}
          </Routes>
        </header>
      </Router>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="landing-page fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <img src={img01} alt="SoulSync" className="landing-image" style={{ width: '50%', height: 'auto', marginBottom: '20px' }} />
      <h2> 與親愛的您永存🕯️</h2>
      <p>
        
      </p>
      <Link to="/login">
        <button className="get-started-button">開始接通</button>
      </Link>
    </div>
  );
}

export default App;
