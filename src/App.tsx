import React from "react";
import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
