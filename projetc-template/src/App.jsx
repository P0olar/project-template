import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPc from './components/HeaderPc'
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderPc />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categorias" element={<Categorias />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App