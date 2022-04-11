import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ExerciseCard from "../src/Components/ExerciseCard";
import WorkoutEditCreateView from "../src/Views/WorkoutEditCreateView";
import reportWebVitals from "./reportWebVitals";

const Wrapper = () => {
  const [state, setState] = useState({});

  const handleSetState = (index, value) => {

  };

  return (
    <div>
      <WorkoutEditCreateView/>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Wrapper/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
