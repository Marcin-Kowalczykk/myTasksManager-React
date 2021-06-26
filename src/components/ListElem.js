import React from "react";
import styled from "styled-components";

import ListElemDate from "./ListElemDate";

const LiWrapper = styled.li`
  list-style: none;
  width: 80%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #00eeff58;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
`;
const Section = styled.div`
  border: 1px solid #0000ff13;
  border-radius: 0.5rem;
  background-color: #0000ff13;
  width: 30%;
`;
const Personal = styled.h4`
  margin: 0.2rem;
  padding: 0.3rem;
`;
const ContentSection = styled(Section)`
  width: 80%;
  margin: 0.2rem 0.5rem;
  padding: 0.45rem;
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
  const deleteTaskHandler = () => {
    props.onDeleteTask(props.id);
  };

  return (
    <LiWrapper>
      <Section>
        <Personal>{props.name}</Personal>
        <Personal>{props.surrname}</Personal>
      </Section>
      <ContentSection>
        <p>
          {props.content}
          <ButtonMore>
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
    </LiWrapper>
  );
};

export default ListElem;
