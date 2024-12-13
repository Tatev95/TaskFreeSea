import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Pages } from "./components/Pages/Pages";
import { AboutUs } from "./components/Home/components/AboutUs";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Feedback } from "./components/Feedback/Feedback";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="main-container">
        <Header />
        <div className="main-content">
          <div className="sections">
            <section id="home">
              <Home />
            </section>
          </div>
        </div>
      </div>

      <AboutUs />
      <section id="pages">
        <Pages />
      </section>
      <section id="portfolio">
        <Portfolio />
        <Feedback />
      </section>

      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;
