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
      surname: "Kowalczyk",
      title: "zrobić pranie",
      instruction: "30 stopni, 4 program",
      date: new Date(2021, 4, 17),
      label: 1,
    },
    {
      id: "2",
      name: "Zuzanna",
      surname: "Czerniej",
      title: "zakupy",
      instruction: "zara",
      date: new Date(2019, 4, 17),
      label: 2,
    },
    {
      id: "3",
      name: "kamil",
      surname: "Kowalski",
      title: "dupa cycki",
      instruction: "no dupa",
      date: new Date(2020, 4, 17),
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

  const [inputFilterByPersonalValue, setInputFilterByPersonalValue] =
    useState("");
  const [inputFilterByTitleValue, setInputFilterByTitleValue] = useState("");
  const [inputFilterByDateValue, setInputFilterByDateValue] = useState("");

  const filterByPersonal = (event) => {
    setInputFilterByPersonalValue(event.target.value);
  };
  const filterByTitle = (event) => {
    setInputFilterByTitleValue(event.target.value);
  };
  const filterByDate = (event) => {
    setInputFilterByDateValue(event.target.value);
  };
  const filteredArrayByPersonal = formListElements.filter(
    (element) =>
      element.name
        .toLowerCase()
        .includes(inputFilterByPersonalValue.toLowerCase()) ||
      element.surname
        .toLowerCase()
        .includes(inputFilterByPersonalValue.toLowerCase())
  );
  const filteredArrayByTitle = formListElements.filter((element) =>
    element.title.toLowerCase().includes(inputFilterByTitleValue.toLowerCase())
  );
  const filteredArrayByDate = formListElements.filter((element) =>
    element.date
      .getFullYear()
      .toString()
      .toLowerCase()
      .includes(inputFilterByDateValue.toLowerCase())
  );

  let newArray;

  if (inputFilterByPersonalValue.length > 0) {
    newArray = filteredArrayByPersonal;
  } else if (inputFilterByTitleValue.length > 0) {
    newArray = filteredArrayByTitle;
  } else {
    newArray = filteredArrayByDate;
  }

  let content = (
    <ListOfElements onDeleteListElem={deleteListElem} listElements={newArray} />
  );

  if (formListElements.length === 0) {
    content = <p>No tasks found, please click Add new task</p>;
  }

  return (
    <Wrapper className="App">
      <TopBar onDeleteAllListElements={deleteAllListElements} />
      <Header>To Do Manager</Header>
      <Form onClickAdd={clickAdd} />
      <Filter
        onFilterByPersonal={filterByPersonal}
        onFilterByTitle={filterByTitle}
        onFilterByDate={filterByDate}
      />
      {content}
    </Wrapper>
  );
}

export default App;

// instrukcja

// pooprawic style
// czytelnosc kodu (skrócić kod)
