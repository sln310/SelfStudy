// import { useState } from "react";
// import Button from "./components/Button";

// import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Slills";

function App() {
  return (
    <div className="dark:bg-gray-700">
      <Header />
      <Main />
      <About />
      <Skills />
    </div>
  );
}

export default App;
