import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="pt-20 pl-0 md:pl-16 font-sans"> {/* ← Add pl-16 for left sidebar spacing */}
      <Header />
      <Sidebar />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;