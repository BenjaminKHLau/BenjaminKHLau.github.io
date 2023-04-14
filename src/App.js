import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Nav from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Resume from "./components/resume";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      
      {/* <Routes>
        <Route path="/" element={<Main />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<About />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Testimonials />} />
      </Routes>
      
      <Routes>
        <Route path="/" element={<Skills />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>




      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default App;
