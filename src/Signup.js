import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Import auth from firebase.js

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
      navigate(`/dashboard/${userCredential.user.uid}`); // Redirect with UID
    } catch (err) {
      console.error('Signup failed:', err.message);
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit} aria-live="polite">
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
          placeholder="Enter your email"
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
          placeholder="Create a password"
        />
        <small id="password-helper-text">Create a strong password with at least 6 characters.</small>
      </div>

      <button type="submit" disabled={loading} className="submit-button">
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>

      <p className="signup-link">
        Already have an account? <a href="/login">Login Here</a>
      </p>
    </form>
  );
}

export default Signup;
