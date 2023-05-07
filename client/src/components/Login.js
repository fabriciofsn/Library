import React from "react";
import { DivElement } from "../styles/cadastrar";
import { DivElementFlex } from "../styles/login";

const Login = () => {
  return (
    <DivElement>
      <form action="">
        <label htmlFor="email">Email</label>
        <div className="input">
          <input id="email" name="email" type="email" />
        </div>
        <label htmlFor="password">Senha</label>
        <div className="input">
          <input id="password" name="senha" type="password" />
        </div>
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
