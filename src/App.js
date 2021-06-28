import React, { useState } from "react";

import styled from "styled-components";

import "./App.css";
import TopBar from "./components/TopBar";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ListOfElements from "./components/ListOfElements";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1`
  padding: 0.5em;
  width: 20rem;
  background-color: white;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

function App() {
  const exampleListElements = [
    // to zniknie na pusta tablice
    {
      id: "1",
      name: "Marcin",
      surrname: "Kowalczyk",
      title: "zrobić pranie",
      instruction: "30 stopni, 4 program",
      date: new Date(2021, 4, 17),
      label: 1,
    },
    {
      id: "2",
      name: "Zuzanna",
      surrname: "Czerniej",
      title: "zakupy",
      instruction: "30 stopni, 4 program",
      date: new Date(2021, 4, 17),
      label: 2,
    },
    {
      id: "3",
      name: "kamil",
      surrname: "Kowalski",
      title: "dupa cycki",
      instruction: "30 stopni, 4 program",
      date: new Date(2021, 4, 17),
      label: 3,
    },
  ];
  const [formListElements, setFormListElements] = useState(exampleListElements);

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

  const [inputFilterValue, setInputFilterValue] = useState("");

  const filterByName = (event) => {
    setInputFilterValue(event.target.value);
  };
  const filteredArray = formListElements.filter((element) =>
    element.name.toLowerCase().includes(inputFilterValue.toLowerCase())
  );

  let content = (
    <ListOfElements
      onDeleteListElem={deleteListElem}
      listElements={filteredArray}
    />
  );

  if (formListElements.length === 0) {
    content = <p>No tasks found, please click Add new task</p>;
  }

  return (
    <Wrapper className="App">
      <TopBar onDeleteAllListElements={deleteAllListElements} />
      <Header>To Do Manager</Header>
      <Form onClickAdd={clickAdd} />
      <Filter onFilterByName={filterByName} />
      {content}
    </Wrapper>
  );
}

export default App;

// edytowalne notatki
// filtr po imionach lub nazwiskach
// filtr po miesiącach/dniach

// pooprawic style
// dodac animacje
// instrulcja
// czytelnosc kodu (skrócić kod)

// ogarnac ten warunek z id
