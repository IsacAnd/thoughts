import "../styles/thoughts.css";
import Search from "./utils/Search";
import AddThought from "./utils/AddThought";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

function Thoughts() {
  const [thoughts, setThoughts] = useState([
    {
      username: "João Pedro",
      title: "Bolo de avelâ devia ser normal",
      desc: "Bolo de avelâ devia ser normal, pois é ótimo e ninguém discorda disso!",
    },
    {
      username: "Maria Clara",
      title: "Amo café com leite",
      desc: "Café com leite é a melhor bebida para começar o dia!",
    },
    {
      username: "Lucas Silva",
      title: "A vida é bela",
      desc: "A vida é bela, mesmo com seus altos e baixos, sempre há algo para se alegrar!",
    },
    {
      username: "Ana Paula",
      title: "Gatos são incríveis",
      desc: "Gatos são criaturas maravilhosas, cheias de personalidade e amor!",
    },
    {
      username: "Carlos Eduardo",
      title: "A tecnologia é fascinante",
      desc: "A tecnologia está mudando o mundo de maneiras incríveis, e eu adoro acompanhar essas mudanças!",
    },
    {
      username: "Fernanda Souza",
      title: "Viajar é viver",
      desc: "Viajar é a melhor forma de aprender sobre o mundo e sobre nós mesmos!",
    },
    {
      username: "Ricardo Lima",
      title: "A música é a linguagem universal",
      desc: "A música tem o poder de unir as pessoas, independentemente de suas diferenças!",
    },

    {
      username: "Juliana Costa",
      title: "A natureza é perfeita",
      desc: "A natureza nos oferece tudo o que precisamos para viver, e devemos cuidar dela!",
    },
    {
      username: "Pedro Henrique",
      title: "A leitura é essencial",
      desc: "Ler nos permite viajar para outros mundos e aprender com diferentes perspectivas!",
    },
    {
      username: "Sofia Martins",
      title: "A arte é uma forma de expressão",
      desc: "A arte nos permite expressar nossos sentimentos e pensamentos de maneiras únicas!",
    },
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
              <div className="card-header">
                <div className="user-img">
                  <FontAwesomeIcon icon={faCircleUser} size="2x" />
                </div>
                <span>
                  <h4>{item.username}</h4>
                </span>
              </div>
              <div className="card-body">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
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
    </div>
  );
}

export default Thoughts;
