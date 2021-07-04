import React from "react";

import styled from "styled-components";

import ListElem from "./ListElem";

const UlWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 0.1rem;
  margin-top: 0;

  @media (max-width: 600px) {
    width: 28rem;
  }
`;

const ListOfElements = ({ onDeleteListElem, listElements }) => (
  <UlWrapper>
    {listElements.map((element) => (
      <ListElem
        key={element.id}
        id={element.id}
        name={element.name}
        surname={element.surname}
        title={element.title}
        instruction={element.instruction}
        date={element.date}
        label={element.label}
        onDeleteTask={onDeleteListElem}
      />
    ))}
  </UlWrapper>
);

export default ListOfElements;
