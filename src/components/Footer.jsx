import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <a href="https://www.instagram.com/isac.and/">
        <FontAwesomeIcon icon={faInstagram} size="2x" className="icons" />
      </a>
      <a href="https://github.com/IsacAnd">
        <FontAwesomeIcon icon={faGithub} size="2x" className="icons" />
      </a>
      <a href="https://www.linkedin.com/in/isac-andrade-8915a5284/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icons" />
      </a>
    </div>
  );
}

export default Footer;
