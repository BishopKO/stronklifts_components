import React, { useState, useImperativeHandle, useRef } from "react";
import ExerciseBar from "../Workout_View/Components/ExerciseBar";
import Timer from "../Workout_View/Components/Timer/Timer";
import styled from "styled-components";
import { data as sampleData } from "../Workout_View/sample_data";

const MainTemplate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.button`
  width: 100%;
  padding:0;
  margin: 0;
  border: none;
  :focus{
    outline: none;
  }
`;

const Main = () => {
  const [activeExercise, setActiveExercise] = useState(0);
  const [data, setData] = useState(sampleData);
  const timerRef = useRef(null);

  const handleSetActive = (index) => {
    setActiveExercise(index);
    timerRef.current.restartTimer();
  };

  const handleCount = () => {
    let tmpData = data;
    tmpData[activeExercise].done += 1;
    setData([...tmpData]);
  };


  return (
    <MainTemplate>
      <div id="temp_spacer" style={{ height: "30px" }}></div>
      {data.map((item, index) => (
        <ButtonWrapper onClick={() => handleSetActive(index)} key={item.key}>
          <ExerciseBar
            values={item.values}
            name={item.name}
            index={index}
            done={item.done}
            active={index === activeExercise}
          />
        </ButtonWrapper>
      ))}
      <Timer timerRef={timerRef} handleCount={handleCount}/>
      <div id="temp_spacer" style={{ height: "170px" }}></div>
    </MainTemplate>
  );
};

export default Main;

// TODO: remove temp spacers