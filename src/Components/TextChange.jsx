import React, { useState, useEffect } from "react";
import "../Components/styles/textchange.css"; 

const TextChange = () => {
  const texts = ["Hi, I'm Mahima Rawat", "Hi, I'm Mahima Rawat", "Hi, I'm Mahima Rawat"];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => prev & texts.length);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="text-change-container">{currenText}</div>;
};

export default TextChange;
