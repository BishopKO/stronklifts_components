import { returnEmptyExercise, returnWorkoutData } from "./utils";

const initState = {
  data: returnWorkoutData(3),
  activeExercise: null,
  orderMode: 0,
  moveStart: null,
  workoutName: ""
};


const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_DATA": {
      const { exercise_number, name, value } = action.payload;
      state.data[exercise_number][name] = value;
      return { ...state };
    }
    case "SET_ACTIVE": {
      const index = action.payload;
      if (index === state.activeExercise) {
        return {
          ...state, activeExercise: null
        };
      }
      return { ...state, activeExercise: index };
    }
    case "SET_WORKOUT_DATA": {
      console.log("set_data", action.payload);
      return state;
    }
    case "REMOVE_EXERCISE": {
      const tmpData = state.data.filter((item, index) => {
        if (index !== action.payload) {
          return item;
        }
      });
      return { ...state, data: [...tmpData], activeExercise: null };
    }
    case "ADD_EXERCISE": {
      const tmpData = [...state.data, returnEmptyExercise(state)];
      return {
        ...state, data: [...tmpData], activeExercise: null
      };
    }
    case "ALLOW_ORDER_MODE" : {
      return { ...state, orderMode: !state.orderMode, activeExercise: null, moveStart: null };
    }
    case "SET_MOVE_START": {
      return {
        ...state, moveStart: action.payload
      };
    }
    case "SET_MOVE_END": {
      const [start, stop] = [parseInt(state.moveStart), parseInt(action.payload)];
      const tmpData = state.data[start];
      state.data[start] = state.data[stop];
      state.data[stop] = tmpData;
      state.moveStart = null;
      return {
        ...state
      };
    }
    case "SET_WORKOUT_NAME":
      const value = action.payload;
      return {
        ...state, workoutName: value
      };
    default:
      return { ...state };
  }
};

export default reducer;