import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Showcase from "./pages/Showcase/Showcase";
import News from "./pages/News/News";
import Learn from "./pages/Learn/Learn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
