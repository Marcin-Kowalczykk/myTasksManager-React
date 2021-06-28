import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-self: flex-end;
`;
const Button = styled.button`
  border: none;
  border-radius: 8px;
  background-color: white;
  color: black;
  padding: 0.6rem;
  margin-right: 1rem;
  cursor: pointer;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
  transition: background-color .5s;

  &:hover {
    background-color: #8b8b8b3e;
  }
`;
const Info = styled.button`
color: #0000ffac;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const TopBar = (props) => {
  const deleteAllHandler = () => {
    props.onDeleteAllListElements();
  };
  return (
    <Wrapper>
      <Button onClick={deleteAllHandler}>Clear All</Button>
      <Info>
        <i className="fas fa-info-circle"></i>
      </Info>
    </Wrapper>
  );
};

export default TopBar;
