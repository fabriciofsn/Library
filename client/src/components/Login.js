import React from "react";
import { DivElement } from "../styles/cadastrar";
import { DivElementFlex } from "../styles/login";

const Login = () => {
  return (
    <DivElement>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="senha">Senha</label>
        <input type="password" />
        <DivElementFlex>
          <button>Entrar</button>
          <DivElementFlex>
            <p>Não tem conta?</p>
            <a href="/cadastrar">Cadastre-se</a>
          </DivElementFlex>
        </DivElementFlex>
      </form>
    </DivElement>
  );
};

export default Login;
