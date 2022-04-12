import React, { useEffect } from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";
import styled, { css } from "styled-components";
import CardTop from "./CardTop";
import DataRow from "./DataRow";
import NameRow from "./NameRow";

const CardTemplate = styled.div`
overflow: hidden;
  //border: 2px solid red;
  border-bottom: none;
  width: 100%;
  height: fit-content;
  ${({ disable }) => disable && css`
   filter: opacity(0.5);
`}
`;

const CardBottom = styled.div`
  height: 0;
  overflow: hidden;
  * {
    font-size: 20px;
  }
`;

const CardRemove = styled.div`
  display: flex;
  margin-top: 25px;
  height: 40px;  
  flex-direction: row;
  justify-content: center;
  width: 100%; 

  button {
    width: 100%;
    height: fit-content;
    color: red;
    border: none;
    border-radius: 5px;
    background-color: rgba(255,129,133,0.53);
    filter: opacity(0.7);
    :focus {
      outline: none;
    }
    :active {
      transform: scale(1.1);
    }
    i {
      font-size: 28px;
    }
  }
`;

const ExerciseEdit = ({
                        state,
                        index,
                        updateData,
                        removeExercise
                      }) => {

  useEffect(() => {
    const element = document.getElementById(`card_bottom_${index}`);
    const animDuration = 0.5;

    if (state.activeExercise === index) {
      gsap.fromTo(element,
        { height: 0, duration: animDuration }, { height: 300, duration: animDuration });
    } else {
      if (element.getBoundingClientRect().height > 0) {
        gsap.fromTo(element,
          { height: 300, duration: animDuration }, { height: 0, duration: animDuration });
      }
    }
  }, [state.activeExercise, state.data, index]);

  const data = state.data[index];

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
  const { name, series, reps, weight } = data;
  const { activeExercise } = state;

  return (
    <CardTemplate id={`card_${index}`} disable={activeExercise !== null && activeExercise !== index}>
      <CardTop name={name} series={series} reps={reps} weight={weight} index={index}/>
      <CardBottom id={`card_bottom_${index}`}>
        <NameRow
          title={"Name"}
          name={"name"}
          value={name}
          onChange={handleOnChange}
        />
        <DataRow
          onChange={handleOnChange}
          handleIncrement={() => handleIncrement("series")}
          handleDecrement={() => handleDecrement("series")}
          title={"Series"}
          name={"series"}
          value={series}
        />
        <DataRow
          onChange={handleOnChange}
          handleIncrement={() => handleIncrement("reps")}
          handleDecrement={() => handleDecrement("reps")}
          title={"Reps"}
          name={"reps"}
          value={reps}
        />
        <DataRow
          onChange={handleOnChange}
          handleIncrement={() => handleIncrement("weight")}
          handleDecrement={() => handleDecrement("weight")}
          title={"Weight"}
          name={"weight"}
          value={weight}
        />
        <CardRemove>
          <button onClick={handleRemove}>Remove
          </button>
        </CardRemove>
      </CardBottom>
    </CardTemplate>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (exercise_number, name, value) =>
      dispatch({
        type: "UPDATE_DATA",
        payload: { exercise_number: exercise_number, name: name, value: value }
      }),
    removeExercise: (index) => dispatch({ type: "REMOVE_EXERCISE", payload: index })
  };
};

const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseEdit);
