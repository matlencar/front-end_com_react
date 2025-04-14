import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";



import './Login.css';
import { loginAsync } from '../../auth/authSlice';

export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);


  const handleSubmit = async (e) => {
      e.preventDefault();
      const resultAction = await dispatch(loginAsync({email, password}));
      if(loginAsync.fulfilled.match(resultAction)){
          navigate('/home');
      }else{
          console.log("Falha no Login: ", resultAction.error);
      }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label style={{ gap: '4px', justifyContent: 'center' }}>
        <p style={{ gap: '2px', marginBottom: '4px', fontWeight: 'bold', textAlign: 'center', fontSize: '16px' }}>
          Login
        </p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
