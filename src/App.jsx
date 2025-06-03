import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Thoughts from "./components/Thoughts.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
