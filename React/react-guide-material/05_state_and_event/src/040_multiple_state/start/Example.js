import { useState } from "react";
const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
  return (
    <>
      <p>Push buttonA {countA}times</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        countAButton
      </button>
      <p>Push buttonB {countB}times</p>
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >
        countBButton
      </button>
      <p>Push buttonC {countC}times</p>
      <button
        onClick={() => {
          setCountC(countC + 1);
        }}
      >
        countCButton
      </button>
    </>
  );
};

export default Example;
