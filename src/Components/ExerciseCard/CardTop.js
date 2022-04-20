import React from "react";
import { useRedux_Dispatch, useRedux_State } from "./CardTop_hooks";
import styled, { css } from "styled-components";
import * as PropTypes from "prop-types";
import NameRow from "./NameRow";

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
    font-size: 22px;
    color: var(--black);
    text-overflow: ellipsis;
    text-align: left;
    overflow: hidden;
    word-break: break-all;
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

const CardTop = ({ name, series, index, reps, weight }) => {
  const [orderMode, moveStart, activeExercise] = useRedux_State();
  const [setActive, setMoveStart, setMoveEnd] = useRedux_Dispatch();

  const handleOnClick = () => {
    const isOrderMode = () => {
      orderMode === true ? setMoveStart(index) : setActive(index);
    };
    moveStart !== null ? setMoveEnd(index) : isOrderMode();
  };

  return (
    <StyledTemplate orderMode={moveStart !== index && orderMode}>
      <StyledButton onClick={handleOnClick}>
        <LeftTop
          style={{
            height: "4rem",
            textOverflow: "ellipsis",
            width: "95%",
            overflow: "hidden",
            whiteSpace: "noWrap"
          }}
        >
          <div>
            <span>{name}</span>
          </div>
          <div style={{ color: "var(--grey)" }}>
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

CardTop.propTypes = {
  name: PropTypes.string,
  series: PropTypes.number,
  index: PropTypes.number,
  reps: PropTypes.number,
  weight: PropTypes.number
};

export default CardTop;
