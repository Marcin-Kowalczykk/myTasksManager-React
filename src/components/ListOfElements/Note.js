import React, { useState } from 'react';

import styled from 'styled-components';

const NoteWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: ${(props) => (props.isClickedMore ? 'block' : 'none')};
  animation: ${(props) => (props.isClickedMore ? props.animation : false)};
  animation-duration: 1s;
`;

const TextArea = styled.textarea`
  background-color: #ffffffa7;
  border: none;
  border-radius: 5px;
  margin: 0.3rem;
  min-width: 95%;
  max-width: 95%;
  height: 3rem;
  outline: none;
  :focus {
    border: 1px solid #0000ff54;
  }
`;

const Button = styled.button`
  margin-top: 0.2rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.6rem;
  color: #0000006c;
`;

const Note = (props) => {
  const [inputNoteValue, setInputNoteValue] = useState(props.instruction);

  return (
    <NoteWrapper
      className="global-wrappers"
      animation={props.animationShow}
      isClickedMore={props.isClickedMore}
    >
      <Button onClick={() => props.onHideNote()}>
        Less <i className="fas fa-angle-double-left" />
      </Button>
      <TextArea
        value={inputNoteValue}
        onChange={(event) => setInputNoteValue(event.target.value)}
        cols="30"
        rows="10"
      />
    </NoteWrapper>
  );
};

export default Note;
