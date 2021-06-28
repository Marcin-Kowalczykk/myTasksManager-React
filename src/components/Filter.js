import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  margin-top: 1rem;
  width: 21rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #00d9ff47;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
`;
const Label = styled.label`
  margin-right: 0.5rem;
  font-size: 0.8rem;
  color: #0000ff99;
`;
const Input = styled.input`
  border: none;
  border-radius: 5px;
  background-color: #ffffffa7;
`;

const Filter = (props) => {
  return (
    <FilterWrapper>
      <Label>Filter by name:</Label>
      <Input
        onChange={props.onFilterByName}
        type="text"
      />
    </FilterWrapper>
  );
};

export default Filter;
