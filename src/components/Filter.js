import React, { useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const showAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;
const FilterWrapper = styled.div`
  margin-top: 1rem;
  width: ${(props) => (props.showButtonClick ? "17rem" : "5rem")};
  border-radius: 0.5rem;
  background-color: #00d9ff47;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
  animation: ${(props) => (props.showButtonClick ? showAnimation : false)};
  animation-duration: 1s;
`;
const ButtonHide = styled.button`
  display: block;
  margin: 1% 1% 1% 92%;
  border: none;
  background: none;
  cursor: pointer;
  color: #2949fc8b;
  font-size: 0.6rem;
`;
const ButtonShow = styled(ButtonHide)`
  margin: 1% 15% 1% auto;
  font-size: 0.8rem;
`;
const InputWrapper = styled.div`
  margin: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  margin-right: 0.5rem;
  font-size: 0.8rem;
  color: #0000ff99;
`;
const Input = styled.input`
  align-self: center;
  width: auto;
  border: none;
  border-radius: 5px;
  background-color: #ffffffa7;
`;

const Filter = (props) => {
  const [isShowButton, setIsShowButton] = useState(false);

  const hideFilterHandler = () => {
    setIsShowButton(false);
  };
  const showFilterHandler = () => {
    setIsShowButton(true);
  };

  if (!isShowButton) {
    return (
      <FilterWrapper showButtonClick={isShowButton}>
        <ButtonShow onClick={showFilterHandler}>
          Filter <i className="fas fa-compress"></i>
        </ButtonShow>
      </FilterWrapper>
    );
  }

  return (
    <FilterWrapper showButtonClick={isShowButton}>
      <ButtonHide onClick={hideFilterHandler}>
        <i className="fas fa-compress-arrows-alt"></i>
      </ButtonHide>
      <InputWrapper>
        <Label>Filter by personal:</Label>
        <Input onChange={props.onFilterByPersonal} type="text" />
      </InputWrapper>
      <InputWrapper>
        <Label>Filter by title:</Label>
        <Input onChange={props.onFilterByTitle} type="text" />
      </InputWrapper>
      <InputWrapper>
        <Label>Filter by date:</Label>
        <Input onChange={props.onFilterByDate} type="text" />
      </InputWrapper>
    </FilterWrapper>
  );
};

export default Filter;
