import { Suspense, lazy, useMemo, useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import api from "./api/axios";
import "./App.css";

// Lazy-load route-level components to reduce initial bundle size
const Nav = lazy(() => import("./components/Nav/Nav"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  const [isServerLive, setLive] = useState(false);

  // Memoize static resume download URL so it's stable across renders
  const resumeUrl = useMemo(
    () =>
      "https://drive.google.com/file/d/1R5enAY8gg8VY9bCaeaf0WmlVGvBNd2QF/view?usp=sharing",
    []
  );

  // Run health-check once on mount. Simple call (no AbortController) as requested.
  useEffect(() => {
    const checkServer = async () => {
      try {
        const { data } = await api.get("/health");
        setLive(Boolean(data));
        console.log("health-check:", data);
      } catch (error) {
        console.warn("Health check failed:", error?.message ?? error);
        setLive(false);
      }
    };

    checkServer();
    // empty deps -> run once on mount
  }, []);

  return (
    <>
      <Suspense fallback={<div style={{ minHeight: 200 }}>Loading...</div>}>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Suspense>

      {/* Memoized anchor uses the stable resumeUrl constant */}
      <a href={resumeUrl} target="_blank" rel="noreferrer" className="resume-btn">
        Download Resume
      </a>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
