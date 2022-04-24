import React, { useEffect, useImperativeHandle } from "react";
import { useStopwatch } from "react-timer-hook";
import styled, { css } from "styled-components";

const MainTemplate = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  width: 100%; 
`;

const Time = styled.p`
  font-size: 48px;
  color: green;
`;

const TimerButton = styled.button`
  height: 80px;
  border: none;
  :focus{
    outline: none;
  }
`;


const setTimer = () => {
  const time = new Date();
  return time.setSeconds(time.getSeconds() + 600);
};

const Timer = ({ timerRef, handleCount }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart
  } = useStopwatch({ setTimer, onExpire: () => console.warn("onExpire called") });


  useImperativeHandle(timerRef, () => ({
    restartTimer: () => {
      start(setTimer());
    }
  }));

  const handleOnClick = () => {
    start();
    handleCount();
  };

  return (
    <MainTemplate>
      <TimerButton
        onClick={handleOnClick}><Time>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</Time></TimerButton>
    </MainTemplate>
  );
};

export default Timer;