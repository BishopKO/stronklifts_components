import React from "react";
import useHandleData from "./GenerateCard_hooks";
import TopBar from "../atoms/TopBar";
import WorkoutName from "../atoms/WorkoutName";
import ExerciseCard from "../ExerciseCard";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 70px;
  overflow: auto;
`;

const StyledButton = styled.button`
  position: fixed;
  min-width: 100%;
  height: 50px;
  border: none;
  border-top: 1px solid var(--blue);
  color: var(--white);
  background-color: var(--blue); 
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


const GenerateCards = () => {
  const [data, workoutName, addExercise] = useHandleData();

  const handleAddExercise = () => {
      addExercise();
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight + 500, behavior: "smooth" });
      }, 200);
    }

  ;/*TODO: Make scroll only for exercises*/

  return (
    <div style={{ position: "relative" }}>
      <TopBar/>
      <StyledWrapper>
        <StyledRow>
          <WorkoutName
            value={workoutName}
            placeholder={"Workout Name"}
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

        {/*<div style={{ width: "100%", position: "fixed", height: "500px", top: "200px", overflow: "scroll" }}>*/}
        <div style={{ marginBottom: "55px", width: "100%", overflow: "scroll" }}>
          {data.map((exercise, index) => (
            <ExerciseCard index={index} key={exercise.key}/>
          ))}
        </div>
        <StyledFader/>
        <StyledButton onClick={handleAddExercise}>Add</StyledButton>
        {/*</div>*/}
      </StyledWrapper>
    </div>
  );
};
export default GenerateCards;
