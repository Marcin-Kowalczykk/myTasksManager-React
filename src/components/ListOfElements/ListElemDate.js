import React from "react";
import styled from "styled-components";

const Date = styled.div`
  padding: 0.35rem;
  font-size: 0.7rem;
`;

const ListElemDate = (props) => {
  const month = props.date.toLocaleString("pl-PL", { month: "long" });
  const day = props.date.toLocaleString("pl-PL", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Date>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </Date>
  );
};

export default ListElemDate;
