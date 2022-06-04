import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Developers from "./components/Developers";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
      <About />
      <Developers />
    </div>
  );
}

export default App;
