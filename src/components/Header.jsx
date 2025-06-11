import "../styles/header.css";
import logo from "../img/logo.png";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { ToastContext } from "./Toast/ToastContext.jsx";

function Header() {
  const authContext = useContext(AuthContext);
  const toastContext = useContext(ToastContext);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleMyThoughtsClick = () => {
    navigate("/myThoughts");
  };

  const handleLogout = () => {
    toastContext.showToast("Logout realizado com sucesso!", "success");
    authContext.logout();
    navigate("/login");
  };

  return (
    <div className="header-container">
      <img id="img-logo" src={logo} alt="logo" />
      <div className="nav-options">
        <ul className="list-options">
          <li>
            <button onClick={handleHomeClick}>Home</button>
          </li>
          <li>
            <button>Meus pensamentos</button>
          </li>
          <li>
            <button onClick={handleLogout}>Sair</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
