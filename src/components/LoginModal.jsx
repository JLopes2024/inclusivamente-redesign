import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import "./LoginPage.css";

export default function LoginPage() {
  const [form, setForm] = useState({ user: '', pass: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  const success = await login(form.user, form.pass); // Agora passamos user e pass

  if (success) {
    const role = form.user === 'admin' ? 'admin' : 'prof';
    navigate(role === 'admin' ? '/dashboard-admin' : '/tela-professor');
  } else {
    alert("Credenciais inválidas");
    setIsLoading(false);
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}