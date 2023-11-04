import React, { useState, useEffect } from "react";
import img1 from "./../../images/greenbg.jpg";
import "./bidding.css";
export default function Bidding() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = "December 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="greenbox">
      <div id="grid">
        <div className="bidder">
          <img src={img1} alt="bidder" className="pic1" />
          <div className="picdesc">
            <div className="costdesc">
              <div className="label">lorem bhj:</div>
              <div className="cost">$12njbd</div>
            </div>
            <div className="v1"></div>
            <div className="division">
              <div className="label">loremhj:</div>
              <div className="cost">@gemt</div>
            </div>
          </div>
        </div>
        <div className="timer">
          <div className="countdown">
            <div className="countdown-item">
              <h3 className="countdown-number">{hours}</h3>
              <span className="countdown-label">Hours</span>
            </div>
            <span className="colon">:</span>
            <div className="countdown-item">
              <h3 className="countdown-number">{minutes}</h3>
              <span className="countdown-label">Minutes</span>
            </div>
            <span className="colon">:</span>
            <div className="countdown-item">
              <h3 className="countdown-number">{seconds}</h3>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
