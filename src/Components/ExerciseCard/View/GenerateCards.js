import { connect } from "react-redux";
import TopBar from "../atoms/TopBar";
import WorkoutName from "../atoms/WorkoutName";
import ExerciseCard from "../ExerciseCard";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 70px;
`;

const StyledButton = styled.button`
  position: fixed;
  min-width: 100%;
  height: 50px;
  border: none;
  border-top: 1px solid var(--green);
  color: var(--green);
  background-color: white; 
  font-size: 22px;
  bottom: 0;

  :focus {
    outline: none;
  }

  :active {
    background-color: var(--green);
    color: white;
  }
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFader = styled.div`
  height: 20px;
  width: 100vw;
  position: fixed;
  bottom: 40px;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(188,188,188,0.61));
`;

const blurOnEnter = (evt) => evt.keyCode === 13 && evt.target.blur();

const GenerateCards = ({ state, addExercise }) => {
  const { data, workoutName } = state;
  return (
    <div style={{ position: "relative" }}>
      <TopBar/>
      <StyledWrapper>
        <StyledRow>
          <WorkoutName
            value={workoutName}
            placeholder={"Workout Name"}
            onKeyDown={(evt) => blurOnEnter(evt)}
          />
        </StyledRow>
        <div
          style={{
            width: "100%",
            height: "40px",
            marginTop: "20px",
            fontSize: "22px",
            textAlign: "center",
            color: "var(--lightBlack)"
          }}
        >
          Workout Exercises:
        </div>
        <div style={{ marginBottom: "50px", width: "100%" }}>
          {data.map((exercise, index) => (
            <ExerciseCard index={index} key={exercise.key}/>
          ))}
        </div>
        <StyledFader/>
        <StyledButton onClick={addExercise}>Add</StyledButton>
      </StyledWrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addExercise: () => dispatch({ type: "ADD_EXERCISE", payload: null })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateCards);
