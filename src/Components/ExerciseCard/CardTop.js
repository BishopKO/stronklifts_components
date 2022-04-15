import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

const StyledTemplate = styled.div`
  border-bottom: 1px solid var(--red);
  width: 100%;    
  background-color: white;
  font-size: 30px;
  overflow: hidden;  
  padding: 5px 0 5px 0;
  ${({ orderMode }) =>
  orderMode &&
  css`
      filter: opacity(0.5);
    `}
`;

const StyledButton = styled.button`
  display: grid;
  grid-template-columns: 90% 10%;
  width: 100%; 
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
  div:nth-child(1) {
    width: 100%;
    font-size: 24px;
    color: var(--black);
    text-overflow: ellipsis;
    text-align: left;
    overflow: hidden;
  }
  div:nth-child(2) {
    font-size: 16px;
  }
`;

const RightTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  i {
    color: var(--red);
  }
`;

const CardTop = ({
                   name,
                   series,
                   index,
                   reps,
                   weight,
                   activeExercise,
                   setActive,
                   orderMode,
                   setMoveStart,
                   setMoveEnd,
                   moveStart
                 }) => {
  const handleOnClick = () => {
    if (moveStart !== null) {
      setMoveEnd(index);
    } else {
      if (orderMode) {
        setMoveStart(index);
      } else {
        setActive(index);
      }
    }
  };

  return (
    <StyledTemplate orderMode={moveStart !== index && orderMode}>
      <StyledButton onClick={handleOnClick}>
        <LeftTop>
          <div><span>{name}</span></div>
          <div style={{ color: "var(--lightBlack)", fontWeight: "bold" }}>
            {series}x{reps} {weight}kg
          </div>
        </LeftTop>
        <RightTop>
          <i
            className={
              activeExercise === index ? "fa fa-angle-up" : "fa fa-angle-down"
            }
            aria-hidden="true"
          ></i>
        </RightTop>
      </StyledButton>
    </StyledTemplate>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActive: (index) => dispatch({ type: "SET_ACTIVE", payload: index }),
    setMoveStart: (index) => dispatch({ type: "SET_MOVE_START", payload: index }),
    setMoveEnd: (index) => dispatch({ type: "SET_MOVE_END", payload: index })
  };
};

const mapStateToProps = (state) => {
  return {
    orderMode: state.orderMode,
    moveStart: state.moveStart
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardTop);
