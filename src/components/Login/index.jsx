import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label style={{ gap: '4px', justifyContent: 'center' }}>
        <p style={{ gap: '2px', marginBottom: '4px', fontWeight: 'bold', textAlign: 'center', fontSize: '16px' }}>
          Login
        </p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>

          <p style={{ gap: '2px', marginBottom: '4px', fontWeight: 'bold', textAlign: 'center', fontSize: '16px' }}>
          Senha
        </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
