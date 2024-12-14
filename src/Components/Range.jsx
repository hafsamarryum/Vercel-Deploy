import React, { useEffect, useState } from "react";

const Range = () => {
  const rangeData = [
    { id: 1, title: "Full Stack Development", value: 92 },
    { id: 2, title: "SaaS Services", value: 100 },
    { id: 2, title: "Web Development", value: 95 },
    { id: 3, title: "UI / UX Design", value: 97 },
    { id: 5, title: "App Development", value: 98 },
   
  ];

  const [currentValues, setCurrentValues] = useState(
    rangeData.map(() => 0) // Initialize all progress values to 0
  );

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const intervalTime = 20; // Update interval in ms
    const steps = Math.ceil(duration / intervalTime); // Total steps
    const increments = rangeData.map((ele) => ele.value / steps); // Increment per step for each range

    const interval = setInterval(() => {
      setCurrentValues((prevValues) => {
        const newValues = prevValues.map((value, index) => {
          if (value < rangeData[index].value) {
            const nextValue = value + increments[index];
            return nextValue >= rangeData[index].value
              ? rangeData[index].value // Ensure we stop at the exact target value
              : nextValue;
          }
          return value;
        });
        return newValues;
      });
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [rangeData]);

  return (
    <div className="range-wrapper">
      {rangeData.map((ele, i) => {
        const progress = Math.round(currentValues[i]); // Round for display
        return (
          <div
            className="range-outer"
            key={ele.id}
            style={{ "--progress": `${progress}%` }}
          >
            <div className="top">
              <p>{ele.title}</p>
              <p>{progress}%</p>
            </div>
            <input type="range" value={progress} readOnly />
          </div>
        );
      })}
    </div>
  );
};

export default Range;
