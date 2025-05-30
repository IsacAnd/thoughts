import "../../styles/utils/addthought.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export default function AddThought() {
  return (
    <div className="add-button">
      <button>
        <FontAwesomeIcon icon={faSquarePlus} id="icon" />
      </button>
    </div>
  );
}
