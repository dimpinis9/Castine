import React, { useState } from 'react';
import '../assets/Login.css';
import loginImage from '../assets/images/image2.jpg';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={loginImage} alt="Login Visual" />
      </div>
      <div className="card-form">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
          <a href="/forgot-password">Forgot your password?</a>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
