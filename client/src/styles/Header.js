import styled, { keyframes } from "styled-components";

export const HeaderElement = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: #212529;
  color: white;
`;

export const DivElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    margin: 0 5px;
  }

  li:hover {
    text-decoration: underline;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
