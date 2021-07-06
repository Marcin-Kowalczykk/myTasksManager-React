import React from 'react';
import styled from 'styled-components';

import BoxButtons from './Ui/BoxButtons';

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  align-self: flex-end;

  @media (max-width: 600px) {
    padding: 0.3rem;
  }
`;

const Button = styled(BoxButtons)`
  padding: 0.5rem;
  margin-right: 1rem;

  @media (max-width: 600px) {
    margin-right: 0.3rem;
  }
`;

const Info = styled.button`
  color: #0000ff8d;
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
      <Button type="button" onClick={deleteAllHandler}>
        Clear All
      </Button>
      <Info>
        <i className="fas fa-info-circle" />
      </Info>
    </Wrapper>
  );
};

export default TopBar;
