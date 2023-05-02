import React from "react";
import { DivElement } from "../styles/cadastrar";
import { DivElementFlex } from "../styles/login";

const userFields = [
  {
    id: "nome",
    label: "nome",
    type: "text",
  },
  {
    id: "email",
    label: "email",
    type: "email",
  },
  {
    id: "senha",
    label: "senha",
    type: "password",
  },
];

const cadastrar = () => {
  return (
    <DivElement>
      <form action="cadastrar/usuario" method="POST">
        <div>
          {userFields.map(({ id, label, type }) => {
            return (
              <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input name={id} id={id} type={type} required />
              </div>
            );
          })}
          <DivElementFlex>
            <button>Enviar</button>
            <DivElementFlex>
              <p>Já tem conta?</p>
              <a href="/login">Fazer Login</a>
            </DivElementFlex>
          </DivElementFlex>
        </div>
      </form>
    </DivElement>
  );
};

export default cadastrar;
