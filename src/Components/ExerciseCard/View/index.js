import React from "react";
import { Provider, connect } from "react-redux";
import store from "../reducer/store";
import GenerateCards from "./GenerateCards";
import * as PropTypes from "prop-types";

const mapDispatchToProps = dispatch => {
  return {
    setData: (data) => dispatch({ type: "SET_WORKOUT_DATA", payload: data })
  };
};

const SetReduxData = connect(null, mapDispatchToProps)(({ setData, data = [] }) => {
  setData(data);
});


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
