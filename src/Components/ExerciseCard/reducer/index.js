const initState = {
  data: [
    { name: "Exercise name 1", series: 1, reps: 1, weight: 1 },
    {
      name: "Exercise name 2",
      series: 5,
      reps: 5,
      weight: 5
    },
    { name: "Exercise name 3", series: 1, reps: 1, weight: 1 }],
  activeExercise: 1
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      const { exercise_number, name, value } = action.payload;
      state.data[exercise_number][name] = value;
      return { ...state };
    case "SET_ACTIVE":
      const index = action.payload;
      if (index === state.activeExercise) {
        return {
          ...state, activeExercise: null
        };
      }
      return { ...state, activeExercise: index };
    case "SET_WORKOUT_DATA":
      return state;
    case "REMOVE_EXERCISE":
      return {
        ...state.data.filter((item, index) => {
          if (index !== action.payload) {
            return item;
          }
        })
      };

    default:
      return state;
  }
};

export default reducer;