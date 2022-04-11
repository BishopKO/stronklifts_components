import React from "react";
import ExerciseCard from "../Components/ExerciseCard";

const testData = [{ name: "Exercise name 1", series: 1, reps: 1, weight: 1 }, {
  name: "Exercise name 2",
  series: 5,
  reps: 5,
  weight: 5
}, { name: "Exercise name 3", series: 1, reps: 1, weight: 1 }];

const WorkoutEditView = () => {
  return (
    <div>
      {testData.map((data, index) => (
        <ExerciseCard index={index} last={index === testData.length - 1} data={data}/>
      ))}
    </div>
  );
};

export default WorkoutEditView;