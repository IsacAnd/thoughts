import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Thoughts from "./components/Thoughts.jsx";
import ToastProvider from "./components/Toast/ToastContext.jsx";

function App() {
  return (
    <div className="app-container">
      <ToastProvider>
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
      </ToastProvider>
    </div>
  );
}

export default App;
