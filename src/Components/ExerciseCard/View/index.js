import React from "react";
import { Provider, useDispatch } from "react-redux";
import store from "../reducer/store";
import GenerateCards from "./GenerateCards";
import * as PropTypes from "prop-types";


const SetReduxData = ({ data = [] }) => {
  const dispatch = useDispatch();
  dispatch({ type: "SET_WORKOUT_DATA", payload: data });
};

const WorkoutEdit_View = () => {
  return (
    <div>
      <Provider store={store}>
        <SetReduxData/>
        <GenerateCards/>
      </Provider>
    </div>
  );
};

SetReduxData.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func
};
export default WorkoutEdit_View;


