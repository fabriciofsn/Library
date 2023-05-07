import styled from "styled-components";

export const DivElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 71px);
  width: 100%;
  margin: auto;
  background-color: #202124;

  form {
    width: 100%;
    max-width: 500px;
    margin: auto;
    border: 1px solid #e54;
    padding: 1rem;
    border-radius: 5px;
  }

  form label {
    display: block;
    font-size: 1.5rem;
    margin-top: 10px;
    text-transform: capitalize;
    color: #e54;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 1.2rem;
    padding: 0.3rem;
    margin-bottom: 1px;
    outline: none;
    border: none;
    background-color: transparent !important;
  }

  input:-webkit-autofill {
    background-color: transparent !important;
  }

  button {
    background-color: #e54;
    color: white;
    font-size: 1.2rem;
    border: none;
    margin: 15px 0;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
  }

  .input {
    border-bottom: 1px solid #ccc;
  }
`;
