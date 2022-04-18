import React, { useEffect, useRef, memo, useCallback } from "react";
import { useRedux_State, useRedux_Dispatch } from "./ExerciseCard_hooks";
import * as PropTypes from "prop-types";
import styled, { css } from "styled-components";
import CardTop from "./CardTop";
import DataRow from "./DataRow";
import NameRow from "./NameRow";

const CardTemplate = styled.div`
  overflow: hidden;
  border-bottom: none;
  width: 100%;
  ${({ disable }) =>
  disable &&
  css`
      filter: opacity(0.5);
    `}
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 0;
  transition: all 0.3s ease-in;
  overflow: hidden;


  ${({ active }) =>
  active &&
  css`
      max-height: 300px;
    `}
`;

const CardRemove = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  button {
    width: 100%;
    height: 40px;
    color: var(--red);
    border: none;
    border-radius: 5px;
    background-color: var(--lightRed);
    filter: opacity(0.7);
    :focus {
      outline: none;
    }
    :active {
      transform: scale(1.1);
    }
    i {
      font-size: 28px;
    }
  }
`;
;

const ExerciseCard = ({ index }) => {
    const [handleOnChange, handleIncrement, handleDecrement, handleRemove] =
      useRedux_Dispatch(index);
    const [data, activeExercise] = useRedux_State(index);
    const { name, series, reps, weight } = data;


    return (
      <>
        <CardTemplate
          id={`card_${index}`}
          disable={activeExercise !== null && activeExercise !== index}
        >
          <CardTop
            name={name}
            activeExercise={activeExercise}
            series={series}
            reps={reps}
            weight={weight}
            index={index}
          />
          <CardBottom id={`card_bottom_${index}`} active={activeExercise === index}>
            <NameRow
              onChange={handleOnChange}
              title={"Name"}
              name={"name"}
              value={name}
            />
            <DataRow
              onChange={handleOnChange}
              handleIncrement={() => handleIncrement("series")}
              handleDecrement={() => handleDecrement("series")}
              title={"Series"}
              name={"series"}
              value={series}
            />
            <DataRow
              onChange={handleOnChange}
              handleIncrement={() => handleIncrement("reps")}
              handleDecrement={() => handleDecrement("reps")}
              title={"Reps"}
              name={"reps"}
              value={reps}
            />
            <DataRow
              onChange={handleOnChange}
              handleIncrement={() => handleIncrement("weight")}
              handleDecrement={() => handleDecrement("weight")}
              title={"Weight"}
              name={"weight"}
              value={weight}
            />
            <CardRemove>
              <button onClick={handleRemove}>Remove</button>
            </CardRemove>
          </CardBottom>
        </CardTemplate>
      </>
    );
  }
;

ExerciseCard.propTypes = {
  index: PropTypes.number
};

export default ExerciseCard;
