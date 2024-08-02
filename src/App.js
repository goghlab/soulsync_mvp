import React, { useState } from 'react';
import './App.css';
import logo from './assets/soulsynclogo.png';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate login process
    try {
      // Replace with actual login logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Email:', email);
      console.log('Password:', password);
      // Redirect or handle successful login here
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="background-image"></div>
      <header className="App-header">
        <form className="login-form" onSubmit={handleSubmit} aria-live="polite">
          <img src={logo} alt="SoulSync Logo" className="logo" />
          <h2>🔮 Early Access to SoulSync</h2>
          <h4>User Login</h4>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-describedby="email-helper-text"
            />
            <small id="email-helper-text">Enter the email address you used to register.</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-describedby="password-helper-text"
            />
            <small id="password-helper-text">Enter your account password.</small>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
