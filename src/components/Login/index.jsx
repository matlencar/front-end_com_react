import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
    const resultAction = await dispatch(loginAsync({ email, password }));

    if (loginAsync.fulfilled.match(resultAction)) {
      console.log("Login com sucesso:", resultAction.payload);
      navigate('/home');
    } else {
      console.error('Falha no Login:', resultAction.payload || resultAction.error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          <p>Email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <p>Senha:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Entrar</button>

        {auth.error && (
          <p style={{ color: 'red', marginTop: '10px' }}>
            Erro: {auth.error}
          </p>
        )}
      </form>
    </div>
  );
}
