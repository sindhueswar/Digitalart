import React, { useState, useEffect } from "react";
import "./counter.css";

interface CounterProps {
  label: string;
  targetValue: number;
}

const Counter: React.FC<CounterProps> = ({ label, targetValue }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const incrementCount = () => {
      if (count < targetValue) {
        setCount((prevCount) => prevCount + 1);
      }
    };

    const interval = setInterval(incrementCount, 8);

    return () => {
      clearInterval(interval);
    };
  }, [count, targetValue]);

  console.log(count);

  return (
    <div className="counterbox">
      <h3 className="counts">
        {count}k<span className="plus">+</span>
      </h3>
      <div className="countdesc">{label}</div>
    </div>
  );
};

export default Counter;
