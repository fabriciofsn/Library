import React from "react";
import { HeaderElement, DivElement } from "../styles/Header";

const Header = () => {
  return (
    <HeaderElement>
      <DivElement>
        <h1>Biblioteca</h1>
        <ul>
          <li>
            <a href="/">Página inicial</a>
          </li>
          <li>
            <a href="/livros">Livros</a>
          </li>
          <li>
            <a href="/emprestimo">Emprestimos</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </DivElement>
    </HeaderElement>
  );
};

export default Header;
