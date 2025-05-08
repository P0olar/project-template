import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPc from './components/HeaderPc'
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderPc />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App