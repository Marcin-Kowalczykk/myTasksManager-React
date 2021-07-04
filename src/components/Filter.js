import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import BoxWrapper from './Ui/BoxWrapper';

const showAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const FilterWrapper = styled.div`
  width: ${(props) => (props.showButtonClick ? '16rem' : '5rem')};
  animation: ${(props) => (props.showButtonClick ? showAnimation : false)};
  animation-duration: 1s;
`;

const ButtonHide = styled.button`
  margin: 0 0 2% 91%;
  border: none;
  background: none;
  cursor: pointer;
  color: #0026ffac;
  font-size: 0.6rem;
`;

const ButtonShow = styled(ButtonHide)`
  margin: 0 0 0.1rem 0;
  font-size: 0.8rem;
`;

const InputWrapper = styled.div`
  margin: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: #0000ff99;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  background-color: #ffffffa7;
  outline: none;
  :focus {
    border: 1px solid #0000ff54;
  }
`;

const Filter = ({ onFilterByPersonal, onFilterByTitle, onFilterByYear }) => {
  const [isShowButton, setIsShowButton] = useState(false);

  if (!isShowButton) {
    return (
      <BoxWrapper>
        <FilterWrapper showButtonClick={isShowButton}>
          <ButtonShow onClick={() => setIsShowButton(true)}>
            Filter <i className="fas fa-compress"></i>
          </ButtonShow>
        </FilterWrapper>
      </BoxWrapper>
    );
  }

  return (
    <BoxWrapper>
      <FilterWrapper showButtonClick={isShowButton}>
        <ButtonHide onClick={() => setIsShowButton(false)}>
          <i className="fas fa-compress-arrows-alt"></i>
        </ButtonHide>
        <InputWrapper>
          <Label>By personal:</Label>
          <Input onChange={onFilterByPersonal} type="text" />
        </InputWrapper>
        <InputWrapper>
          <Label>By title:</Label>
          <Input onChange={onFilterByTitle} type="text" />
        </InputWrapper>
        <InputWrapper>
          <Label>By year:</Label>
          <Input onChange={onFilterByYear} type="text" />
        </InputWrapper>
      </FilterWrapper>
    </BoxWrapper>
  );
};

export default Filter;
