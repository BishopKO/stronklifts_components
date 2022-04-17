import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledDiv_StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black);
  border-radius: 5px;
  margin: 20px 0 20px 0;

  :focus-within {
    i {
      display: none;
    }
  }

  div:nth-child(2) {
    position: absolute;
    right: 15px;
    i {
      font-size: 24px;
      filter: opacity(0.8);
    }
  }
`;

const StyledInput_WorkoutName = styled.input`
  padding: 0 5px 0 10px;
  margin: 0;
  width: 90%;
  justify-self: center;
  border: none;
  height: 50px;
  font-size: 22px;
  text-align: left;
  filter: opacity(0.8);
  text-overflow: ellipsis;
  :focus {
    outline: none;
    filter: opacity(1);
    width: 100%;
  }
`;

const blurOnEnterKey = (evt) => evt.keyCode === 13 && evt.target.blur();

const WorkoutName = ({ value, setWorkoutName, isOrderMode }) => {
  const handleOnChange = (evt) => {
    const { value } = evt.target;
    setWorkoutName(value);
  };

  return (
    <div
      style={{
        width: "100%",
        height: isOrderMode ? "0" : "110px",
        overflow: "hidden",
        transition: "0.4s"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "20px",
          marginTop: "10px",
          paddingLeft: "5px",
          fontSize: "22px",
          textAlign: "center",
          color: "var(--lightBlack)"
        }}
      >
        Workout Name:
      </div>
      <StyledDiv_StyledWrapper>
        <div style={{ width: "100%" }}>
          <StyledInput_WorkoutName
            value={value}
            onKeyDown={(evt) => blurOnEnterKey(evt)}
            onChange={(evt) => handleOnChange(evt)}
            placeholder={"Workout name..."}
          />
        </div>
        <div>
          {!isOrderMode && (
            <i className="fa fa-keyboard-o" aria-hidden="true"></i>
          )}
        </div>
      </StyledDiv_StyledWrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOrderMode: state.orderMode
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setWorkoutName: (value) =>
      dispatch({ type: "SET_WORKOUT_NAME", payload: value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutName);
