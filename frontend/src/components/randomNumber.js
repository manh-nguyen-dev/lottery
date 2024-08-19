import { useEffect, useState } from "react";
import styles from "../styles/randomNumber.module.css";

export default function RandomNumber({ number = "", duration, record = 0 }) {
  const [displayNumber, setDisplayNumber] = useState(
    generateRandomNumber(number.length)
  );
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayNumber(generateRandomNumber(number.length));
    }, 100);

    const timeout = setTimeout(
      () => {
        clearInterval(interval);
        setDisplayNumber(number);
        setIsFinished(true);
      },
      !isFinished ? duration : 100
    );

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [number, duration]);

  return (
    <div className={styles.numberContainer}>
      {displayNumber.split("").map((digit, index) => (
        <div
          key={index}
          className={`${styles.digitWrapper} ${
            isFinished && styles.digitWrapperDone
          }`}
        >
          <div
            className={`${styles.circle} ${
              index % 2 === 0 ? styles.red : styles.black
            } ${isFinished ? styles.hidden : ""}`}
          />
          <div
            className={`${styles.digit} ${
              record === 26
                ? styles.specRecord
                : record > 21 && record < 26
                ? styles.recordRed
                : ""
            } ${!isFinished ? styles.whiteText : ""}`}
          >
            {digit}
          </div>
        </div>
      ))}
    </div>
  );
}

function generateRandomNumber(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}
