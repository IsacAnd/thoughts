import "../styles/register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { useContext, useState } from "react";
import logo from "../img/logo.png";
import { ToastContext } from "../components/Toast/ToastContext";

function Register() {
  const navigate = useNavigate();
  const toastContext = useContext(ToastContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const back = () => navigate("/home");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser({ ...formData, image });
      navigate("/login");
      toastContext.showToast("Cadastrado com sucesso!", "success");
    } catch (error) {
      toastContext.showToast("Erro ao cadastrar-se", "fail");
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <button className="comeback-button" onClick={() => back()}>
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </button>
      <div className="register-box">
        <h2>Cadastre-se</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="username">Nome de usuário</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Digite seu nome"
                className="form-input-register"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Digite seu email (fictício)"
                className="form-input-register"
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
                className="form-input-register"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="image">Foto de Perfil</label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                className="form-input-register"
                onChange={handleImageChange}
              />
            </div>
            {imagePreview && (
              <div className="image-preview">
                <img
                  src={imagePreview}
                  alt="Pré-visualização"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </div>
            )}
            <input type="submit" id="input-submit" />
          </form>
        </div>
      </div>
      <img src={logo} alt="" />
    </div>
  );
}

export default Register;
