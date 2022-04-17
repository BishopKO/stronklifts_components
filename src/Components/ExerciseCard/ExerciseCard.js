import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";
import styled, { css } from "styled-components";
import CardTop from "./CardTop";
import DataRow from "./DataRow";
import NameRow from "./NameRow";

const CardTemplate = styled.div`
  overflow: hidden;
  border-bottom: none;
  width: 100%;
  margin-bottom: 0;
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

const ExerciseCard = ({ state, index, updateData, removeExercise }) => {
  const { data, activeExercise } = state;
  const ref = useRef();


  const handleOnChange = (evt) => {
    let { name, value } = evt.target;
    if (["series", "reps", "weight"].includes(name)) {
      updateData(index, name, isNaN(value) ? data[index][name] : value);
    } else {
      updateData(index, name, value);
    }
  };

  const handleIncrement = (name) => {
    const currentValue = parseInt(data[index][name]);
    const newValue = isNaN(currentValue) ? "" : currentValue + 1;
    updateData(index, name, newValue);
  };

  const handleDecrement = (name) => {
    const currentValue = data[index][name];
    if (currentValue > 1) {
      updateData(index, name, currentValue - 1);
    }
  };
  const handleRemove = () => {
    const element = document.getElementById(`card_${index}`);
    gsap.to(element, { height: 0, duration: 0.4 }).then(() => {
      removeExercise(index);
    });
  };
  const { name, series, reps, weight } = data[index];

  return (
    <CardTemplate ref={ref}
                  ref={ref}
                  id={`card_${index}`}
                  disable={activeExercise !== null && activeExercise !== index}
    >
      <CardTop
        name={name}
        activeExercise={state.activeExercise}
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
          autoFocus={!state.orderMode}
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
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (exercise_number, name, value) =>
      dispatch({
        type: "UPDATE_DATA",
        payload: { exercise_number: exercise_number, name: name, value: value }
      }),
    removeExercise: (index) =>
      dispatch({ type: "REMOVE_EXERCISE", payload: index })
  };
};

const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCard);
