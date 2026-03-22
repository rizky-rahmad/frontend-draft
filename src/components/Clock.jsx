import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(`${String(now.getHours()).padStart(2, "0")}.${String(now.getMinutes()).padStart(2, "0")}`);
    };
    updateTime();
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  return <span>{time}</span>;
}