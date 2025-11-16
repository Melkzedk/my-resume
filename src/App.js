import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  return (
    <div className={dark ? "bg-dark text-white" : "bg-light text-dark"}>
      <Header dark={dark} toggleTheme={toggleTheme} />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
