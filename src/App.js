import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="pt-20 pl-0 md:pl-16 font-sans"> {/* ← Add pl-16 for left sidebar spacing */}
      <Header />
      <Sidebar />
      <About />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

export default App;