import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
  color: white;
  background-color: #0000ff76;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  margin-right: 0.2rem;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: #0000ffa4;
  }
  :focus {
    background-color: #0000ffa4;
  }
`;

const BoxButtons = ({ children, className }) => (
  <Buttons className={className}>{children}</Buttons>
);

export default BoxButtons;
