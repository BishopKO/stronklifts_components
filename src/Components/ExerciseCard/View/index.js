import React from "react";
import { Provider, connect } from "react-redux";
import store from "../reducer/store";
import styled from "styled-components";
import ExerciseCard from "../index";


const StyledButton = styled.button`
  width: 100%;
  height: 50px;  
  border: 1px solid green;  
  margin-top: 5px;
  color: green;
  background-color:white;
  border-radius: 5px;
  font-size: 22px;
  :focus{
    outline: none;
  }
  :active{
    background-color: green;
    color: white;
  }  
`;


const mapStateToProps = state => {
  return { state };
};
const GenerateCards = connect(mapStateToProps, null)(({ state }) => {
  const { data } = state;
  return (
    <div>
      {data.map((exercise, index) => (
          <ExerciseCard index={index} key={`exercise_card__${index}`}/>
        )
      )}
    </div>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    setData: (data) => dispatch({ type: "SET_WORKOUT_DATA", payload: data })
  };
};
const SetReduxData = connect(null, mapDispatchToProps)(({ setData }) => {
  setData("datttt");
});

export const WorkoutEdit_View = () => {
  return (
    <div>
      <Provider store={store}>
        <SetReduxData/>
        <GenerateCards/>
        <StyledButton>Add</StyledButton>
      </Provider>
    </div>
  );
};

