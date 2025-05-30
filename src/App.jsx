import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Thoughts from "./components/Thoughts.jsx";

function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Thoughts />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
