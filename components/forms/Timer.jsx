import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [Time, setTime] = useState(0);
  const todayDate = new Date().toLocaleDateString("en-GB");
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    const Timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTime(elapsed);
    }, 1000);

    return () => clearInterval(Timer);
  }, [startTime]);

  useEffect(() => {
    document.title = `Todo-List - ${formatTime(Time)}`;
  }, [Time]);

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
      <h1>{todayDate}</h1>
      <p className="text-6xl mt-4">{formatTime(Time)}</p>
    </div>
  );
};
