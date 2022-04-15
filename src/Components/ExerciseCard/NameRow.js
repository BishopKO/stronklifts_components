import React from "react";
import styled from "styled-components";

const StyledTemplate = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 10px 0 10px;
  margin-top: 10px;
`;

const StyledParagraph = styled.p`
  padding:0;
  margin: 0;
  width: 100%;
  font-size: 20px;
  ;
`;

const StyledInput = styled.input`
  text-align: center;
  border-radius: 5px;
  border: 1px solid var(--red);
  width: 100%;
  padding-left: 5px;
  text-overflow: ellipsis;
  font-size: 20px;
  color: var(--black);
  :focus{
    outline: none;
      border: 1px solid var(--black);
      color: var(--black);

  }
`;

const NameRow = ({ autoFocus, name, title, value, onChange }) => {
  return (
    <StyledTemplate>
      <StyledParagraph>{title}:</StyledParagraph>
      <div>
        <StyledInput
          onKeyDown={(evt) => evt.keyCode === 13 ? evt.target.blur() : null}
          autoComplete={"off"}
          name={name}
          value={value}
          onChange={onChange}
          type="text"
        />
        {/*<i className="fa fa-keyboard-o" aria-hidden="true"></i>*/}
      </div>
    </StyledTemplate>
  );
};

export default NameRow;
