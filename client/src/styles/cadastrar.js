import styled from "styled-components";

export const DivElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  margin: auto;

  form {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }

  form label {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 1.2rem;
    padding: 0.3rem;
    outline: none;
  }

  button {
    background-color: #0d6efd;
    color: white;
    font-size: 1.2rem;
    border: none;
    margin: 5px 0;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
  }
`;
