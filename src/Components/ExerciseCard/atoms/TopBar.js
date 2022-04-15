import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Switch } from "pretty-checkbox-react";

import "@djthoms/pretty-checkbox";

const MainTemplate = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  padding: 10px 10px 10px 0;  
  z-index: 900;
  button {
    width: 80px;
    height: 40px;
    font-size: 24px;
    background-color: transparent;
  }
`;

const ButtonLeft = styled.button`
  color: var(--black);
  border: 1px solid var(--black);
  border-radius: 5px;
  :active{
    background-color:var(--black);
    color: white;
  }
  :focus{
    outline: none;    
  }
`;

const ButtonRight = styled.button`
  color: var(--red);
  border: 1px solid var(--red);
  border-radius: 5px;
  :focus{
    outline: none;    
  }
    :active{
    background-color:var(--red);
    color: white;
  }
`;

const StyledSwitch = styled(Switch)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  font-size: 20px;
  margin-left: 20px;  
`;


const TopBar = ({ backAction, saveAction, orderMode, allowOrderMode }) => {
  return (
    <MainTemplate>
      <ButtonLeft onClick={backAction}>Back</ButtonLeft>
      <StyledSwitch checked={orderMode} onChange={allowOrderMode}>Order mode</StyledSwitch>
      <ButtonRight onClick={saveAction}>Save</ButtonRight>
    </MainTemplate>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    allowOrderMode: () => dispatch({ type: "ALLOW_ORDER_MODE", payload: null })
  };
};

const mapStateToProps = (state) => {
  return { orderMode: state.orderMode };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
