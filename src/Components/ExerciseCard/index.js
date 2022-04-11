import React, { useState } from "react";
import { gsap } from "gsap";
import styled, { css } from "styled-components";
import CardTop from "./CardTop";
import DataRow from "./DataRow";
import NameRow from "./NameRow";

const CardTemplate = styled.div`
  border: 2px solid red;
  border-bottom: none; 
  width: 100%;  
  height: fit-content;
  
  ${({ last }) => last && css`
    border-bottom: 2px solid red;
`}
`;

const CardBottom = styled.div`  
  height: 0;
  overflow: hidden;
  *{  font-size: 20px;}
`;

const emptyData = { name: "Exercise name", series: 1, reps: 1, weight: 1 };

const ExerciseEdit = ({ index, last, data = [] }) => {
  const [exerciseData, setExerciseData] = useState({ ...data });
  const [showSettings, setShowSettings] = useState(false);

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleIncrement = (name) => {
    const tmpValue = parseInt(exerciseData[name]);
    setExerciseData({ ...exerciseData, [name]: tmpValue + 1 });
  };

  const handleDecrement = (name) => {
    const tmpValue = parseInt(exerciseData[name]);
    if (tmpValue > 1) {
      setExerciseData({ ...exerciseData, [name]: tmpValue - 1 });
    }
  };

  const handleShowSettings = () => {
    if (showSettings) {
      setShowSettings(false);
      gsap.to(document.getElementById(`card_bottom_${index}`), { height: 0, duration: 0.3 });
    } else {
      setShowSettings(true);
      gsap.to(document.getElementById(`card_bottom_${index}`), { height: 270, duration: 0.3 });
    }
  };

  return (
    <CardTemplate last={last}>
      <CardTop
        data={exerciseData}
        onClick={handleShowSettings}
        settingsVisible={showSettings}
      />
      <CardBottom id={`card_bottom_${index}`}>
        <NameRow
          title={"Name"}
          name={"name"}
          value={exerciseData.name}
          onChange={handleOnChange}
        />
        <DataRow
          onChange={handleOnChange}
          handleIncrement={() => handleIncrement("series")}
          handleDecrement={() => handleDecrement("series")}
          title={"Series"}
          name={"series"}
          value={exerciseData.series}
        />
        <DataRow
          onChange={handleOnChange}
          handleIncrement={() => handleIncrement("reps")}
          handleDecrement={() => handleDecrement("reps")}
          title={"Reps"}
          name={"reps"}
          value={exerciseData.reps}
        />
        <DataRow
          onChange={handleOnChange}
          handleIncrement={() => handleIncrement("weight")}
          handleDecrement={() => handleDecrement("weight")}
          title={"Weight"}
          name={"weight"}
          value={exerciseData.weight}
        />
        <div style={{ height: "25px" }}></div>
      </CardBottom>
    </CardTemplate>
  );
};

export default ExerciseEdit;
