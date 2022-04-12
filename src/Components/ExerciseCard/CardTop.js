import React from "react";
import styled from "styled-components";

const StyledTemplate = styled.div`
  border-bottom: 1px solid red;
  width: 100%;
  height: 70px;
  background-color: white;
  font-size: 30px;
  overflow: hidden;
`;

const StyledButton = styled.button`
  display: grid;
  grid-template-columns: 90% 10%;
  width: 100%;
  height: 60px;
  margin: 0;
  border: none;
  background-color: white;
  overflow: hidden;
  :focus {
    outline: none;
  }
`;

const LeftTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  div:nth-child(1){
    font-size: 24px;
  }
  div:nth-child(2){
  font-size: 16px;}
`;

const RightTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  i{
      color: red;
  }
`;


const CardTop = ({ data, onClick, isVisible }) => {
  const { name, series, reps, weight } = data;

  return (
    <StyledTemplate>
      <StyledButton onClick={onClick}>
        <LeftTop>
          <div>{name}</div>
          <div>
            {series}x{reps} {weight}kg
          </div>
        </LeftTop>
        <RightTop>
          <i
            className={isVisible ? "fa fa-angle-up" : "fa fa-angle-down"}
            aria-hidden="true"
          ></i>
        </RightTop>
      </StyledButton>
    </StyledTemplate>
  );
};

export default CardTop;
