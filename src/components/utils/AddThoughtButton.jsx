import "../../styles/utils/addthoughtbutton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import AddThought from "../../pages/AddThought.jsx";

export default function AddThoughtButton({ onClick }) {
  return (
    <div className="add-button">
      <button onClick={onClick}>
        <FontAwesomeIcon icon={faSquarePlus} id="icon" />
      </button>
    </div>
  );
}
