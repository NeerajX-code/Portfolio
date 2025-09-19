import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [isServerLive, setLive] = useState(false);

  useEffect(() => {
    const checkServer = async () => {
      if (!isServerLive) {
        try {
          const { data } = await axios.get('/health');
          console.log(data);
          if (data) setLive(true);
        } catch (error) {
          console.log(error);
          setLive(false);
        }
      }
    };

    checkServer();
  }, [isServerLive]);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <a
        href="https://drive.google.com/uc?export=download&id=1R5enAY8gg8VY9bCaeaf0WmlVGvBNd2QF"
        target="_blank"
        className="resume-btn"
      >
        Download Resume
      </a>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
