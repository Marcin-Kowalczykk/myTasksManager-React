import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';
import BoxWrapper from '../Ui/BoxWrapper';

import ListElemDate from './ListElemDate';
import Note from './Note';

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
  animation: ${(props) => (props.isClickedBtnX ? animationHide : animationShow)};
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

const ListElem = ({ onDeleteTask, id, name, surname, title, date, instruction }) => {
  const [isClickedMore, setIsClickedMore] = useState(false);
  const [isClickedBtnX, setIsClickedBtnX] = useState(false);

  const deleteTaskHandler = () => {
    setIsClickedBtnX(true);
    setTimeout(() => onDeleteTask(id), 1000);
  };

  return (
    <LiWrapper isClickedBtnX={isClickedBtnX}>
      <BoxWrapper>
        <MainWrapper>
          <Section>
            <Personal>{name}</Personal>
            <Personal>{surname}</Personal>
          </Section>
          <ContentSection>
            <p>
              {title}
              <ButtonMore onClick={() => setIsClickedMore(true)}>
                More
                <i className="fas fa-angle-double-right" />
              </ButtonMore>
            </p>
          </ContentSection>
          <Section>
            <ListElemDate date={date} />
          </Section>
          <ButtonClose onClick={deleteTaskHandler}>
            <i className="far fa-times-circle" />
          </ButtonClose>
        </MainWrapper>
      </BoxWrapper>
      <BoxWrapper>
        <Note
          instruction={instruction}
          isClickedMore={isClickedMore}
          onHideNote={() => setIsClickedMore(false)}
          animationShow={animationShow}
        />
      </BoxWrapper>
    </LiWrapper>
  );
};

export default ListElem;
