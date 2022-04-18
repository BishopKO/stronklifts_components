import { useSelector, useDispatch } from "react-redux";
import gsap from "gsap";
import * as PropTypes from "prop-types";

export const useRedux_Dispatch = (index) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data[index]);

  const updateData = (index, name, value) => {
    dispatch({
      type: "UPDATE_DATA",
      payload: { exercise_number: index, name: name, value: value }
    });
  };

  const removeExercise = (index) => {
    dispatch({ type: "REMOVE_EXERCISE", payload: index });
  };

  const handleOnChange = (evt) => {
    let { name, value } = evt.target;
    if (["series", "reps", "weight"].includes(name)) {
      updateData(index, name, isNaN(value) ? data[name] : value);
    } else {
      updateData(index, name, value);
    }
  };

  const handleIncrement = (name) => {
    const currentValue = parseInt(data[name]);
    const newValue = isNaN(currentValue) ? "" : currentValue + 1;
    updateData(index, name, newValue);
  };

  const handleDecrement = (name) => {
    const currentValue = data[name];
    if (currentValue > 1) {
      updateData(index, name, currentValue - 1);
    }
  };

  const handleRemove = () => {
    const element = document.getElementById(`card_${index}`);
    gsap.to(element, { height: 0, duration: 0.4 }).then(() => {
      removeExercise(index);
    });
  };

  return [handleOnChange, handleIncrement, handleDecrement, handleRemove];
};

export const useRedux_State = (index) => {
  const data = useSelector(state => state.data[index]);
  const activeExercise = useSelector(state => state.activeExercise);
  return [data, activeExercise];
};


