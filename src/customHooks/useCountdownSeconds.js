// useCountdownSeconds.js
import { useState } from 'react';

const useCountdownSeconds = (sec) => {
  const [seconds, setSeconds] = useState(sec);
  const [timerId, setTimerId] = useState(null);

  const timerFun = () => {
    let a = sec;
    let timer = setInterval(() => {
      a--;
      setSeconds(a);
      if (a === 0) {
        clearInterval(timer);
        setTimerId(null);
        return;
      }
    }, 1000);
    setTimerId(timer);
  };

  const clearTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  return [seconds, timerFun, clearTimer];
};

export default useCountdownSeconds;
