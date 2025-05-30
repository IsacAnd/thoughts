import "../../styles/utils/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="search-container">
      <input
        type="text"
        className="thoughts-search"
        placeholder="Pesquisar por um pensamento..."
      />
      <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
    </div>
  );
}
