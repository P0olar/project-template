import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPc from './components/HeaderPc'
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";

import Categorias from "./pages/Categorias";
import Produtos from "./pages/Produtos";
import Produto from "./pages/Produto";

const Private = ({ Item }) => {
  const signed = false;
  return signed > 0 ? <Item /> : <Login />;
}


const App = () => {
  return (
    <BrowserRouter>
      <HeaderPc />
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private item={Home} />} />
          <Route path="/" element={<Login />} />
          <Route exact path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Categorias" element={<Categorias />} />
          <Route path="/Produtos" element={<Produtos />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default App