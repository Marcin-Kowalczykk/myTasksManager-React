import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';
import BoxButtons from './Ui/BoxButtons';
import BoxWrapper from './Ui/BoxWrapper';

const wrapperAnimationShow = keyframes`
  0% { opacity: 0.1; }
  100% { opacity: 1; }
`;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding: 1rem;
  animation-name: ${(props) => (props.isClicked ? wrapperAnimationShow : false)};
  animation-duration: 1.5s;
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

const Button = styled.div`
  width: 5rem;
  padding: 0.3rem;
`;

const MainButton = styled(Button)`
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

  const showForm = () => {
    setIsClicked(true);
  };

  const hideForm = () => {
    setIsClicked(false);
    clearErrors(settersArray);
    clearForm(inputSettersArray);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    if (
      inputNameValue.length < 11 &&
      inputSurnameValue.length < 11 &&
      inputTitleValue.length < 14 &&
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
          <BoxButtons>
            <MainButton type="button" onClick={showForm}>
              Add new task
            </MainButton>
          </BoxButtons>
        </Wrapper>
      </BoxWrapper>
    );
  }

  return (
    <BoxWrapper>
      <Wrapper isClicked={isClicked} onSubmit={addItemHandler}>
        <Label validLength={inputNameValue.length < 11}>Name: </Label>
        <InputArea>
          <InputText
            isNameEmpty={!isNameEmpty}
            validLength={inputNameValue.length < 11}
            type="text"
            value={inputNameValue}
            onChange={readNameHandler}
          />
          <Xbutton type="button" onClick={() => setInputNameValue('')}>
            <i className="fas fa-times" />
          </Xbutton>
        </InputArea>
        <Label validLength={inputSurnameValue.length < 11}>Surname: </Label>
        <InputArea>
          <InputText
            isSurnameEmpty={!isSurnameEmpty}
            validLength={inputSurnameValue.length < 11}
            type="text"
            value={inputSurnameValue}
            onChange={readSurnameHandler}
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
            onChange={readTitleHandler}
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
            onChange={readInstructionHandler}
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
            onChange={readDateHandler}
          />
        </InputArea>
        {isErrorText ? (
          <p style={{ color: 'red' }}>The form has empty fields !</p>
        ) : (
          ''
        )}
        <BotButtons>
          <BoxButtons>
            <Button onClick={addItemHandler}>Add</Button>
          </BoxButtons>
          <BoxButtons>
            <Button onClick={hideForm}>Collapse</Button>
          </BoxButtons>
        </BotButtons>
      </Wrapper>
    </BoxWrapper>
  );
};

export default Form;
