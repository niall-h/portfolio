import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MyStory from "./components/MyStory/MyStory";
import Main from "./components/Home/Main";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MyStory />} />
        <Route path="/portfolio-website" element={<MyStory />} />
        <Route path="/my-story" element={<MyStory />} />
        <Route path="/home" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </HashRouter>
  );
};

export default App;
