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
  background-color: #000000;
  color: white;
  padding: 0.6rem;
  margin-right: 1rem;
  cursor: pointer;
`;
const Info = styled.button`
  border: none;
  background: none;
  font-size: 2rem;
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
