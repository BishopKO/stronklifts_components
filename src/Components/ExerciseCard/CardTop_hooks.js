import { useDispatch, useSelector } from "react-redux";

export const useRedux_Dispatch = () => {
  const dispatch = useDispatch();
  const setActive = (index) => {
    dispatch({ type: "SET_ACTIVE", payload: index });
  };
  const setMoveStart = (index) =>
    dispatch({ type: "SET_MOVE_START", payload: index });
  const setMoveEnd = (index) =>
    dispatch({ type: "SET_MOVE_END", payload: index });
  return [setActive, setMoveStart, setMoveEnd];
};

export const useRedux_State = () => {
  const state = useSelector((state) => state);
  const { moveStart, orderMode, activeExercise } = state;
  return [orderMode, moveStart, activeExercise];
};

