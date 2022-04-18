import uuid from "react-uuid";

export const returnWorkoutData = (length) => {
  return new Array(length).fill(null).map((item, index) => {
    return { name: `Exercise name ${index + 1}`, series: 1, reps: 1, weight: 1, key: uuid() };
  });
};

export const returnEmptyExercise = (state) => {
  let tmpName = `Exercise name ${state.data.length + 1}`;
  return { name: tmpName, series: 1, reps: 1, weight: 1, key: uuid() };
};