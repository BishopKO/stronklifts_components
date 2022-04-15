import React, { useRef } from "react";
import styled from "styled-components";

const StyledTemplate = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 0 10px 0 10px;
  margin-top: 15px;  
`;

const StyledParagraph = styled.p`
  width: 30%;
  font-size: 20px;  
  padding:0;
  margin: 0;
`;

const StyledButton = styled.button`
  background-color: white;
  border: 1px solid var(--red);
  border-radius: 5px;
  font-size: 24px;
  width: 60px;
  color: var(--red);
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
  border-bottom: 1px solid var(--red);
  width: 4rem;
  margin: 0 20px 0 20px;
  font-size: 20px;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  //padding-right: 1/0px;
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
          onKeyDown={(evt) => evt.keyCode === 13 ? evt.target.blur() : null}
          onChange={onChange}
          type="text"
        />
        <StyledButton onClick={handleIncrement}>+</StyledButton>
      </StyledDiv>
    </StyledTemplate>
  );
};

export default DataRowWithButtons;
