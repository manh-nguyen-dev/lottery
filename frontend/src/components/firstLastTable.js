import React, { useEffect, useState } from "react";
import { prizes } from "../const/prizes";
import { getLastTwoDigits } from "../utils/digit";
import "../styles/firstLastTable.css";

export default function FirstLastTable({ visibleNumbers }) {
  const [digits, setDigits] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });

  const [twoDigits, setTwoDigits] = useState([]);

  useEffect(() => {
    let timeout = null;
    if (visibleNumbers.length) {
      timeout = setTimeout(() => {
        setTwoDigits(visibleNumbers.map((num) => getLastTwoDigits(num.value)));
      }, 3000);
    } else {
      setTwoDigits([]);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [visibleNumbers]);

  const redRecords = prizes
    .filter((prize) => prize.hasRed)
    .flatMap((prize) => prize.records);

  const renderDigits = () => {
    return (
      <>
        {Object.keys(digits).map((i) => (
          <div key={i} className={i % 2 !== 0 ? "bg-blue-light" : ""}>
            {i}
          </div>
        ))}
      </>
    );
  };

  const renderDigitValues = (digit, first = false) => {
    const idx = first ? 0 : 1;
    const revertIdx = first ? 1 : 0;

    let countMatchValue = 0;
    let firstMatchIndex = 0;
    for (let i = 0; i < twoDigits.length; i++) {
      if (twoDigits[i].charAt(idx) === digit.toString()) {
        countMatchValue === 0 && (firstMatchIndex = i);
        countMatchValue++;
      }
    }

    return (
      <>
        {twoDigits.map((num, index) =>
          num.charAt(idx) === digit.toString() ? (
            <span
              key={`two ${revertIdx} ${index}`}
              className={redRecords.includes(index) ? " color-red" : ""}
            >
              {countMatchValue > 1 && firstMatchIndex !== index ? "," : ""}
              {num.charAt(revertIdx)}
            </span>
          ) : (
            ""
          )
        )}
      </>
    );
  };

  return (
    <>
      <div className="frt-lst-table-link">
        <h4>
          <a title="Bảng Loto Miền Bắc" href="#">
            Bảng Loto Miền Bắc
          </a>
        </h4>
      </div>
      <div className="first-last-container">
        <div className="first-last-label">
          <div className="bg-blue-light">Đầu</div>
          {renderDigits()}
        </div>
        <div className="first-last-value ">
          <div className="bg-blue-light">Đuôi</div>
          {Object.keys(digits).map((dg) => (
            <div
              key={"last" + dg}
              className={dg % 2 !== 0 ? "bg-blue-light" : ""}
            >
              {renderDigitValues(dg, true)}
            </div>
          ))}
        </div>
        <div className="first-last-value">
          <div className="bg-blue-light">Đầu</div>
          {Object.keys(digits).map((dg) => (
            <div
              key={"first" + dg}
              className={dg % 2 !== 0 ? "bg-blue-light" : ""}
            >
              {renderDigitValues(dg)}
            </div>
          ))}
        </div>
        <div className="first-last-label">
          <div className="bg-blue-light">Đuôi</div>
          {renderDigits()}
        </div>
      </div>
    </>
  );
}
