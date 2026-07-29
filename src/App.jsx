import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Seu CSS de login

export default function LoginPage() {
  // Estados para guardar o que foi digitado
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  
  // O hook que faz o redirecionamento
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário

    // Verificação das credenciais
    if (usuario === "admin" && senha === "admin") {
      setErro("");
      navigate("/admin"); // Manda para a rota do administrador
    } else {
      setErro("Usuário ou senha incorretos.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Área Restrita</h2>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="usuario">Usuário</label>
            <input 
              type="text" 
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Digite seu usuário"
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input 
              type="password" 
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>

          {/* Exibe mensagem de erro se errar a senha */}
          {erro && <p className="error-message">{erro}</p>}

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
