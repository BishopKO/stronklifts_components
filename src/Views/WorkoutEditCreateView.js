import React, { useState, useReducer } from "react";
import styled from "styled-components";
import ExerciseCard from "../Components/ExerciseCard";

const testData = [
  { name: "Exercise name 1", series: 1, reps: 1, weight: 1 },
  {
    name: "Exercise name 2",
    series: 5,
    reps: 5,
    weight: 5
  },
  { name: "Exercise name 3", series: 1, reps: 1, weight: 1 }
];

const StyledButton = styled.button`
  width: 100%;
  height: 60px;  
  border: 2px solid green;  
  margin-top: -2px;
  color: green;
  background-color:white;
  :focus{
    outline: none;
  }
  
`;

const WorkoutEditView = () => {
  const [isVisible, setIsVisible] = useState(null);
  const [data, setData] = useState([...testData]);

  const handleVisible = (index) => {
    if (index === isVisible) {
      setIsVisible(null);
    } else {
      setIsVisible(index);
    }
  };

  const handleAddExercise = () => {
    let tmpData = data;
    tmpData.push({ name: "Exercise name", series: 1, reps: 1, weight: 1 });
    setData([...tmpData]);
  };

  const removeAction = (remove_index) => {
    setData(data.filter((item, index) => {
        if (index !== remove_index) {
          return item;
        }
      })
    );
    setIsVisible(null);
  };

  return (
    <div>
      {data.map((data, index) => (
        <ExerciseCard
          key={JSON.stringify(data)}
          index={index}
          isVisible={isVisible === index}
          setVisible={() => handleVisible(index)}
          removeAction={() => removeAction(index)}
          last={index === data.length - 1}
          data={data}
        />
      ))}
      <StyledButton onClick={handleAddExercise}>Add</StyledButton>
    </div>
  );
};

export default WorkoutEditView;
