import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
          }
        />
        <Route path="/p/:id" element={<div></div>} />
      </Routes>
    </Router>
  );
}

export default App;
