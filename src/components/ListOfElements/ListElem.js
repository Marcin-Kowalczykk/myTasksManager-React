import React, { useState } from "react";

import styled from "styled-components";
import BoxWrapper from "../Ui/BoxWrapper";

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
  animation: ${(props) =>
    props.isClickedBtnX ? animationHide : animationShow};
  animation-duration: 1s;
`;
const MainWrapper = styled.li`
  list-style: none;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.2rem;
`;
const Section = styled.div`
  border-radius: 0.2rem;
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
  font-size: 0.6rem;
  color: #0000006c;
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
  const [isClickedMore, setIsClickedMore] = useState(false);
  const [isClickedBtnX, setIsClickedBtnX] = useState(false);

  const deleteTaskHandler = () => {
    setIsClickedBtnX(true);
    setTimeout(() => props.onDeleteTask(props.id), 1000);
  };

  const showNoteHandler = () => {
    setIsClickedMore(true);
  };
  const hideNoteHandler = () => {
    setIsClickedMore(false);
  };

  return (
    <LiWrapper isClickedBtnX={isClickedBtnX}>
      <BoxWrapper>
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
      </BoxWrapper>
      <BoxWrapper>
        <Note
          instruction={props.instruction}
          isClickedMore={isClickedMore}
          onHideNote={hideNoteHandler}
          animationShow={animationShow}
        />
      </BoxWrapper>
    </LiWrapper>
  );
};

export default ListElem;
