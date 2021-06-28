import React, { useState } from "react";

import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #00d9ff47;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
`;
const InputArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const InputText = styled.input`
  width: 80%;
  height: 1.5rem;
  background-color: ${(props) =>
    props.validLength ? "#ffffffa7" : "#a0000034"};
  border: 
    ${(props) =>
      (props.validLength && props.isNameEmpty) ||
      props.isSurnameEmpty ||
      props.isTitleEmpty
        ? "none"
        : "1px solid rgb(255, 0, 0, .7)"};
  border-radius: 0.3rem;
  margin: 0 0 0.6rem 1.5rem;
`;
const TextArea = styled.textarea`
  font-family: "Times New Roman", Times, serif;
  background-color: #ffffffa7;
  border: ${props => props.isInstructionEmpty ? "none" : "1px solid rgb(255, 0, 0, .7)"};
  border-radius: 5px;
  margin: 0 0 3% 7%;
  min-width: 80%;
  max-width: 80%;
  height: 4rem;
`;
const InputDate = styled(InputText)`
  ::-webkit-datetime-edit-text {
    color: #0000ff94;
    padding: 0 0.1em;
  }
  ::-webkit-calendar-picker-indicator {
    margin: 3px;
    font-size: 0.6rem;
    cursor: pointer;
  }
  text-align: center;
  color: #0000ff94;
  font-size: 0.7rem;
  margin-left: 37%;
  width: 45%;
  background-color: #a0420311;
  border: 1px solid
    ${(props) => (props.isDateEmpty ? "#e75c0030" : "rgb(255, 0, 0, .9)")};
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
  color: ${(props) => (props.validLength ? "#0000ff94" : "rgb(255, 0, 0, .9)")};
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
const MainButton = styled(Button)`
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
  const [inputTitleValue, setInputTitleValue] = useState("");
  const [inputDateValue, setInputDateValue] = useState("");
  const [inputInstructionValue, setInputInstructionValue] = useState("");

  const [isClicked, setIsClicked] = useState(false);
  const [isErrorText, setIsErrorText] = useState(false);

  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isSurnameEmpty, setIsSurnameEmpty] = useState(false);
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isInstructionEmpty, setInstructionEmpty] = useState(false);
  const [isDateEmpty, setIsDateEmpty] = useState(false);

  const readNameHandler = (event) => {
    setInputNameValue(event.target.value);
  };
  const readSurnameHandler = (event) => {
    setInputSurnameValue(event.target.value);
  };
  const readTitleHandler = (event) => {
    setInputTitleValue(event.target.value);
  };
  const readDateHandler = (event) => {
    setInputDateValue(event.target.value);
  };
  const readInstructionHandler = (event) => {
    setInputInstructionValue(event.target.value);
  };
  const clearNameInputHandler = () => {
    setInputNameValue("");
  };
  const clearSurnameInputHandler = () => {
    setInputSurnameValue("");
  };
  const clearTitleInputHandler = () => {
    setInputTitleValue("");
  };
  const clearInstructionInputHandler = () => {
    setInputInstructionValue("");
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    if (
      inputNameValue.length < 9 &&
      inputSurnameValue.length < 9 &&
      inputTitleValue.length < 14 &&
      inputNameValue.trim() !== "" &&
      inputSurnameValue.trim() !== "" &&
      inputTitleValue.trim() !== "" &&
      inputDateValue.trim() !== ""
    ) {
      const formListElement = {
        name: inputNameValue,
        surrname: inputSurnameValue,
        title: inputTitleValue,
        instruction: inputInstructionValue,
        date: new Date(inputDateValue),
      };
      setIsErrorText(false);
      setIsClicked(false);
      props.onClickAdd(formListElement);
      clearForm(inputSettersArray);
    } else {
      setIsErrorText(true);
    }
    checkInput(inputNameValue, setIsNameEmpty);
    checkInput(inputSurnameValue, setIsSurnameEmpty);
    checkInput(inputTitleValue, setIsTitleEmpty);
    checkInput(inputDateValue, setIsDateEmpty);
    checkInput(inputInstructionValue, setInstructionEmpty);
  };
  const checkInput = (input, setter) => {
    input.trim() === "" ? setter(true) : setter(false);
  };
  const showForm = () => {
    setIsClicked(true);
  };
  const hideForm = () => {
    setIsClicked(false);
    clearErrors(settersArray);
    clearForm(inputSettersArray);
  };
  const inputSettersArray = [
    setInputNameValue,
    setInputSurnameValue,
    setInputTitleValue,
    setInputDateValue,
    setInputInstructionValue,
  ];
  const clearForm = (inputsArray) => {
    inputsArray.forEach((element) => {
      element("");
    });
  };
  const settersArray = [
    setIsErrorText,
    setIsNameEmpty,
    setIsSurnameEmpty,
    setIsTitleEmpty,
    setIsDateEmpty,
    setInstructionEmpty
  ];
  const clearErrors = (validSetter) => {
    validSetter.forEach((element) => {
      element(false);
    });
  };

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
      <Label validLength={inputNameValue.length < 9}>Name: </Label>
      <InputArea>
        <InputText
          isNameEmpty={!isNameEmpty}
          validLength={inputNameValue.length < 9}
          type="text"
          value={inputNameValue}
          onChange={readNameHandler}
        />
        <Xbutton type="button" onClick={clearNameInputHandler}>
          <i className="fas fa-times"></i>
        </Xbutton>
      </InputArea>
      <Label validLength={inputSurnameValue.length < 9}>Surname: </Label>
      <InputArea>
        <InputText
          isSurnameEmpty={!isSurnameEmpty}
          validLength={inputSurnameValue.length < 9}
          type="text"
          value={inputSurnameValue}
          onChange={readSurnameHandler}
        />
        <Xbutton type="button" onClick={clearSurnameInputHandler}>
          <i className="fas fa-times"></i>
        </Xbutton>
      </InputArea>
      <Label validLength={inputTitleValue.length < 14}>Task title: </Label>
      <InputArea>
        <InputText
          isTitleEmpty={!isTitleEmpty}
          validLength={inputTitleValue.length < 14}
          type="text"
          value={inputTitleValue}
          onChange={readTitleHandler}
        />
        <Xbutton type="button" onClick={clearTitleInputHandler}>
          <i className="fas fa-times"></i>
        </Xbutton>
      </InputArea>
      <Label validLength={inputTitleValue.length < 100}>
        Instruction for the task:
      </Label>
      <InputArea>
        <TextArea
          isInstructionEmpty={!isInstructionEmpty}
          value={inputInstructionValue}
          onChange={readInstructionHandler}
          name=""
          id=""
          cols="30"
          rows="10"
        ></TextArea>
        <Xbutton type="button" onClick={clearInstructionInputHandler}>
          <i className="fas fa-times"></i>
        </Xbutton>
      </InputArea>
      <InputArea>
        <InputDate
          isDateEmpty={!isDateEmpty}
          type="date"
          onChange={readDateHandler}
        />
      </InputArea>
      {isErrorText ? (
        <p style={{ color: "red" }}>The form has empty fields !</p>
      ) : (
        ""
      )}
      <BotButtons>
        <Button onClick={props.clickAdd}>Add</Button>
        <Button onClick={hideForm}>Collapse</Button>
      </BotButtons>
    </Wrapper>
  );
};

export default Form;

// czy moge jakos w jednej funkcji czyscic ten przycisk ktory chce
