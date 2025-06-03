import "../../styles/utils/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="thoughts-search"
        placeholder="Digite o título do pensamento..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
    </div>
  );
}
