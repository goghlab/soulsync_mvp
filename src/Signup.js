import React, { useState } from 'react';
import './App.css';
import logo from './assets/soulsynclogo.png';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate signup process
    try {
      // Replace with actual signup logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Email:', email);
      console.log('Password:', password);
      // Redirect or handle successful signup here
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} aria-live="polite">
      
      <h2>🔮 Early Access to SoulSync</h2>
      <h4>Create an Account</h4>
      
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
        <small id="email-helper-text">Enter the email address you want to register with.</small>
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
        <small id="password-helper-text">Create a strong password.</small>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>

      <p className="signup-link">
        Already have an account? <a href="/login">Login Here</a>
      </p>
    </form>
  );
}

export default Signup;
