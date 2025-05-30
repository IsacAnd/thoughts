import "../styles/header.css";
import logo from "../img/logo.png";

function Header() {
  return (
    <div className="header-container">
      <img id="img-logo" src={logo} alt="logo" />
      <div className="nav-options">
        <ul className="list-options">
          <li>Home</li>
          <li>Meus pensamentos</li>
          <li>Minha conta</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
