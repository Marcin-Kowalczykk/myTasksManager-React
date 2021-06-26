import React, { useState } from "react";

import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #00d9ff47;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
const InputArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Input = styled.input`
  width: 80%;
  height: 1.5rem;
  background-color: #a0420311;
  border: 1px solid #e75c0030;
  border-radius: 0.3rem;
  margin: 0 0 0.6rem 1.5rem;
`;
const Xbutton = styled.button`
  border: none;
  background: none;
  color: #0000ff92;
  cursor: pointer;
  transition: color 0.5s, font-size 0.5s;
  &:hover {
    color: red;
    font-size: 1.5rem;
  }
`;
const Label = styled.label`
  font-size: 0.8rem;
  color: #0000ff94;
  margin-bottom: 0.3rem;
`;
const Button = styled.button`
  background-color: #0000ff76;
  color: white;
  width: 5rem;
  padding: 0.4rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.5s;
  margin-top: 0.3rem;
  margin-left: 5px;

  &:hover {
    background-color: #0000ffa4;
  }
`;
const MainButton = styled(Button) `
  width: 80%;
`;

const BotButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
`;

const Form = (props) => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputSurnameValue, setInputSurnameValue] = useState("");
  const [inputContentValue, setInputContentValue] = useState("");
  const [inputDateValue, setInputDateValue] = useState("");

  const [isClicked, setIsClicked] = useState(false);

  const readNameHandler = (event) => {
    setInputNameValue(event.target.value);
  };
  const readSurnameHandler = (event) => {
    setInputSurnameValue(event.target.value);
  };
  const readContentHandler = (event) => {
    setInputContentValue(event.target.value);
  };
  const readDateHandler = (event) => {
    setInputDateValue(event.target.value);
  };
  const clearNameInput = () => {
    setInputNameValue("");
  };
  const clearSurnameInput = () => {
    setInputSurnameValue("");
  };
  const clearContentInput = () => {
    setInputContentValue("");
  };
  const addItemHandler = (event) => {
    event.preventDefault();
    if (
      inputNameValue.trim() !== "" &&
      inputSurnameValue.trim() !== "" &&
      inputContentValue.trim() !== "" &&
      inputDateValue.trim() !== ""
    ) {
      const formListElement = {
        name: inputNameValue,
        surrname: inputSurnameValue,
        content: inputContentValue,
        date: new Date(inputDateValue),
      };
      setIsClicked(false);
      props.onClickAdd(formListElement);
    }
    setInputNameValue("");
    setInputSurnameValue("");
    setInputContentValue("");
  };

  const showForm = () => {
    setIsClicked(true);
  };
  const hideForm = () => {
    setIsClicked(false)
  }

  if (isClicked === false) {
    return (
      <Wrapper>
        <MainButton type="button" onClick={showForm}>
          Add new task
        </MainButton>
      </Wrapper>
    );
  }

  return (
    <Wrapper onSubmit={addItemHandler}>
      <Label>Name: </Label>
      <InputArea>
        <Input
          type="text"
          value={inputNameValue}
          onChange={readNameHandler}
        />
        <Xbutton type="button" onClick={clearNameInput}>
          <i className="fas fa-times"></i>
        </Xbutton>
      </InputArea>
      <Label>Surname: </Label>
      <InputArea>
        <Input
          type="text"
          value={inputSurnameValue}
          onChange={readSurnameHandler}
        />
        <Xbutton type="button" onClick={clearSurnameInput}>
          <i className="fas fa-times"></i>
        </Xbutton>
      </InputArea>
      <Label>Content: </Label>
      <InputArea>
        <Input
          type="text"
          value={inputContentValue}
          onChange={readContentHandler}
        />
        <Xbutton type="button" onClick={clearContentInput}>
          <i className="fas fa-times"></i>
        </Xbutton>
      </InputArea>
      <Label>Date: </Label>
      <InputArea>
        <Input type="date" onChange={readDateHandler} />
      </InputArea>
      <BotButtons>
        <Button onClick={props.clickAdd}>Add</Button>
        <Button onClick={hideForm}>Collapse</Button>
      </BotButtons>
    </Wrapper>
  );
};

export default Form;

// czy moge jakos w jednej funkcji czyscic ten przycisk ktory chce
