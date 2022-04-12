import React, { useState } from "react";
import styled from "styled-components";

const StyledTemplate = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  padding: 0 10px 0 10px;
  margin-top: 15px;  
`;

const StyledParagraph = styled.p`
  padding:0;
  margin: 0;
  width: 30%;
  font-size: 28px;
  color: black;
`;

const StyledInput = styled.input`
  text-align: center;
  border: none;
  border-bottom: 1px solid red;
  width: 90%;
  margin-left: 22px;
  font-size: 28px;
  :focus{
    outline: none;
  }
`;

const NameRow = ({ name, title, value, onChange }) => {

  return (
    <StyledTemplate>
      <StyledParagraph>{title}:</StyledParagraph>
      <div>
        <StyledInput
          name={name}
          value={value}
          onChange={onChange}
          type="text"
        />
      </div>
    </StyledTemplate>
  );
};

export default NameRow;
