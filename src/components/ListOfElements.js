import React from "react";

import styled from "styled-components";

import ListElem from "./ListElem";

const UlWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 0.5rem;
`;

const ListOfElements = (props) => {
  return (
    <UlWrapper>
      {props.listElements.map((element) => (
        <ListElem
          key={element.id}
          id={element.id}
          name={element.name}
          surrname={element.surrname}
          content={element.content}
          date={element.date}
          label={element.label}
          onDeleteTask={props.onDeleteListElem}
        />
      ))}
    </UlWrapper>
  );
};

export default ListOfElements;
