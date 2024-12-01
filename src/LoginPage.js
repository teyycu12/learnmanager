import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // 替換 useHistory 為 useNavigate

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // 使用 useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // 簡單模擬登入邏輯
    if (username === 'user' && password === 'password') {
      navigate('/dashboard');  // 使用 navigate 替代 history.push
    } else {
      alert('帳號或密碼錯誤');
    }
  };

  const handleRegister = () => {
    alert('這裡應該導向註冊頁面');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>登入</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="帳號"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '10px', margin: '10px' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', margin: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', margin: '10px' }}>登入</button>
        <button type="button" onClick={handleRegister} style={{ padding: '10px 20px', margin: '10px' }}>
          註冊
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
