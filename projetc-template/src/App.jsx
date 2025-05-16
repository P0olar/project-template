import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPc from './components/HeaderPc'
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Produtos from "./pages/Produtos";
import Produto from "./pages/Produto";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderPc />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App