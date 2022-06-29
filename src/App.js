import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

//Demo portfolio: http://exill.dk/demo/codex/template/snow.html#home 

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </>
  );
}

export default App;
