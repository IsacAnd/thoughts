import "../styles/thoughts.css";
import Search from "./utils/Search";
import AddThought from "./utils/AddThought";
import { useState } from "react";

function Thoughts() {
  const [thoughts, setThoughts] = useState([
    { title: "pensamento1", desc: "pensamento1" },
    { title: "pensamento1", desc: "pensamento1" },
    { title: "pensamento1", desc: "pensamento1" },
    { title: "pensamento1", desc: "pensamento1" },
    { title: "pensamento1", desc: "pensamento1" },
    { title: "pensamento1", desc: "pensamento1" },
    { title: "pensamento1", desc: "pensamento1" },
  ]);

  return (
    <div className="thoughts-container">
      <h3>Veja o que as pessoas estão pensando agora</h3>
      <div className="thoughts-box">
        <div className="thoughts-header">
          <Search />
          <AddThought />
        </div>
        <div className="thoughts-body">
          {thoughts.map((item, index) => (
            <div key={index} className="thoughts-item">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Thoughts;
