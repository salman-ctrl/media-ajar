import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage";
import Home from "./Component/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
