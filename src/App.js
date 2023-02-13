import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import TechnicalSkills from "./components/TechnicalSkills";

import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="App">
      <NavBar windowWidth={windowWidth} />
      <Header />
      <Projects />
      <TechnicalSkills />
      <Experience />
    </div>
  );
}

export default App;
