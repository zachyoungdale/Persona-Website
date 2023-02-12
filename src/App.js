import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import TechnicalSkills from "./components/TechnicalSkills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Projects />
      <TechnicalSkills />
      <Experience />
    </div>
  );
}

export default App;
