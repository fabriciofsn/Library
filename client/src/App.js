import React from "react";
import Header from "./components/Header";
import Cadastrar from "./components/Cadastrar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
