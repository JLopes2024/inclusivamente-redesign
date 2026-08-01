import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import "./LoginPage.css";

export default function LoginPage() {
  const [form, setForm] = useState({ user: '', pass: '' });
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validação direta das credenciais (simulando backend)
    const isAdmin = form.user === 'admin' && form.pass === 'admin';
    const isProf = form.user === 'prof' && form.pass === 'prof';

    if (isAdmin || isProf) {
      const role = isAdmin ? 'admin' : 'prof';
      login({ user: form.user, role });
      
      // Roteamento condicional de alta precisão
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/professor');
      }
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="login-page">
      <img src="/logo.png" alt="Logo" className="login-logo" />
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Bem-vindo de volta</h2>
        <input 
          type="text" 
          placeholder="Usuário" 
          onChange={(e) => setForm({...form, user: e.target.value})} 
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          onChange={(e) => setForm({...form, pass: e.target.value})} 
          required 
        />
        <button type="submit" className="btn primary">Entrar</button>
      </form>
    </div>
  );
}