import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/authService";
import logo from "../img/logo.png";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser(formData.email, formData.password);

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="form-input-login"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Não vai esquecer ela depois"
                className="form-input-login"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <input type="submit" id="input-submit" />
          </form>
          <div className="register-link">
            <a href="/register">Cadastre-se aqui</a>
          </div>
        </div>
      </div>
      <img src={logo} alt="" />
    </div>
  );
}

export default Login;
