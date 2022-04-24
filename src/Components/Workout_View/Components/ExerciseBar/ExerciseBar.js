import React from "react";
import styled, { css } from "styled-components";

const MainTemplate = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 5px;
`;

const Indicator = styled.div`
  height: 100%;
  width: 10px;
  background-color: transparent;
  margin-right: 1px;
  ${({ active }) =>
  active &&
  css`
      background-color: lightgreen;
    `}
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  width: 100%;
  height: 100%;
  background-color: lightgrey;  
  text-align: left;  
`;

const ExerciseName = styled.p`
  height: 50%;
  font-size: 24px;
  padding-left: 5px;
  margin: 0;
`;

const Exercise = styled.p`
  height: 50%;
  padding-left: 5px;
  font-size: 18px;
  margin: 0;
`;

const SeriesCounter = styled.p`
  font-size: 20px;
  margin: 0 5px 0 0;
  padding: 0;
`;

const ExerciseBar = ({ index, active, name, values, done }) => {
  return (
    <MainTemplate>
      <Indicator active={active}/>
      <Content>
        <div>
          <ExerciseName>{name}</ExerciseName>
          <Exercise>{values}</Exercise>
        </div>
        <div style={{ width: "100%", textAlign: "right" }}>
          <SeriesCounter>Done: {done}</SeriesCounter>
        </div>
      </Content>
    </MainTemplate>
  );
};

export default ExerciseBar;
