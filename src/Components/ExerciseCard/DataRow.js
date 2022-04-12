import React, { useState } from "react";
import styled from "styled-components";

const StyledTemplate = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 40px;
  width: 100%;
  padding: 0 10px 0 10px;
  margin-top: 15px;  
`;

const StyledParagraph = styled.p`
  width: 30%;
  font-size: 28px;
  color: black;
  padding:0;
  margin: 0;
`;

const StyledButton = styled.button`
  background-color: white;
  border: 1px solid red;
  border-radius: 5px;
  font-size: 24px;
  width: 60px;
  color: red;
  height: 35px;
  padding:0;
  margin: 0;
  :focus{
    outline: none;
  }
  :active{
    transform: scale(1.1);
  }
`;

const StyledInput = styled.input`
  text-align: center;
  border: none;
  border-bottom: 1px solid red;
  width: 4rem;
  margin: 0 20px 0 20px;
  font-size: 28px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;


const DataRowWithButtons = ({ name, title, value, onChange, handleIncrement, handleDecrement }) => {

  return (
    <StyledTemplate>
      <StyledParagraph>{title}:</StyledParagraph>
      <StyledDiv>
        <StyledButton onClick={handleDecrement}>-</StyledButton>
        <StyledInput
          name={name}
          value={value}
          onChange={onChange}
          type="text"
        />
        <StyledButton onClick={handleIncrement}>+</StyledButton>
      </StyledDiv>
    </StyledTemplate>
  );
};

export default DataRowWithButtons;
