import "../styles/addthought.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { addThought } from "../services/thoughtService";

function AddThought({ showModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addThought(title, description, 1, 1);
      setTitle("");
      setDescription("");
      showModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-overlay">
      <button
        className="modal-background"
        onClick={() => {
          showModal();
        }}
      ></button>

      <div className="modal-container">
        <div className="modal-close">
          <button onClick={() => showModal()}>
            <FontAwesomeIcon icon={faSquareXmark} size="2x" />
          </button>
        </div>
        <h3>Adicionar pensamento</h3>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-container">
            <label htmlFor="title">Título do pensamento</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              id="title"
              className="input-form"
            />
          </div>
          <div className="input-container">
            <label htmlFor="description">Descrição do pensamento</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              id="description"
              className="textarea-form"
            ></textarea>
          </div>
          <input type="submit" id="input-submit-add" />
        </form>
      </div>
    </div>
  );
}

export default AddThought;
