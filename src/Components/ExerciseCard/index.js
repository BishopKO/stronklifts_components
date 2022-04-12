import React, { useState, useEffect } from "react";
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

const CardRemove = styled.div`  
  display: flex;
  margin-top: 25px;
  height: 40px;
  padding-left: 10px;
  flex-direction: row;
  justify-content: flex-start;
 
  button{
    width: fit-content;
    height: fit-content;    
    color: red;
    border: none;
    background-color: transparent;
    :focus{
      outline: none;      
    }
    :active{
      transform: scale(1.1);
    }
    i{
      font-size: 28px;
    }   
  }

`;

const emptyData = { name: "Exercise name", series: 1, reps: 1, weight: 1 };

const ExerciseEdit = ({ index, last, data = [], setVisible, isVisible, removeAction }) => {
  const [exerciseData, setExerciseData] = useState({ ...data });


  useEffect(() => {
    const element = document.getElementById(`card_bottom_${index}`);
    if (isVisible) {
      gsap.fromTo(element,
        { height: 0, duration: 0.3 }, { height: 300, duration: 0.3 });
    } else {
      if (element.getBoundingClientRect().height > 0) {
        gsap.fromTo(element,
          { height: 270, duration: 0.3 }, { height: 0, duration: 0.3 });
      }
    }
  }, [isVisible]);

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

  return (
    <CardTemplate last={last}>
      <CardTop
        data={exerciseData}
        onClick={setVisible}
        isVisible={isVisible}
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
        <CardRemove>
          <button onClick={removeAction}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </CardRemove>
      </CardBottom>
    </CardTemplate>
  );
};

export default ExerciseEdit;
