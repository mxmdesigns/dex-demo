import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Split from "./pages/Split";
import Pokedex from "./pages/Pokedex";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="main">
      <Router>
        <Navigation />
        <div className="main-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/split" element={<Split />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
