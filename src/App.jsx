import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DownloadPage from "./pages/DownloadPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<DownloadPage />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
