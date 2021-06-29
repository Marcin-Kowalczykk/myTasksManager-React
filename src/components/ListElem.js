import React, { useState } from "react";
import styled from "styled-components";

import ListElemDate from "./ListElemDate";
import Note from "./Note";
import { keyframes } from "styled-components";

const animationShow = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
  `;
const animationHide = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;
const LiWrapper = styled.div`
  width: 80%;
  animation: ${(props) => (props.cosi ? animationHide : animationShow)};
  animation-duration: 1s;
  animation-delay: infinity;
`;

const MainWrapper = styled.li`
  list-style: none;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #00eeff58;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
`;
const Section = styled.div`
  border: 1px solid #0000ff13;
  border-radius: 0.5rem;
  background-color: #0000ff13;
  width: 30%;
`;
const Personal = styled.h6`
  margin: 0.2rem;
  padding: 0.3rem;
`;
const ContentSection = styled(Section)`
  width: 80%;
  margin: 0.2rem 0.5rem;
  padding: 0.45rem;
  font-size: 0.8rem;
`;
const ButtonMore = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.7rem;
  color: green;
`;
const ButtonClose = styled(ButtonMore)`
  color: #0000ff92;
  font-size: 0.8rem;
  transition: color 0.5s;
  &:hover {
    color: red;
  }
`;

const ListElem = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [cosi, setCosi] = useState(false);

  const deleteTaskHandler = () => {
    setCosi(true);
    setTimeout(() => props.onDeleteTask(props.id), 1000);
  };

  const showNoteHandler = () => {
    setIsClicked(true);
  };
  const hideNoteHandler = () => {
    setIsClicked(false);
  };

  return (
    <LiWrapper cosi={cosi}>
      <MainWrapper>
        <Section>
          <Personal>{props.name}</Personal>
          <Personal>{props.surname}</Personal>
        </Section>
        <ContentSection>
          <p>
            {props.title}
            <ButtonMore onClick={showNoteHandler}>
              More <i className="fas fa-angle-double-right"></i>
            </ButtonMore>
          </p>
        </ContentSection>
        <Section>
          <ListElemDate date={props.date} />
        </Section>
        <ButtonClose onClick={deleteTaskHandler}>
          <i className="far fa-times-circle"></i>
        </ButtonClose>
      </MainWrapper>
      <Note
        instruction={props.instruction}
        isClicked={isClicked}
        onHideNote={hideNoteHandler}
        animationShow={animationShow}
      />
    </LiWrapper>
  );
};

export default ListElem;
