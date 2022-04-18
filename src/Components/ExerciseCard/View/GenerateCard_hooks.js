import { useSelector, useDispatch } from "react-redux";

const useHandleData = () => {
  const dispatch = useDispatch();
  const addExercise = () => dispatch({ type: "ADD_EXERCISE", payload: null });
  const { data, workoutName } = useSelector(state => state);

  return [data, workoutName, addExercise];
};

export default useHandleData;
