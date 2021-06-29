import React, { useState } from "react";

import styled from "styled-components";

const NoteWrapper = styled.div`
  background-color: #00eeff58;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  display: ${(props) => (props.isClicked ? "block" : "none")};
  animation: ${(props) => (props.isClicked ? props.animation : false)};
  animation-duration: 1s;
`;

const TextArea = styled.textarea`
  font-family: "Times New Roman", Times, serif;
  background-color: #ffffffa7;
  border: none;
  border-radius: 5px;
  margin: 0.3rem;
  min-width: 95%;
  max-width: 95%;
  height: 3rem;
`;
const Button = styled.button`
  margin-top: 0.2rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.7rem;
  color: green;
`;

const Note = (props) => {
  const [inputNoteValue, setInputNoteValue] = useState(props.instruction);

  const inputNoteValueHandler = (event) => {
    setInputNoteValue(event.target.value);
  };
  const hideNoteHandler = () => {
    props.onHideNote();
  };

  return (
    <NoteWrapper animation={props.animationShow} isClicked={props.isClicked}>
      <Button onClick={hideNoteHandler}>
        Less <i className="fas fa-angle-double-left"></i>
      </Button>
      <TextArea
        value={inputNoteValue}
        onChange={inputNoteValueHandler}
        name=""
        id=""
        cols="30"
        rows="10"
      ></TextArea>
    </NoteWrapper>
  );
};

export default Note;
