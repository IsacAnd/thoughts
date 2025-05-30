import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <FontAwesomeIcon icon={faInstagram} size="2x" className="icons" />
      <FontAwesomeIcon icon={faGithub} size="2x" className="icons" />
      <FontAwesomeIcon icon={faLinkedin} size="2x" className="icons" />
    </div>
  );
}

export default Footer;
