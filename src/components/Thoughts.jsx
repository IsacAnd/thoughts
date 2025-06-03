import "../styles/thoughts.css";
import Search from "./utils/Search";
import AddThoughtButton from "./utils/AddThoughtButton";
import AddThought from "../pages/AddThought";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser, // Ícone de usuário padrão
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { getThoughts } from "../services/thoughtService";

function Thoughts() {
  const [thoughts, setThoughts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = getThoughts(setThoughts);

    return () => {
      unsubscribe();
    };
  }, []);

  function showModal() {
    setModalVisible((prev) => !prev);
  }

  return (
    <div className="thoughts-container">
      <h3>Veja o que as pessoas estão pensando agora</h3>
      <div className="thoughts-box">
        <div className="thoughts-header">
          <Search />
          <AddThoughtButton onClick={showModal} />
        </div>
        {thoughts.length === 0 && (
          <div className="no-thoughts">
            <p>Sem pensamentos encontrados!</p>
          </div>
        )}
        <div className="thoughts-body">
          {thoughts.map((item) => (
            <div key={item.id} className="thoughts-item">
              <div className="card-header">
                <div className="user-img">
                  {item.photoURL ? (
                    <img
                      src={item.photoURL}
                      alt={item.username}
                      className="profile-thumbnail"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faCircleUser} size="3x" />
                  )}
                </div>
                <span>
                  <h4>{item.username || "Usuário Desconhecido"}</h4>
                </span>
              </div>
              <div className="card-body">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <div className="card-footer">
                <span>
                  <button className="btn btn-primary">
                    <FontAwesomeIcon
                      className="reaction-btn"
                      icon={faThumbsUp}
                      size="xl"
                    />
                  </button>
                </span>
                <span>
                  <button className="btn btn-secondary">
                    <FontAwesomeIcon
                      className="reaction-btn"
                      icon={faThumbsDown}
                      size="xl"
                    />
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalVisible && <AddThought showModal={showModal} />}
    </div>
  );
}

export default Thoughts;
