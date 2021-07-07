import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';
import BoxButtons from './Ui/BoxButtons';
import BoxWrapper from './Ui/BoxWrapper';

const wrapperAnimationShow = keyframes`
  0% { opacity: 0.1;}
  100% { opacity: 1; }
  0% { margin-top: -300px; }
  100% { margin-top: 0px; }
`;

const wrapperAnimationShow2 = keyframes`
  0% {  margin-left: 20rem; }
  100% { margin-left: 0; }
`;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding: 1rem;
  animation-name: ${(props) =>
    props.isClicked ? wrapperAnimationShow : wrapperAnimationShow2};
  animation-duration: 0.5s;
`;

const InputArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const InputText = styled.input`
  width: 80%;
  height: 1.5rem;
  outline: none;
  background-color: ${(props) => (props.validLength ? '#ffffffa7' : '#a0000034')};
  border: ${(props) =>
    (props.validLength && props.isNameEmpty) ||
    props.isSurnameEmpty ||
    props.isTitleEmpty
      ? 'none'
      : '1px solid rgb(255, 0, 0, .7)'};
  border-radius: 0.3rem;
  margin: 0 0 0.6rem 1.5rem;
  :focus {
    border: 1px solid #0000ff54;
  }
`;

const TextArea = styled.textarea`
  background-color: #ffffffa7;
  border: ${(props) =>
    props.isInstructionEmpty ? 'none' : '1px solid rgb(255, 0, 0, .7)'};
  border-radius: 0.3rem;
  margin: 0 0 0.6rem 1.5rem;
  min-width: 80%;
  max-width: 80%;
  height: 4rem;
  outline: none;
  :focus {
    border: 1px solid #0000ff54;
  }
`;

const InputDate = styled(InputText)`
  ::-webkit-calendar-picker-indicator {
    margin: 1rem;
    font-size: 0.7rem;
    cursor: pointer;
  }
  text-align: center;
  color: #0000ff94;
  font-size: 0.7rem;
  margin-left: 37%;
  width: 45%;
  background-color: #a0420311;
  border: 1px solid
    ${(props) => (props.isDateEmpty ? '#a0420311' : 'rgb(255, 0, 0, .9)')};
`;

const Xbutton = styled.button`
  border: none;
  background: none;
  outline: none;
  color: #0000ff92;
  cursor: pointer;
  transition: color 0.5s, font-size 0.5s;
  &:hover {
    color: red;
    font-size: 1.5rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  :focus {
    color: red;
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: ${(props) => (props.validLength ? '#0000ff94' : 'rgb(255, 0, 0, .9)')};
  margin-bottom: 0.3rem;
`;

const MainButton = styled(BoxButtons)`
  width: 10rem;
`;

const BotButtons = styled.div`
  margin: 0.5rem 0 0.3rem 0;
  align-self: flex-end;
`;

const Form = ({ onClickAdd }) => {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputSurnameValue, setInputSurnameValue] = useState('');
  const [inputTitleValue, setInputTitleValue] = useState('');
  const [inputDateValue, setInputDateValue] = useState('');
  const [inputInstructionValue, setInputInstructionValue] = useState('');

  const [isClicked, setIsClicked] = useState(false);
  const [isErrorText, setIsErrorText] = useState(false);

  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isSurnameEmpty, setIsSurnameEmpty] = useState(false);
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isInstructionEmpty, setInstructionEmpty] = useState(false);
  const [isDateEmpty, setIsDateEmpty] = useState(false);

  const NAME_MAX_LENGTH = 11;
  const SURNAME_MAX_LENGTH = 11;
  const TITLE_MAX_LENGTH = 14;

  const inputSettersArray = [
    setInputNameValue,
    setInputSurnameValue,
    setInputTitleValue,
    setInputDateValue,
    setInputInstructionValue,
  ];

  const settersArray = [
    setIsErrorText,
    setIsNameEmpty,
    setIsSurnameEmpty,
    setIsTitleEmpty,
    setIsDateEmpty,
    setInstructionEmpty,
  ];

  const clearErrors = (validSetter) => {
    validSetter.forEach((element) => {
      element(false);
    });
  };

  const checkInput = (input, setter) => {
    input.trim() === '' ? setter(true) : setter(false);
  };

  const clearForm = (inputsArray) => {
    inputsArray.forEach((element) => {
      element('');
    });
  };

  const hideForm = () => {
    setIsClicked(false);
    clearErrors(settersArray);
    clearForm(inputSettersArray);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    if (
      inputNameValue.length < NAME_MAX_LENGTH &&
      inputSurnameValue.length < SURNAME_MAX_LENGTH &&
      inputTitleValue.length < TITLE_MAX_LENGTH &&
      inputNameValue.trim() !== '' &&
      inputSurnameValue.trim() !== '' &&
      inputTitleValue.trim() !== '' &&
      inputDateValue.trim() !== ''
    ) {
      const formListElement = {
        name: inputNameValue,
        surname: inputSurnameValue,
        title: inputTitleValue,
        instruction: inputInstructionValue,
        date: new Date(inputDateValue),
      };
      setIsErrorText(false);
      setIsClicked(false);
      onClickAdd(formListElement);
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

  if (isClicked === false) {
    return (
      <BoxWrapper>
        <Wrapper isClicked={isClicked}>
          <MainButton type="button" onClick={() => setIsClicked(true)}>
            Add new task
          </MainButton>
        </Wrapper>
      </BoxWrapper>
    );
  }

  return (
    <BoxWrapper>
      <Wrapper isClicked={isClicked} onSubmit={addItemHandler}>
        <Label validLength={inputNameValue.length < NAME_MAX_LENGTH}>Name: </Label>
        <InputArea>
          <InputText
            isNameEmpty={!isNameEmpty}
            validLength={inputNameValue.length < 11}
            type="text"
            value={inputNameValue}
            onChange={(event) => setInputNameValue(event.target.value)}
          />
          <Xbutton type="button" onClick={() => setInputNameValue('')}>
            <i className="fas fa-times" />
          </Xbutton>
        </InputArea>
        <Label validLength={inputSurnameValue.length < SURNAME_MAX_LENGTH}>
          Surname:
        </Label>
        <InputArea>
          <InputText
            isSurnameEmpty={!isSurnameEmpty}
            validLength={inputSurnameValue.length < TITLE_MAX_LENGTH}
            type="text"
            value={inputSurnameValue}
            onChange={(event) => setInputSurnameValue(event.target.value)}
          />
          <Xbutton type="button" onClick={() => setInputSurnameValue('')}>
            <i className="fas fa-times" />
          </Xbutton>
        </InputArea>
        <Label validLength={inputTitleValue.length < 14}>Task title: </Label>
        <InputArea>
          <InputText
            isTitleEmpty={!isTitleEmpty}
            validLength={inputTitleValue.length < 14}
            type="text"
            value={inputTitleValue}
            onChange={(event) => setInputTitleValue(event.target.value)}
          />
          <Xbutton type="button" onClick={() => setInputTitleValue('')}>
            <i className="fas fa-times" />
          </Xbutton>
        </InputArea>
        <Label validLength={inputTitleValue.length < 100}>
          Instruction for the task:
        </Label>
        <InputArea>
          <TextArea
            isInstructionEmpty={!isInstructionEmpty}
            value={inputInstructionValue}
            onChange={(event) => setInputInstructionValue(event.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
          />
          <Xbutton type="button" onClick={() => setInputInstructionValue('')}>
            <i className="fas fa-times" />
          </Xbutton>
        </InputArea>
        <InputArea>
          <InputDate
            isDateEmpty={!isDateEmpty}
            type="date"
            onChange={(event) => setInputDateValue(event.target.value)}
          />
        </InputArea>
        {isErrorText ? (
          <p style={{ color: 'red' }}>The form has empty fields !</p>
        ) : (
          ''
        )}
        <BotButtons>
          <BoxButtons onClick={addItemHandler}>Add</BoxButtons>
          <BoxButtons onClick={hideForm}>Collapse</BoxButtons>
        </BotButtons>
      </Wrapper>
    </BoxWrapper>
  );
};

export default Form;
