import React, { useState } from "react";

import styled from "styled-components";

import "./App.css";
import TopBar from "./components/TopBar";
import Form from "./components/Form";
import ListOfElements from "./components/ListOfElements";

const Wrapper = styled.div`
  font-family: "Times New Roman", Times, serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1`
  padding: 0.5em;
`;

function App() {
  const exampleListElements = [
    // to zniknie na pusta tablice
    {
      id: "1",
      name: "Marcin",
      surrname: "Kowalczyk",
      content: "zrobić pranie",
      date: new Date(2021, 4, 17),
      label: 1,
    },
  ];
  const [formListElements, setFormListElements] = useState(exampleListElements);

  //const [isValid, setIsValid] = useState(false);

  const clickAdd = (formInput) => {
    const newObject = {
      ...formInput,
      id: Math.random().toString(),
    };
    setFormListElements((previous) => {
      return [newObject, ...previous];
    });
  };

  const deleteListElem = (elementId) => {
    setFormListElements((previous) => {
      const newObject = previous.filter((element) => element.id !== elementId);
      return newObject;
    });
  };

  const deleteAllListElements = () => {
    setFormListElements(exampleListElements);
  };

  let content = (
    <ListOfElements
      onDeleteListElem={deleteListElem}
      listElements={formListElements}
    />
  );

  // if (formListElements.length === 0) {
  //   content = <p>No tasks found, please click Add new task</p>;
  // }

  return (
    <Wrapper className="App">
      <TopBar
        onDeleteAllListElements={deleteAllListElements}
      />
      <Header>To Do Manager</Header>
      <Form onClickAdd={clickAdd} />
      {content}
    </Wrapper>
  );
}

export default App;

// Logika przycisk usuwający wszystkie cele

// dodac rozszrzenie notatek

// dodac warunki (style i komunikaty)

// ostylować nagłówek
// zmienic czcionke
// dodac animacje

// ogarnac ten warunek z id
