import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [Time, setTime] = useState(0);

  useEffect(() => {
    const Timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(Timer);
  }, []);

  const formatTime = (tSec) => {
    const hours = Math.floor(tSec / 3600);
    const mins = Math.floor((tSec % 3600) / 60);
    const seconds = Math.floor(tSec % 60);

    const pad = (value) => value.toString().padStart(2, "0");

    return `${pad(hours)}:${pad(mins)}:${pad(seconds)}`;
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">Timer</h1>
      <p className="text-2xl mt-4">{formatTime(Time)}</p>
    </div>
  );
};
